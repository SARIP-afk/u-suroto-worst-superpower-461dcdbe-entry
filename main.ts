// Worst Superpower — u-suroto-worst-superpower-461dcdbe
// Writes exactly one superpower line to /output/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 140 characters; this line is 61.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I can catch bullets with my bare hands — but only Nerf darts.";

// Fail loudly instead of writing an entry the gate would refuse.
// The gate also refuses a line that is only whitespace, so check that too.
const lineLength = [...LINE].length;
if (lineLength < 1 || lineLength > 140) {
  throw new Error(`superpower line must be 1-140 characters, got ${lineLength}`);
}
if (!LINE.trim()) {
  throw new Error("superpower line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
