import * as fs from "node:fs";
import * as path from "node:path";

const slogan =
  "Your Solana wallet, with a co-pilot: it watches the chain, moves your SOL, and never sleeps.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Runtime validation guard: entry must be a single line, <= 20 words, <= 140 chars.
const words = slogan.trim().split(/\s+/).filter(Boolean);
if (slogan.includes("\n") || slogan.includes("\r")) {
  console.error("error: slogan must be a single line");
  process.exit(1);
}
if (words.length > 20) {
  console.error(`error: slogan has ${words.length} words, max is 20`);
  process.exit(1);
}
if (slogan.length > 140) {
  console.error(`error: slogan is ${slogan.length} characters, max is 140`);
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), slogan + "\n", "utf8");
