import ora from 'ora';
import fs from 'node:fs/promises';
import path from 'node:path';
import { COMPONENT_RAW_BASE_URL } from '../constants/urls.ts';
import { logger } from './logger.ts';
import chalk from 'chalk';
import { directoryExists, getDefaultTargetPath } from './index.ts';

interface FileConfig {
  type: 'block' | 'ui' | 'charts';
  path: string;
  targetPath?: string;
}

type InstallFilesParams = {
  files: FileConfig[];
};

export default async function installFiles({ files }: InstallFilesParams) {
  const spinner = ora();

  spinner.start(`📦 Installing ${files.length} file(s)...`);

  for (const file of files) {
    try {
      await installFile(file);
    } catch (error) {
      spinner.fail(`Failed to add ${file.path}`);
      throw error;
    }
  }

  spinner.succeed('All files installed successfully!');
}

async function installFile(file: FileConfig) {
  const { type, path: sourcePath, targetPath } = file;
  const cwd = process.cwd();

  const srcExists = await directoryExists(path.join(cwd, 'src'));

  const finalTargetPath = targetPath
    ? path.join(cwd, srcExists ? 'src' : '', targetPath)
    : getDefaultTargetPath({
        type,
        sourcePath,
        srcExists,
      });

  const downloadUrl = `${COMPONENT_RAW_BASE_URL}${sourcePath}`;

  logger.log(
    `  ${chalk.blue('-')} ${path.basename(sourcePath)} → ${path.relative(
      cwd,
      finalTargetPath
    )}`
  );

  const content = await fetchFileContent(downloadUrl);

  await fs.mkdir(path.dirname(finalTargetPath), { recursive: true });

  await fs.writeFile(finalTargetPath, content, 'utf-8');
}

async function fetchFileContent(url: string) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Tailgrids CLI',
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${url}: ${response.status} ${response.statusText}`
    );
  }

  return response.text();
}
