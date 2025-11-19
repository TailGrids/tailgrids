#!/usr/bin/env node

import { Command } from 'commander';
import { initCommand } from './commands/init.ts';
import { addCommand } from './commands/add.ts';

process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));

async function main() {
  const program = new Command()
    .name('tailgrids')
    .description('A CLI tool for managing TailGrids components')
    .version('1.0.0');

  program.addCommand(initCommand).addCommand(addCommand);

  program.parse();
}

main();
