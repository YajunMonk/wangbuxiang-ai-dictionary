const data = window.AI_DICT_DATA;

const state = {
  layer: "all",
  mode: "all",
  query: "",
  theme: readTheme(),
  selectedId: "",
  mastered: new Set(readMastered()),
};

const dom = {
  layerList: document.querySelector("#layerList"),
  mapStage: document.querySelector("#mapStage"),
  conceptGrid: document.querySelector("#conceptGrid"),
  detailPanel: document.querySelector("#detailPanel"),
  searchInput: document.querySelector("#searchInput"),
  randomButton: document.querySelector("#randomButton"),
  resetButton: document.querySelector("#resetButton"),
  themeButton: document.querySelector("#themeButton"),
  modeSwitch: document.querySelector("#modeSwitch"),
  clearMasteredButton: document.querySelector("#clearMasteredButton"),
  masteredCount: document.querySelector("#masteredCount"),
  progressFill: document.querySelector("#progressFill"),
  termCount: document.querySelector("#termCount"),
  resultCount: document.querySelector("#resultCount"),
  activeLayerName: document.querySelector("#activeLayerName"),
  toast: document.querySelector("#toast"),
};

const conceptById = new Map(data.concepts.map((concept) => [concept.id, concept]));
const layerById = new Map(data.layers.map((layer) => [layer.id, layer]));
const layerOrder = new Map(data.layers.map((layer, index) => [layer.id, index]));
let currentAudio = null;

state.selectedId = data.concepts[0]?.id || "";

function readMastered() {
  try {
    return JSON.parse(localStorage.getItem("ai-lexicon-mastered") || "[]");
  } catch {
    return [];
  }
}

