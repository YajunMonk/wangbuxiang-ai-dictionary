import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const siteDir = path.dirname(fileURLToPath(import.meta.url));
const dataFile = path.join(siteDir, "data.js");
const audioDir = path.join(siteDir, "audio");
const tempDir = path.join(audioDir, ".tmp");

if (!fs.existsSync(dataFile)) {
  throw new Error("Run build-data.mjs before build-audio.mjs");
}

fs.mkdirSync(audioDir, { recursive: true });
fs.mkdirSync(tempDir, { recursive: true });

const raw = fs.readFileSync(dataFile, "utf8");
const json = raw.replace(/^window\.AI_DICT_DATA\s*=\s*/, "").replace(/;\s*$/, "");
const data = JSON.parse(json);

let created = 0;
let skipped = 0;

for (const concept of data.concepts) {
  const output = path.join(siteDir, concept.audio);
  if (fs.existsSync(output) && fs.statSync(output).size > 0) {
    skipped += 1;
    continue;
  }

  const temp = path.join(tempDir, `${concept.id}.aiff`);
  execFileSync("say", ["-o", temp, concept.english], { stdio: "ignore" });
  execFileSync("afconvert", ["-f", "m4af", "-d", "aac", temp, output], { stdio: "ignore" });
  fs.rmSync(temp, { force: true });
  created += 1;
}

fs.rmSync(tempDir, { recursive: true, force: true });

console.log(`Audio ready: ${created} created, ${skipped} skipped`);
