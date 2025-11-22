import ora from 'ora';
import fs from 'node:fs/promises';
import path from 'node:path';
import chalk from 'chalk';
import { directoryExists, getDefaultTargetPath } from '../../utils/index.ts';
import { COMPONENT_REGISTRY_RAW_BASE_URL } from '../../constants/urls.ts';
import { logger } from '../../utils/logger.ts';

interface FileConfig {
  type: 'core';
  path: string;
  targetPath?: string;
}

type InstallFilesParams = {
  files: FileConfig[];
};

export async function addFiles({ files }: InstallFilesParams) {
  const spinner = ora();

  spinner.start(`📦 Installing ${files.length} file(s)...`);

  for (const file of files) {
    try {
      await addFile(file);
    } catch (error) {
      spinner.fail(`Failed to add ${file.path}`);
      throw error;
    }
  }

  spinner.succeed('All files installed successfully!');
}

async function addFile(file: FileConfig) {
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

  const downloadUrl = `${COMPONENT_REGISTRY_RAW_BASE_URL}${sourcePath}`;

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
