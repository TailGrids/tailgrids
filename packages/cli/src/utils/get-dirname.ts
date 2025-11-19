import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function getDirname() {
  const __filename = fileURLToPath(import.meta.url);
  return path.dirname(__filename);
}
