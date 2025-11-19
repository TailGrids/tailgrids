import fs from 'node:fs/promises';
import path from 'node:path';
import { existsSync } from 'node:fs';

type GetDefaultTargetPathParams = {
  type: string;
  sourcePath: string;
  srcExists?: boolean;
};

export function getDefaultTargetPath({
  type,
  sourcePath,
  srcExists,
}: GetDefaultTargetPathParams) {
  const cwd = process.cwd();
  const filename = path.basename(sourcePath);

  const baseDir = srcExists ? 'src' : '';

  return path.join(cwd, baseDir, 'components', 'tailgrids', type, filename);
}

export type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

export async function detectPackageManager(): Promise<PackageManager> {
  if (existsSync('pnpm-lock.yaml')) return 'pnpm';
  if (existsSync('yarn.lock')) return 'yarn';
  if (existsSync('bun.lockb')) return 'bun';
  return 'npm';
}

export async function directoryExists(dirPath: string) {
  try {
    const stat = await fs.stat(dirPath);
    return stat.isDirectory();
  } catch {
    return false;
  }
}

export async function getTargetDirectory() {
  const cwd = process.cwd();
  const srcExists = await directoryExists(path.join(cwd, 'src'));

  const targetDir = srcExists
    ? path.join(cwd, 'src', 'component', 'tailgrids')
    : path.join(cwd, 'component', 'tailgrids');

  return targetDir;
}
