import chalk from "chalk";
import fs, { writeFile } from "node:fs/promises";
import ora from "ora";
import path from "node:path";
import { REGISTRIES } from "../src/registries.ts";
import { COMPONENT_REGISTRY_RAW_BASE_URL } from "../src/constants/urls.ts";

async function main() {
  const spinner = ora().start("Building registry...");

  try {
    const registry = [...REGISTRIES];

    // Build the TailGrids registry
    await writeFile(
      "registries.json",
      JSON.stringify(registry, null, 2),
      "utf-8"
    );

    // Build the Shadcn registry
    const shadcnRegistry = {
      $schema: "https://ui.shadcn.com/schema/registry.json",
      name: "tailgrids",
      homepage: "https://tailgrids.com",
      items: registry.map(item => ({
        name: item.id,
        type: "registry:ui",
        description: item.description,
        registryDependencies: item.requires || [],
        dependencies: item.dependencies || [],
        files: item.files.map(f => ({
          path: `${COMPONENT_REGISTRY_RAW_BASE_URL}${f.path}`,
          type: "registry:ui"
        }))
      }))
    };

    const docsPublicRegistryDir = path.resolve(process.cwd(), "../../apps/docs/public/r");
    await fs.mkdir(docsPublicRegistryDir, { recursive: true });

    await writeFile(
      path.join(docsPublicRegistryDir, "registry.json"),
      JSON.stringify(shadcnRegistry, null, 2),
      "utf-8"
    );

    spinner.succeed("Registries built successfully.");
  } catch (error) {
    console.error(chalk.red("Error building registry:"), "\n", error);
    process.exit(1);
  }
}

main();
