import chalk from 'chalk';
import { execSync } from 'child_process';
import ora from 'ora';
import { detectPackageManager, type PackageManager } from './index.ts';
import { logger } from './logger.ts';

type InstallDependenciesParams =
  | { dependencies: string[]; devDependencies?: string[] }
  | { dependencies?: string[]; devDependencies: string[] };

export async function installDependencies(params: InstallDependenciesParams) {
  const { dependencies = [], devDependencies = [] } = params;

  const packageManager = await detectPackageManager();
  const spinner = ora();

  try {
    if (dependencies.length > 0) {
      logger.log('Dependencies to install:');
      dependencies.forEach((dep) => {
        console.log(`  - ${chalk.green(dep)}`);
      });

      logger.break();

      spinner.start('Installing dependencies');
      const addCommand = getAddCommand(packageManager, false);
      execSync(`${addCommand} ${dependencies.join(' ')}`, {
        stdio: 'pipe',
      });

      spinner.succeed('Dependencies installed');
    }

    if (devDependencies.length > 0) {
      logger.log('devDependencies to install');
      devDependencies.forEach((dep) => {
        console.log(`  - ${chalk.green(dep)}`);
      });

      spinner.start('Installing devDependencies');
      const addCommand = getAddCommand(packageManager, true);
      execSync(`${addCommand} ${devDependencies.join(' ')}`, {
        stdio: 'pipe',
      });

      spinner.succeed('Dev dependencies installed');
    }
  } catch (error) {
    spinner.fail('Failed to install dependencies');

    const allDeps = [...dependencies, ...devDependencies];
    throw new Error(
      `Could not install dependencies. Please install them manually: ${allDeps.join(
        ', '
      )}`
    );
  }
}

function getAddCommand(packageManager: PackageManager, isDev: boolean): string {
  const commands: Record<PackageManager, { regular: string; dev: string }> = {
    npm: {
      regular: 'npm install',
      dev: 'npm install --save-dev',
    },
    pnpm: {
      regular: 'pnpm add',
      dev: 'pnpm add -D',
    },
    yarn: {
      regular: 'yarn add',
      dev: 'yarn add -D',
    },
    bun: {
      regular: 'bun add',
      dev: 'bun add -D',
    },
  };

  return isDev
    ? commands[packageManager].dev
    : commands[packageManager].regular;
}
