import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteDir = path.dirname(fileURLToPath(import.meta.url));
const dictionaryRoot = path.resolve(siteDir, "..");
const outFile = path.join(siteDir, "data.js");

const layers = [
  {
    id: "model",
    name: "模型层",
    english: "Model",
    stage: "Stage 01",
    short: "AI 本身有什么能力",
    color: "#6ee7f9",
  },
  {
    id: "instruction",
    name: "指令层",
    english: "Instruction",
    stage: "Stage 02",
    short: "人怎么把任务讲清楚",
    color: "#ffb84d",
  },
  {
    id: "context",
    name: "上下文层",
    english: "Context",
    stage: "Stage 03",
    short: "AI 怎么拿到足够信息",
    color: "#8ef28b",
  },
  {
    id: "action",
    name: "行动层",
    english: "Action",
    stage: "Stage 04",
    short: "AI 怎么调用工具和推进任务",
    color: "#ff6b6b",
  },
  {
    id: "evaluation",
    name: "评估层",
    english: "Evaluation",
    stage: "Stage 05",
    short: "怎么检查、纠错和兜底",
    color: "#c6a5ff",
  },
];

const layerIdByName = new Map(layers.map((layer) => [layer.name, layer.id]));

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "AI词典网站") return [];
      return walk(fullPath);
    }
    return fullPath.endsWith(".md") ? [fullPath] : [];
  });
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  return Object.fromEntries(
    match[1]
      .split("\n")
      .map((line) => line.match(/^([A-Za-z_]+):\s*(.*)$/))
      .filter(Boolean)
      .map((matchLine) => {
        const value = matchLine[2].replace(/^["']|["']$/g, "").trim();
        return [matchLine[1], value];
      }),
  );
}

function frontmatterAliases(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return [];
  const block = match[1];
  const aliases = [];
  const inline = block.match(/^aliases:\s*\[([^\]]+)\]\s*$/m);
  if (inline) {
    aliases.push(
      ...inline[1]
        .split(",")
        .map((item) => item.replace(/^["']|["']$/g, "").trim())
        .filter(Boolean),
    );
  }
  const multiline = block.match(/^aliases:\s*\n((?:\s+-\s+.+\n?)+)/m);
  if (multiline) {
    aliases.push(
      ...multiline[1]
        .split("\n")
        .map((line) => line.replace(/^\s*-\s+/, "").trim())
        .filter(Boolean),
    );
  }
  return [...new Set(aliases)];
}

function stripFrontmatter(raw) {
  return raw.replace(/^---\n[\s\S]*?\n---\n?/, "");
}

function section(markdown, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = markdown.match(new RegExp(`(?:^|\\n)## ${escaped}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`));
  return match ? match[1].trim() : "";
}

function cleanInline(text) {
  return text
    .replace(/!\[\[([^\]]+)\]\]/g, "$1")
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function lines(block) {
  return block
    .split("\n")
    .map((line) => line.replace(/^\s*[-*]\s+/, "").trim())
    .filter(Boolean)
    .map(cleanInline);
}

function paragraph(block) {
  return cleanInline(
    block
      .split("\n")
      .filter((line) => !line.trim().startsWith("- "))
      .join(" "),
  );
}

function productRows(block) {
  return lines(block)
    .map((line) => {
      const index = line.indexOf("：");
      if (index === -1) return { label: "观察", value: line };
      return {
        label: line.slice(0, index),
        value: line.slice(index + 1).trim(),
      };
    })
    .filter((row) => row.value);
}

function relatedNames(block) {
  return [...block.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)].map((match) => match[1].trim());
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-|-$/g, "");
}

function titleParts(title, fallbackEnglish) {
  const paren = title.match(/^(.+?)[（(]([^)）]+)[)）]$/);
  if (paren) {
    return {
      chinese: cleanInline(paren[1]),
      english: fallbackEnglish || cleanInline(paren[2]),
    };
  }
  return {
    chinese: cleanInline(title),
    english: fallbackEnglish || cleanInline(title),
  };
}

const concepts = walk(dictionaryRoot)
  .map((filePath) => {
    const raw = fs.readFileSync(filePath, "utf8");
    const frontmatter = parseFrontmatter(raw);
    if (frontmatter.type !== "concept") return null;

    const markdown = stripFrontmatter(raw);
    const h1 = markdown.match(/^#\s+(.+)$/m);
    const title = h1 ? cleanInline(h1[1]) : path.basename(filePath, ".md");
    const { chinese, english } = titleParts(title, frontmatter.english);
    const layerName = frontmatter.layer || path.basename(path.dirname(filePath)).replace(/^\d+_/, "");
    const layerId = layerIdByName.get(layerName) || "other";
    const relativePath = path.relative(dictionaryRoot, filePath);
    const oneLine = section(markdown, "一句话");
    const visual = section(markdown, "具象图解");
    const product = section(markdown, "放在产品里怎么看");
    const related = section(markdown, "相关概念");

    return {
      id: slugify(path.basename(filePath, ".md")),
      title,
      chinese,
      english,
      layer: layerId,
      layerName,
      aliases: frontmatterAliases(raw),
      sourceLevel: frontmatter.source_level || "",
      path: relativePath,
      audio: `audio/${slugify(path.basename(filePath, ".md"))}.m4a`,
      visualType: frontmatter.visual_type || layerId,
      visual: paragraph(visual),
      oneLine: paragraph(oneLine),
      solves: lines(section(markdown, "它解决什么问题")).slice(0, 4),
      not: lines(section(markdown, "它不是什么")).slice(0, 4),
      mistakes: lines(section(markdown, "常见误区")).slice(0, 4),
      product: productRows(product).slice(0, 5),
      relatedNames: relatedNames(related),
      reviewQuestion: paragraph(section(markdown, "温习问题")),
    };
  })
  .filter(Boolean)
  .sort((a, b) => {
    const layerDiff =
      layers.findIndex((layer) => layer.id === a.layer) -
      layers.findIndex((layer) => layer.id === b.layer);
    return layerDiff || a.english.localeCompare(b.english);
  });

const idByRelatedName = new Map();
for (const concept of concepts) {
  idByRelatedName.set(concept.title, concept.id);
  idByRelatedName.set(concept.chinese, concept.id);
  idByRelatedName.set(concept.english, concept.id);
  idByRelatedName.set(path.basename(concept.path, ".md"), concept.id);
  for (const alias of concept.aliases || []) {
    idByRelatedName.set(alias, concept.id);
  }
}

for (const concept of concepts) {
  concept.related = concept.relatedNames
    .map((name) => idByRelatedName.get(name) || idByRelatedName.get(name.replace(/[（(].*$/, "").trim()))
    .filter(Boolean)
    .filter((id) => id !== concept.id);
  delete concept.relatedNames;
}

const data = {
  generatedAt: new Date().toISOString(),
  sourceRoot: "02_领域/AI能力/AI概念字典",
  layers: layers.map((layer) => ({
    ...layer,
    count: concepts.filter((concept) => concept.layer === layer.id).length,
  })),
  concepts,
};

fs.writeFileSync(
  outFile,
  `window.AI_DICT_DATA = ${JSON.stringify(data, null, 2)};\n`,
  "utf8",
);

console.log(`Generated ${concepts.length} concepts -> ${path.relative(process.cwd(), outFile)}`);
