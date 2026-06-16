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

const visualPresets = {
  model: { kind: "flow", badge: "LLM", labels: ["输入", "模型", "输出"] },
  reasoning: { kind: "flow", badge: "STEP", labels: ["问题", "拆解", "答案"] },
  token: { kind: "tiles", badge: "TK", labels: ["字", "词", "片段"] },
  window: { kind: "window", badge: "CTX", labels: ["有限桌面", "放得下", "看得见"] },
  risk: { kind: "warning", badge: "?", labels: ["缺证据", "补全", "风险"] },
  prompt: { kind: "document", badge: "DO", labels: ["任务", "要求", "交付"] },
  rulebook: { kind: "document", badge: "RULE", labels: ["长期规则", "边界", "执行"] },
  examples: { kind: "cards", badge: "EX", labels: ["样例 1", "样例 2", "继续"] },
  output: { kind: "cards", badge: "JSON", labels: ["字段", "格式", "结果"] },
  config: { kind: "control", badge: "CFG", labels: ["模型", "权限", "连接"] },
  context: { kind: "desk", badge: "CTX", labels: ["资料", "历史", "规则"] },
  vector: { kind: "network", badge: "XY", labels: ["语义", "坐标", "相近"] },
  "vector-db": { kind: "stack", badge: "DB", labels: ["向量", "索引", "召回"] },
  chunks: { kind: "tiles", badge: "CUT", labels: ["长文", "切块", "检索"] },
  retrieval: { kind: "search", badge: "RAG", labels: ["提问", "找证据", "回答"] },
  library: { kind: "stack", badge: "KB", labels: ["资料", "整理", "复用"] },
  memory: { kind: "cards", badge: "MEM", labels: ["偏好", "经验", "下次用"] },
  api: { kind: "hub", badge: "API", labels: ["请求", "接口", "返回"] },
  agent: { kind: "loop", badge: "AI", labels: ["观察", "行动", "检查"] },
  surfaces: { kind: "hub", badge: "UI", labels: ["App", "CLI", "Cloud"] },
  function: { kind: "flow", badge: "FN", labels: ["意图", "参数", "执行"] },
  tool: { kind: "hub", badge: "TOOL", labels: ["查", "算", "写"] },
  workflow: { kind: "route", badge: "WF", labels: ["步骤 1", "步骤 2", "完成"] },
  automation: { kind: "timer", badge: "AUTO", labels: ["触发", "后台", "结果"] },
  mcp: { kind: "plug", badge: "MCP", labels: ["协议", "服务", "工具"] },
  loop: { kind: "loop", badge: "LOOP", labels: ["观察", "计划", "行动"] },
  workspace: { kind: "workspace", badge: "WT", labels: ["主线", "分身", "合并"] },
  "workspace-home": { kind: "workspace", badge: "LOCAL", labels: ["本地", "当前", "主现场"] },
  handoff: { kind: "route", badge: "GO", labels: ["后台", "交接", "本地"] },
  package: { kind: "package", badge: "PKG", labels: ["说明", "素材", "工具"] },
  connector: { kind: "hub", badge: "AUTH", labels: ["授权", "应用", "数据"] },
  subagent: { kind: "multi", badge: "SUB", labels: ["子任务", "探索", "汇总"] },
  plan: { kind: "route", badge: "PLAN", labels: ["路径", "风险", "检查"] },
  reflection: { kind: "mirror", badge: "LOOK", labels: ["结果", "回看", "修正"] },
  multi: { kind: "multi", badge: "TEAM", labels: ["分工", "传递", "合并"] },
  eval: { kind: "score", badge: "EVAL", labels: ["样本", "标准", "得分"] },
  log: { kind: "ledger", badge: "LOG", labels: ["时间", "事件", "状态"] },
  trace: { kind: "trace", badge: "PATH", labels: ["输入", "工具", "输出"] },
  latency: { kind: "meter", badge: "MS", labels: ["开始", "等待", "返回"] },
  cost: { kind: "meter", badge: "$", labels: ["模型", "工具", "人工"] },
  failure: { kind: "warning", badge: "ERR", labels: ["模式", "原因", "修复"] },
  fallback: { kind: "route", badge: "ALT", labels: ["主路", "失败", "备用"] },
  guardrails: { kind: "shield", badge: "SAFE", labels: ["边界", "拦截", "放行"] },
  human: { kind: "approval", badge: "HITL", labels: ["AI", "人审", "继续"] },
  permissions: { kind: "lock", badge: "KEY", labels: ["可读", "可写", "拒绝"] },
  sandbox: { kind: "box", badge: "BOX", labels: ["隔离", "限制", "安全"] },
  approval: { kind: "approval", badge: "OK", labels: ["风险", "确认", "执行"] },
  hooks: { kind: "route", badge: "HOOK", labels: ["之前", "触发", "之后"] },
  rules: { kind: "traffic", badge: "RULE", labels: ["允许", "询问", "禁止"] },
  injection: { kind: "warning", badge: "!", labels: ["资料", "假指令", "拦截"] },
};

