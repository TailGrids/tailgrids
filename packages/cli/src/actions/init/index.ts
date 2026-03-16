import { confirm, input, select } from "@inquirer/prompts";
import chalk from "chalk";
import ora from "ora";
import { installDependencies } from "../../utils/installing-dependencies.ts";
import { logger } from "../../utils/logger.ts";
import {
  createCNUtility,
  createConfigFile,
  createCSSFile,
  getAvailableThemesChoices,
  getProjectInfo,
  replaceMainCSSFile
} from "./helpers.ts";

export type Config = {
  theme: string;
  alias: string;
  framework: "Next.js" | "Vite" | "Unknown";
  mainCssFile: string | null;
};

export async function handleInitCommand() {
  logger.break();
  logger.title("Welcome to Tailgrids CLI!");
  logger.break();

  const themes = await getAvailableThemesChoices();

  try {
    const theme = await select({
      message: "Which theme would you like to use?",
      choices: themes
    });

    const alias = await input({
      message: "Configure import alias:",
      default: "@",
      validate: value => {
        if (!value.trim()) return "Alias cannot be empty";
        if (!/^[@~]/.test(value)) return "Alias should start with @ or ~";
        return true;
      }
    });

    logger.break();
    logger.dim("Setting up your project...");
    logger.break();

    const spinner = ora();

    spinner.start("Detecting project type...");

    let { framework, cssPath } = await getProjectInfo();

    if (framework !== "Unknown") {
      spinner.succeed(`Detected ${chalk.cyan(framework)} project`);
    } else {
      spinner.info("Could not determine project framework");
      
      cssPath = await input({
        message: "Where is your main CSS file? (e.g., src/index.css, app/globals.css):",
        default: "src/index.css",
        validate: value => {
          if (!value.trim()) return "CSS path cannot be empty";
          return true;
        }
      });
    }

    const config: Config = {
      theme,
      alias: alias.trim(),
      framework,
      mainCssFile: cssPath
    };

    await createConfigFile(config, spinner);

    const shouldReplaceCss = await confirm({
      message: `Would you like to replace ${
        config.mainCssFile ? chalk.cyan(config.mainCssFile) : "your main CSS file"
      } with the ${theme} theme variables?`,
      default: true
    });

    if (shouldReplaceCss) {
      await replaceMainCSSFile(theme, config.mainCssFile, spinner);
    } else {
      await createCSSFile(theme, spinner);
    }

    await createCNUtility(alias.trim(), spinner);

    await installDependencies({
      dependencies: ["clsx", "tailwind-merge"],
      devDependencies: ["@tailwindcss/forms"]
    });

    logger.break();
    logger.success("✓ Setup complete!");

    logger.break();

    logger.dim("Next steps:");

    logger.break();

    const cssDisplay = config.mainCssFile
      ? chalk.cyan(config.mainCssFile)
      : `e.g., ${chalk.cyan("globals.css")} or ${chalk.cyan("app.css")}`;

    if (!shouldReplaceCss) {
      logger.dim(
        `  1. Copy the contents of ${chalk.cyan(
          "tailgrids.css"
        )} and paste it in your`
      );
      logger.dim(`     main CSS file (${cssDisplay})`);
      logger.break();
      logger.dim(
        `  2. Start adding components with ${chalk.cyan(
          "tailgrids add <component>"
        )}`
      );
    } else {
      logger.dim(
        `  1. Start adding components with ${chalk.cyan(
          "tailgrids add <component>"
        )}`
      );
    }
    logger.break();
  } catch (error) {
    logger.break();
    if (error instanceof Error) {
      if (error.message.includes("User force closed")) {
        logger.warn("Setup cancelled");
        process.exit(0);
      }
      logger.error(`Error: ${error.message}`);
    } else {
      logger.error("An unexpected error occurred during setup");
    }
    process.exit(1);
  }
}
