import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Every morning the kettle is already warm when I come downstairs, and the mug I left in the sink is clean and dry on the counter. I have lived alone since March, and I don't drink tea.\n";

const body = ENTRY.trim();
if (body.length < 1 || body.length > 400) {
  throw new Error("entry must be 1-400 characters");
}
if (body.split(/[.!?]+/).filter((s) => s.trim().length > 0).length !== 2) {
  throw new Error("entry must be exactly two sentences");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
