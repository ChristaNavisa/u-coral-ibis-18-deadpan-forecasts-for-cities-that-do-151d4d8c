import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Tonight in Greeble: 34°, light winds, and one cloud, which police describe as armed and stationary.";

if (ENTRY.length < 1 || ENTRY.length > 160 || !ENTRY.trim()) {
  throw new Error(`entry must be 1-160 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