function readTheme() {
  try {
    const saved = localStorage.getItem("ai-lexicon-theme");
    return saved === "light" || saved === "dark" ? saved : "dark";
  } catch {
    return "dark";
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("ai-lexicon-theme", theme);
  } catch {
    // Theme persistence is optional; the live switch still works without storage.
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (!dom.themeButton) return;
  const isLight = theme === "light";
  dom.themeButton.setAttribute("aria-pressed", String(isLight));
  dom.themeButton.setAttribute("aria-label", isLight ? "切换深色模式" : "切换明亮模式");
  dom.themeButton.setAttribute("title", isLight ? "切换深色模式" : "切换明亮模式");
}

function saveMastered() {
  localStorage.setItem("ai-lexicon-mastered", JSON.stringify([...state.mastered]));
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function playIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 5v14l11-7Z" />
      <path d="M18.5 8.5a5 5 0 0 1 0 7" />
    </svg>
  `;
}

function checkIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  `;
}

function layerStyle(conceptOrLayer) {
  const layer = conceptOrLayer.color ? conceptOrLayer : layerById.get(conceptOrLayer.layer);
  return `--layer-color: ${layer?.color || "#c8d2f1"}`;
}

function conceptText(concept) {
  return [
    concept.title,
    concept.chinese,
    concept.english,
    concept.layerName,
    concept.oneLine,
    ...concept.solves,
    ...concept.not,
    ...concept.mistakes,
    ...concept.product.map((row) => `${row.label} ${row.value}`),
    concept.reviewQuestion,
  ]
    .join(" ")
    .toLowerCase();
}

function queryMatch(concept) {
  const query = state.query.trim().toLowerCase();
  if (!query) return true;
  return conceptText(concept).includes(query);
}

function modeMatch(concept) {
  if (state.mode === "mastered") return state.mastered.has(concept.id);
  if (state.mode === "unmastered") return !state.mastered.has(concept.id);
  return true;
}

function filteredConcepts({ includeLayer = true } = {}) {
  return data.concepts.filter((concept) => {
    const layerOk = !includeLayer || state.layer === "all" || concept.layer === state.layer;
    return layerOk && queryMatch(concept) && modeMatch(concept);
  });
}

function ensureSelection() {
  const visible = filteredConcepts();
  if (!visible.length) return;
  if (!visible.some((concept) => concept.id === state.selectedId)) {
    state.selectedId = visible[0].id;
  }
}

function renderLayers() {
  const allCount = data.concepts.length;
  const buttons = [
    `
      <button class="layer-button ${state.layer === "all" ? "is-active" : ""}" data-layer="all" style="--layer-color: var(--amber)">
        <small>All Stages</small>
        <strong>全部概念</strong>
        <span>${allCount} 个词</span>
      </button>
    `,
    ...data.layers.map(
      (layer) => `
        <button class="layer-button ${state.layer === layer.id ? "is-active" : ""}" data-layer="${layer.id}" style="${layerStyle(layer)}">
          <small>${escapeHtml(layer.stage)} / ${escapeHtml(layer.english)}</small>
          <strong>${escapeHtml(layer.name)}</strong>
          <span>${escapeHtml(layer.short)} · ${layer.count} 个词</span>
        </button>
      `,
    ),
  ];
  dom.layerList.innerHTML = buttons.join("");
}

function renderMap() {
  const mapConcepts = filteredConcepts({ includeLayer: false });
  dom.mapStage.innerHTML = data.layers
    .map((layer) => {
      const concepts = mapConcepts.filter((concept) => concept.layer === layer.id);
      const nodes = concepts
        .map(
          (concept) => `
            <button
              class="map-node ${concept.id === state.selectedId ? "is-active" : ""} ${state.mastered.has(concept.id) ? "is-mastered" : ""}"
              data-select="${concept.id}"
              style="${layerStyle(concept)}"
              title="${escapeHtml(concept.title)}"
            >
              <span>${escapeHtml(concept.english)}</span>
              <strong>${escapeHtml(concept.chinese)}</strong>
            </button>
          `,
        )
        .join("");

      return `
        <section class="stage-lane" style="${layerStyle(layer)}">
          <div class="lane-meta">
            <small>${escapeHtml(layer.stage)}</small>
            <strong>${escapeHtml(layer.name)}</strong>
            <span>${concepts.length} / ${layer.count}</span>
          </div>
          <div class="node-cluster">${nodes || `<span class="card-meta">No match</span>`}</div>
        </section>
      `;
    })
    .join("");
}

function renderGrid() {
  const concepts = filteredConcepts();
  dom.resultCount.textContent = `${concepts.length} 个结果`;
  dom.activeLayerName.textContent =
    state.layer === "all" ? "全部" : layerById.get(state.layer)?.name || "全部";

  dom.conceptGrid.innerHTML =
    concepts
      .map((concept) => {
        const mastered = state.mastered.has(concept.id);
        return `
          <article
            class="concept-card ${concept.id === state.selectedId ? "is-active" : ""} ${mastered ? "is-mastered" : ""}"
            data-select="${concept.id}"
            style="${layerStyle(concept)}"
          >
            <header>
              <div>
                <span class="card-meta">${escapeHtml(concept.layerName)}</span>
                <h3>${escapeHtml(concept.chinese)}</h3>
                <div class="card-english">${escapeHtml(concept.english)}</div>
              </div>
              <button class="play-button" data-speak="${concept.id}" title="播放 ${escapeHtml(concept.english)}" aria-label="播放 ${escapeHtml(concept.english)}">
                ${playIcon()}
              </button>
            </header>
            <p>${escapeHtml(concept.oneLine)}</p>
            <span class="card-meta">${mastered ? "Mastered" : "Ready"}</span>
          </article>
        `;
      })
      .join("") || `<div class="detail-empty">没有匹配的概念</div>`;
}

function listBlock(title, rows) {
  if (!rows?.length) return "";
  return `
    <section class="section-block">
      <h3>${escapeHtml(title)}</h3>
      <ul class="bullet-list">
        ${rows.map((row) => `<li>${escapeHtml(row)}</li>`).join("")}
      </ul>
    </section>
  `;
}

function productBlock(rows) {
  if (!rows?.length) return "";
  return `
    <section class="section-block">
      <h3>产品视角</h3>
      <ul class="product-list">
        ${rows
          .map((row) => `<li><strong>${escapeHtml(row.label)}：</strong>${escapeHtml(row.value)}</li>`)
          .join("")}
      </ul>
    </section>
  `;
}

function relatedBlock(concept) {
  const related = concept.related.map((id) => conceptById.get(id)).filter(Boolean);
  if (!related.length) return "";
  return `
    <section class="section-block">
      <h3>相关概念</h3>
      <div class="chip-row">
        ${related
          .map(
            (item) => `
              <button class="chip" data-select="${item.id}" style="${layerStyle(item)}">
                ${escapeHtml(item.chinese)}
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderDetail() {
  const concept = conceptById.get(state.selectedId);
  if (!concept) {
    dom.detailPanel.innerHTML = `<div class="detail-empty">请选择一个概念</div>`;
    return;
  }

  const layer = layerById.get(concept.layer);
  const mastered = state.mastered.has(concept.id);

  dom.detailPanel.style = layerStyle(concept);
  dom.detailPanel.innerHTML = `
    <div class="detail-main">
      <header>
        <div class="detail-title">
          <div class="detail-path">${escapeHtml(layer?.stage || "")} / ${escapeHtml(concept.layerName)}</div>
          <h2>${escapeHtml(concept.chinese)}</h2>
          <div class="detail-english">${escapeHtml(concept.english)}</div>
        </div>
        <div class="detail-actions">
          <button class="play-button" data-speak="${concept.id}" title="播放 ${escapeHtml(concept.english)}" aria-label="播放 ${escapeHtml(concept.english)}">
            ${playIcon()}
          </button>
          <button class="master-button ${mastered ? "is-on" : ""}" data-master="${concept.id}" title="切换掌握状态" aria-label="切换掌握状态">
            ${checkIcon()}
          </button>
        </div>
      </header>
      <section class="section-block">
        <h3>一句话</h3>
        <p>${escapeHtml(concept.oneLine)}</p>
      </section>
      ${productBlock(concept.product)}
      ${listBlock("解决的问题", concept.solves)}
      ${listBlock("不是", concept.not)}
      ${listBlock("易错点", concept.mistakes)}
      ${
        concept.reviewQuestion
          ? `<section class="section-block"><h3>温习题</h3><p>${escapeHtml(concept.reviewQuestion)}</p></section>`
          : ""
      }
      ${relatedBlock(concept)}
      <section class="section-block">
        <h3>原始笔记</h3>
        <p>${escapeHtml(concept.path)}</p>
      </section>
    </div>
  `;
}

function renderProgress() {
  const total = data.concepts.length;
  const masteredCount = data.concepts.filter((concept) => state.mastered.has(concept.id)).length;
  dom.termCount.textContent = String(total);
  dom.masteredCount.textContent = `${masteredCount} / ${total}`;
  dom.progressFill.style.width = `${total ? Math.round((masteredCount / total) * 100) : 0}%`;
}

function render() {
  ensureSelection();
  renderLayers();
  renderMap();
  renderGrid();
  renderDetail();
  renderProgress();
}

function selectConcept(id) {
  if (!conceptById.has(id)) return;
  state.selectedId = id;
  render();
}

function speakConcept(id) {
  const concept = conceptById.get(id);
  if (!concept) return;

  if (concept.audio) {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(concept.audio);
    currentAudio
      .play()
      .then(() => showToast(concept.english))
      .catch(() => speakWithBrowserVoice(concept));
    return;
  }

  speakWithBrowserVoice(concept);
}

function speakWithBrowserVoice(concept) {
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    showToast("当前浏览器不支持语音播放");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(concept.english);
  utterance.lang = "en-US";
  utterance.rate = 0.84;
  utterance.pitch = 1;
  utterance.volume = 1;
  window.speechSynthesis.speak(utterance);
  showToast(concept.english);
}

function toggleMastered(id) {
  if (state.mastered.has(id)) {
    state.mastered.delete(id);
  } else {
    state.mastered.add(id);
  }
  saveMastered();
  render();
}

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => dom.toast.classList.remove("is-visible"), 1100);
}