function visualPreset(concept) {
  return (
    visualPresets[concept.visualType] ||
    visualPresets[concept.layer] ||
    { kind: "flow", badge: "AI", labels: ["输入", "处理", "输出"] }
  );
}

function svgText(value, x, y, extra = "") {
  return `<text class="visual-text ${extra}" x="${x}" y="${y}">${escapeHtml(value)}</text>`;
}

function svgNode(x, y, w, h, label, className = "") {
  return `
    <rect class="visual-fill ${className}" x="${x}" y="${y}" width="${w}" height="${h}" rx="10" />
    ${svgText(label, x + w / 2, y + h / 2 + 4)}
  `;
}

function illustrationSvg(concept) {
  const preset = visualPreset(concept);
  const [a, b, c] = preset.labels;
  const badge = escapeHtml(preset.badge);
  const title = escapeHtml(concept.chinese);
  const arrow = `<path class="visual-line visual-arrow" d="M76 74h36M145 74h31" />`;
  let body = "";

  if (preset.kind === "hub") {
    body = `
      <circle class="visual-core" cx="120" cy="74" r="31" />
      ${svgText(badge, 120, 79, "visual-badge")}
      <circle class="visual-fill" cx="48" cy="42" r="20" />${svgText(a, 48, 47)}
      <circle class="visual-fill" cx="194" cy="42" r="20" />${svgText(b, 194, 47)}
      <circle class="visual-fill" cx="120" cy="122" r="20" />${svgText(c, 120, 127)}
      <path class="visual-line" d="M66 49 92 62M174 49 148 62M120 102v-9" />
    `;
  } else if (preset.kind === "loop") {
    body = `
      <path class="visual-line visual-loop" d="M74 80a48 48 0 1 1 19 38" />
      <circle class="visual-core" cx="120" cy="74" r="27" />${svgText(badge, 120, 79, "visual-badge")}
      <circle class="visual-fill" cx="72" cy="74" r="17" />${svgText(a, 72, 79)}
      <circle class="visual-fill" cx="142" cy="32" r="17" />${svgText(b, 142, 37)}
      <circle class="visual-fill" cx="156" cy="116" r="17" />${svgText(c, 156, 121)}
    `;
  } else if (preset.kind === "cards") {
    body = `
      <rect class="visual-fill muted" x="42" y="38" width="118" height="70" rx="10" />
      <rect class="visual-fill" x="58" y="28" width="118" height="70" rx="10" />
      <rect class="visual-core" x="74" y="18" width="118" height="70" rx="10" />
      ${svgText(badge, 133, 47, "visual-badge")}
      ${svgText(a, 74, 116)}${svgText(b, 120, 122)}${svgText(c, 171, 116)}
    `;
  } else if (preset.kind === "tiles") {
    body = `
      ${[0, 1, 2, 3, 4].map((i) => `<rect class="visual-fill ${i === 2 ? "accent" : ""}" x="${42 + i * 31}" y="${45 + (i % 2) * 8}" width="24" height="30" rx="6" />`).join("")}
      <path class="visual-line" d="M50 100h138" />
      ${svgText(a, 52, 123)}${svgText(b, 120, 123)}${svgText(c, 188, 123)}
    `;
  } else if (preset.kind === "network") {
    body = `
      <path class="visual-line" d="M62 50 118 76 176 42M62 50l24 64 90-72M86 114l32-38 58 34" />
      <circle class="visual-core" cx="118" cy="76" r="26" />${svgText(badge, 118, 81, "visual-badge")}
      <circle class="visual-fill" cx="62" cy="50" r="16" />${svgText(a, 62, 55)}
      <circle class="visual-fill" cx="176" cy="42" r="16" />${svgText(b, 176, 47)}
      <circle class="visual-fill" cx="86" cy="114" r="16" />${svgText(c, 86, 119)}
    `;
  } else if (preset.kind === "stack") {
    body = `
      <ellipse class="visual-core" cx="120" cy="44" rx="58" ry="17" />
      <path class="visual-fill" d="M62 44v58c0 9 26 18 58 18s58-9 58-18V44" />
      <path class="visual-line" d="M62 72c0 9 26 18 58 18s58-9 58-18M62 98c0 9 26 18 58 18s58-9 58-18" />
      ${svgText(badge, 120, 49, "visual-badge")}
      ${svgText(a, 75, 136)}${svgText(b, 120, 136)}${svgText(c, 165, 136)}
    `;
  } else if (preset.kind === "route" || preset.kind === "trace") {
    body = `
      <path class="visual-line ${preset.kind === "trace" ? "dashed" : ""}" d="M42 94 C70 30, 108 118, 132 70 S180 38, 202 94" />
      <circle class="visual-fill" cx="42" cy="94" r="17" />${svgText(a, 42, 99)}
      <circle class="visual-core" cx="132" cy="70" r="21" />${svgText(badge, 132, 75, "visual-badge")}
      <circle class="visual-fill accent" cx="202" cy="94" r="17" />${svgText(c, 202, 99)}
      ${svgText(b, 120, 126)}
    `;
  } else if (preset.kind === "workspace") {
    body = `
      <rect class="visual-fill" x="32" y="36" width="78" height="74" rx="10" />
      <rect class="visual-core" x="130" y="30" width="78" height="84" rx="10" />
      <path class="visual-line visual-arrow" d="M110 74h20" />
      ${svgText(a, 71, 78)}${svgText(b, 169, 75)}${svgText(c, 120, 132)}
    `;
  } else if (preset.kind === "shield" || preset.kind === "lock" || preset.kind === "box" || preset.kind === "approval") {
    const shield = preset.kind === "lock" ? `<rect class="visual-core" x="82" y="58" width="76" height="58" rx="12" /><path class="visual-line" d="M97 58v-12c0-15 46-15 46 0v12" />` : preset.kind === "box" ? `<rect class="visual-core" x="70" y="36" width="100" height="86" rx="14" /><path class="visual-line" d="M90 56h60M90 102h60" />` : `<path class="visual-core" d="M120 24 174 44v38c0 31-24 50-54 58-30-8-54-27-54-58V44Z" />`;
    body = `
      ${shield}
      ${svgText(badge, 120, 82, "visual-badge")}
      ${svgText(a, 52, 128)}${svgText(b, 120, 136)}${svgText(c, 188, 128)}
    `;
  } else if (preset.kind === "meter") {
    body = `
      <path class="visual-line" d="M64 104a56 56 0 0 1 112 0" />
      <path class="visual-core" d="M120 104 158 68" />
      <rect class="visual-fill" x="44" y="111" width="152" height="18" rx="9" />
      ${svgText(badge, 120, 75, "visual-badge")}
      ${svgText(a, 56, 135)}${svgText(b, 120, 135)}${svgText(c, 184, 135)}
    `;
  } else if (preset.kind === "warning") {
    body = `
      <path class="visual-core" d="M120 26 190 122H50Z" />
      ${svgText(badge, 120, 88, "visual-badge")}
      <path class="visual-line" d="M120 55v28M120 98v4" />
      ${svgText(a, 66, 134)}${svgText(b, 120, 142)}${svgText(c, 174, 134)}
    `;
  } else if (preset.kind === "traffic") {
    body = `
      <rect class="visual-fill" x="90" y="22" width="60" height="105" rx="18" />
      <circle class="visual-core ok" cx="120" cy="48" r="14" />
      <circle class="visual-core ask" cx="120" cy="76" r="14" />
      <circle class="visual-core stop" cx="120" cy="104" r="14" />
      ${svgText(a, 62, 53)}${svgText(b, 178, 81)}${svgText(c, 62, 109)}
    `;
  } else if (preset.kind === "plug") {
    body = `
      <rect class="visual-fill" x="38" y="50" width="58" height="48" rx="10" />${svgText(a, 67, 79)}
      <path class="visual-line" d="M96 74h38" />
      <path class="visual-core" d="M136 50h42v48h-42c-13 0-24-11-24-24s11-24 24-24Z" />
      <path class="visual-line" d="M178 62h22M178 86h22" />
      ${svgText(badge, 154, 79, "visual-badge")}${svgText(c, 194, 118)}
    `;
  } else if (preset.kind === "control") {
    body = `
      <rect class="visual-fill" x="46" y="30" width="148" height="92" rx="14" />
      <path class="visual-line" d="M72 58h96M72 82h96M72 106h96" />
      <circle class="visual-core" cx="100" cy="58" r="10" />
      <circle class="visual-core" cx="144" cy="82" r="10" />
      <circle class="visual-core" cx="116" cy="106" r="10" />
      ${svgText(badge, 120, 142, "visual-badge")}
    `;
  } else if (preset.kind === "desk" || preset.kind === "window" || preset.kind === "document") {
    body = `
      <rect class="visual-core" x="42" y="30" width="156" height="92" rx="14" />
      <path class="visual-line" d="M64 58h84M64 80h112M64 102h72" />
      <rect class="visual-fill" x="148" y="52" width="32" height="40" rx="7" />
      ${svgText(badge, 164, 77, "visual-badge")}
      ${svgText(a, 62, 140)}${svgText(b, 120, 140)}${svgText(c, 178, 140)}
    `;
  } else if (preset.kind === "timer") {
    body = `
      <circle class="visual-core" cx="84" cy="76" r="39" />
      <path class="visual-line" d="M84 48v30l22 14" />
      <rect class="visual-fill" x="134" y="42" width="62" height="68" rx="12" />
      ${svgText(badge, 165, 79, "visual-badge")}
      ${svgText(a, 52, 134)}${svgText(b, 120, 140)}${svgText(c, 188, 134)}
    `;
  } else if (preset.kind === "mirror") {
    body = `
      <rect class="visual-fill" x="48" y="40" width="58" height="76" rx="12" />
      <rect class="visual-core" x="134" y="34" width="58" height="88" rx="29" />
      <path class="visual-line visual-arrow" d="M106 76h28" />
      ${svgText(a, 77, 80)}${svgText(b, 163, 79)}${svgText(c, 120, 140)}
    `;
  } else if (preset.kind === "multi") {
    body = `
      <circle class="visual-fill" cx="62" cy="58" r="21" />${svgText(a, 62, 63)}
      <circle class="visual-fill" cx="120" cy="34" r="21" />${svgText(b, 120, 39)}
      <circle class="visual-fill" cx="178" cy="58" r="21" />${svgText(c, 178, 63)}
      <path class="visual-line" d="M79 70 111 101M161 70 129 101M120 55v44" />
      <circle class="visual-core" cx="120" cy="112" r="23" />${svgText(badge, 120, 117, "visual-badge")}
    `;
  } else if (preset.kind === "ledger" || preset.kind === "score") {
    body = `
      <rect class="visual-core" x="52" y="30" width="136" height="92" rx="12" />
      <path class="visual-line" d="M76 58h88M76 80h88M76 102h88" />
      <circle class="visual-fill" cx="64" cy="58" r="5" />
      <circle class="visual-fill" cx="64" cy="80" r="5" />
      <circle class="visual-fill" cx="64" cy="102" r="5" />
      ${svgText(badge, 120, 142, "visual-badge")}
    `;
  } else if (preset.kind === "search") {
    body = `
      <rect class="visual-fill" x="38" y="42" width="64" height="64" rx="12" />${svgText(a, 70, 78)}
      <circle class="visual-core" cx="138" cy="66" r="25" /><path class="visual-line" d="m157 85 27 27" />
      ${svgText(b, 138, 71)}${svgText(c, 184, 132)}
    `;
  } else if (preset.kind === "package") {
    body = `
      <path class="visual-core" d="M60 54 120 24l60 30v64l-60 30-60-30Z" />
      <path class="visual-line" d="M60 54l60 30 60-30M120 84v64" />
      ${svgText(badge, 120, 108, "visual-badge")}
      ${svgText(a, 64, 140)}${svgText(b, 120, 28)}${svgText(c, 176, 140)}
    `;
  } else {
    body = `${svgNode(30, 50, 54, 48, a)}${arrow}<circle class="visual-core" cx="120" cy="74" r="30" />${svgText(badge, 120, 79, "visual-badge")}${svgNode(176, 50, 54, 48, c)}`;
  }

  return `
    <svg class="concept-svg" viewBox="0 0 240 150" role="img" aria-label="${title} 图解">
      <rect class="visual-canvas" x="8" y="8" width="224" height="134" rx="18" />
      <path class="visual-grid" d="M30 36h180M30 74h180M30 112h180M60 24v104M120 24v104M180 24v104" />
      ${body}
    </svg>
  `;
}

function conceptIllustration(concept, variant = "detail") {
  const caption = concept.visual || concept.oneLine || concept.title;
  return `
    <figure class="concept-illustration ${variant === "card" ? "is-card" : "is-detail"} visual-${escapeHtml(concept.visualType || concept.layer)}">
      ${illustrationSvg(concept)}
      ${variant === "detail" ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ""}
    </figure>
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
    ...(concept.aliases || []),
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
            ${conceptIllustration(concept, "card")}
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
      ${conceptIllustration(concept)}
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
