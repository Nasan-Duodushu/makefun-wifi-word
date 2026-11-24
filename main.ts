// One Word for Your Wi-Fi — a single word describing home Wi-Fi, at most
// 20 characters, funny and true. Writes it to /output/entry.txt.
import { mkdir, writeFile } from "node:fs/promises";

const WORD = "Ghosting";
const MAX = 20;

const singleWord = /^\S+$/;

async function main(): Promise<void> {
  const chars = [...WORD];
  if (chars.length < 1 || chars.length > MAX) {
    throw new Error(`word is ${chars.length} chars, must be 1-${MAX}`);
  }
  if (!singleWord.test(WORD)) {
    throw new Error("entry must be exactly one word");
  }
  await mkdir("/output", { recursive: true });
  await writeFile("/output/entry.txt", WORD, "utf8");
  console.log(`wrote "${WORD}" (${chars.length} chars) to /output/entry.txt`);
}

await main();