function clearFilters() {
  state.layer = "all";
  state.mode = "all";
  state.query = "";
  dom.searchInput.value = "";
  render();
}

document.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak]");
  if (speakButton) {
    event.stopPropagation();
    speakConcept(speakButton.dataset.speak);
    return;
  }

  const masterButton = event.target.closest("[data-master]");
  if (masterButton) {
    event.stopPropagation();
    toggleMastered(masterButton.dataset.master);
    return;
  }

  const selectButton = event.target.closest("[data-select]");
  if (selectButton) {
    selectConcept(selectButton.dataset.select);
  }
});

dom.layerList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-layer]");
  if (!button) return;
  state.layer = button.dataset.layer;
  render();
});

dom.modeSwitch.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mode]");
  if (!button) return;
  state.mode = button.dataset.mode;
  dom.modeSwitch.querySelectorAll("button").forEach((item) => {
    item.classList.toggle("is-active", item === button);
  });
  render();
});

dom.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

dom.randomButton.addEventListener("click", () => {
  const concepts = filteredConcepts();
  if (!concepts.length) return;
  const next = concepts[Math.floor(Math.random() * concepts.length)];
  selectConcept(next.id);
  showToast(next.title);
});

dom.resetButton.addEventListener("click", clearFilters);

dom.themeButton.addEventListener("click", () => {
  state.theme = state.theme === "light" ? "dark" : "light";
  applyTheme(state.theme);
  saveTheme(state.theme);
  showToast(state.theme === "light" ? "明亮模式" : "深色模式");
});

dom.clearMasteredButton.addEventListener("click", () => {
  state.mastered.clear();
  saveMastered();
  render();
  showToast("掌握记录已清空");
});

applyTheme(state.theme);
render();
