import { Command } from "commander";
import { handleAddCommand } from "../actions/add/index.ts";

export const addCommand = new Command("add")
  .description("Add Tailgrids components to your project")
  .argument("[components...]", "Component IDs to add (e.g., button dialog)", [])
  .action(async (components: string[]) => {
    await handleAddCommand({ components });
  });
