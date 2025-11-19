import { Command } from 'commander';
import { handleInitCommand } from '../actions/init/index.ts';

export const initCommand = new Command()
  .name('init')
  .description('Initialize TailGrids in your project')
  .action(handleInitCommand);
