import chalk from 'chalk';

export const logger = {
  info(message: string) {
    console.log(chalk.cyan(message));
  },

  success(message: string) {
    console.log(chalk.green(message));
  },

  warn(message: string) {
    console.log(chalk.yellow(message));
  },

  error(message: string) {
    console.log(chalk.red(message));
  },

  break() {
    console.log('');
  },

  title(message: string) {
    console.log(chalk.bold.cyan(message));
  },

  dim(message: string) {
    console.log(chalk.dim(message));
  },

  log(message: string) {
    console.log(message);
  },
};
