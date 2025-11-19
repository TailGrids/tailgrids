import chalk from 'chalk';
import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import type { Ora } from 'ora';
import type { Config } from './index.ts';
import { getDirname } from '../../utils/get-dirname.ts';

export async function getAvailableThemesChoices() {
  const files = await fs.readdir(path.resolve(__dirname, './templates/themes'));

  const choices: { name: string; value: string }[] = [];

  for (const file of files) {
    const themeName = file.split('.')[0]!;

    const capitalizedThemeName = themeName
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    choices.push({
      name: capitalizedThemeName,
      value: themeName,
    });
  }

  return choices;
}

export async function createCSSFile(theme: string, spinner: Ora) {
  const __dirname = getDirname();
  const fileName = 'tailgrids.css';

  try {
    spinner.text = `Creating ${fileName}...`;

    const templatePath = path.resolve(
      __dirname,
      './templates/themes',
      `${theme}.css`
    );

    if (!existsSync(templatePath)) {
      throw new Error(`Theme template not found for: "${theme}"`);
    }

    await fs.copyFile(templatePath, fileName);

    spinner.succeed(
      `Created ${chalk.cyan(fileName)} with ${theme} theme variables`
    );
  } catch (error) {
    spinner.fail(`Failed to create ${fileName}`);
    if (error instanceof Error) {
      throw new Error(`Could not create CSS file: ${error.message}`);
    }
    throw new Error('Could not create CSS file. Check write permissions.');
  }
}

export async function createCNUtility(alias: string, spinner: Ora) {
  try {
    spinner.text = 'Creating cn utility...';

    const hasSrc = existsSync('src');
    const utilsDir = hasSrc ? 'src/utils' : 'utils';
    const utilPath = path.join(utilsDir, 'cn.ts');

    await fs.mkdir(utilsDir, { recursive: true });

    const templatePath = path.resolve(__dirname, './templates/utils', 'cn.ts');

    if (!existsSync(templatePath)) {
      throw new Error('CN utility template not found');
    }

    await fs.copyFile(templatePath, utilPath);

    const displayPath = alias
      ? utilPath.replace(/^src\//, `${alias}/`)
      : utilPath;

    spinner.succeed(`Created cn utility at ${chalk.cyan(displayPath)}`);
  } catch (error) {
    spinner.fail('Failed to create cn utility');
    if (error instanceof Error) {
      throw new Error(`Could not create utility file: ${error.message}`);
    }
    throw new Error('Could not create utility file. Check write permissions.');
  }
}

export async function createConfigFile(config: Config, spinner: Ora) {
  const configFileName = 'tailgrids.config.json';

  try {
    spinner.text = 'Creating configuration file...';
    await fs.writeFile(
      configFileName,
      JSON.stringify(config, null, 2),
      'utf-8'
    );
    spinner.succeed(`Created ${chalk.cyan(configFileName)}`);
  } catch (error) {
    spinner.fail('Failed to create config file');
    throw new Error('Could not create config file. Check write permissions.');
  }
}
