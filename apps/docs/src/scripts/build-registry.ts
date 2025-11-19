import { REGISTRIES } from '@/registry/registries';
import chalk from 'chalk';
import { writeFile } from 'node:fs';
import ora from 'ora';

async function main() {
  const spinner = ora().start('Building registry...');

  try {
    const registry = [...REGISTRIES];

    writeFile(
      'public/registries.json',
      JSON.stringify(registry),
      'utf-8',
      (err) => {
        if (err) {
          console.error(chalk.red('Error writing registry file:'), '\n', err);
          process.exit(1);
        }

        spinner.succeed('Registry built successfully.');
      }
    );
  } catch (error) {
    console.error(chalk.red('Error building registry:'), '\n', error);
    process.exit(1);
  }
}

main();
