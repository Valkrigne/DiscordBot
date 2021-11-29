import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { exit } from 'process';

export default function loadDescription(
  key: string,
  forceQuitOnFail: boolean = false,
): string {
  const filepath = resolve(`src/assets/embed_descriptions/${key}.txt`);
  if (existsSync(filepath)) {
    return readFileSync(filepath, 'utf8');
  }

  console.log(`Could not find Description file at ${filepath}`);
  if (forceQuitOnFail) {
    exit(3);
  } else {
    return '';
  }
}
