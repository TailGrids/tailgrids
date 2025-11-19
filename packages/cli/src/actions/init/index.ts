import { input, select } from '@inquirer/prompts';
import { logger } from '../../utils/logger.ts';
import ora from 'ora';
import { installDependencies } from '../../utils/installing-dependencies.ts';
import chalk from 'chalk';
import {
  createCNUtility,
  createConfigFile,
  createCSSFile,
  getAvailableThemesChoices,
} from './helpers.ts';

export type Config = {
  theme: string;
  alias: string;
};

export async function handleInitCommand() {
  logger.break();
  logger.title('Welcome to TailGrids CLI!');
  logger.break();

  const themes = await getAvailableThemesChoices();

  try {
    const theme = await select({
      message: 'Which theme would you like to use?',
      choices: themes,
    });

    const alias = await input({
      message: 'Configure import alias:',
      default: '@',
      validate: (value) => {
        if (!value.trim()) return 'Alias cannot be empty';
        if (!/^[@~]/.test(value)) return 'Alias should start with @ or ~';
        return true;
      },
    });

    logger.break();
    logger.dim('Setting up your project...');
    logger.break();

    const config: Config = {
      theme,
      alias: alias.trim(),
    };

    const spinner = ora();

    await createConfigFile(config, spinner);

    await createCSSFile(theme, spinner);

    await createCNUtility(alias.trim(), spinner);

    await installDependencies({
      dependencies: ['clsx', 'tailwind-merge'],
    });

    logger.break();
    logger.success('✓ Setup complete!');

    logger.break();

    logger.dim('Next steps:');

    logger.break();

    logger.dim(
      `  1. Copy the contents of ${chalk.cyan(
        'tailgrids.css'
      )} and paste it in your`
    );
    logger.dim(
      `     main CSS file (e.g., ${chalk.cyan('globals.css')} or ${chalk.cyan(
        'app.css'
      )})`
    );
    logger.break();
    logger.dim(
      `  2. Start adding components with ${chalk.cyan(
        'tailgrids add <component>'
      )}`
    );
    logger.break();
  } catch (error) {
    logger.break();
    if (error instanceof Error) {
      if (error.message.includes('User force closed')) {
        logger.warn('Setup cancelled');
        process.exit(0);
      }
      logger.error(`Error: ${error.message}`);
    } else {
      logger.error('An unexpected error occurred during setup');
    }
    process.exit(1);
  }
}
