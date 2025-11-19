import { checkbox } from '@inquirer/prompts';
import { installDependencies } from '../../utils/installing-dependencies.ts';
import { logger } from '../../utils/logger.ts';
import { addFiles } from './helpers.ts';
import { getRegistry } from '../../utils/get-registry.ts';
import type { Registry } from '../../types/registry.ts';

type HandleAddCommandParams = {
  components: string[];
};

export async function handleAddCommand({ components }: HandleAddCommandParams) {
  try {
    const registry = await getRegistry();

    let selectedComponentsId = components;

    if (!selectedComponentsId.length) {
      selectedComponentsId = await checkbox({
        message: 'Select components to add',
        choices: registry.map((component) => ({
          name: component.name,
          description: component.description,
          value: component.id,
        })),
      });
    }

    if (!selectedComponentsId.length) {
      logger.warn('No Components Selected. Exiting.');
      return;
    }

    const allDependencies = new Set<string>();
    const allDevDependencies = new Set<string>();

    const processedComponentIds = new Set<string>();

    for (const componentId of selectedComponentsId) {
      await handleComponentRegistry({
        registry,
        componentId,
        processedComponentIds,
        allDependencies,
        allDevDependencies,
      });
    }

    await installDependencies({
      dependencies: Array.from(allDependencies),
      devDependencies: Array.from(allDevDependencies),
    });

    logger.success('Components added successfully!');
  } catch (error) {
    logger.error('Failed to add components:\n' + (error as Error).message);
    process.exit(1);
  }
}

type HandleComponentRegistryParams = {
  componentId: string;
  registry: Registry;
  processedComponentIds: Set<string>;
  allDependencies: Set<string>;
  allDevDependencies: Set<string>;
};

async function handleComponentRegistry({
  registry,
  componentId,
  processedComponentIds,
  allDependencies,
  allDevDependencies,
}: HandleComponentRegistryParams) {
  if (processedComponentIds.has(componentId)) return;

  const componentRegistry = registry.find(({ id }) => id === componentId);

  processedComponentIds.add(componentId);

  if (!componentRegistry) {
    logger.warn(
      `Component: "${componentId}" not found in registry, skipping...`
    );
    return;
  }

  await addFiles({ files: componentRegistry.files });

  // Store dependencies to install
  componentRegistry.dependencies?.forEach((dep) => allDependencies.add(dep));
  componentRegistry.devDependencies?.forEach((devDep) =>
    allDevDependencies.add(devDep)
  );

  if (componentRegistry.requires && componentRegistry.requires.length > 0) {
    for (const requiredId of componentRegistry.requires) {
      await handleComponentRegistry({
        registry,
        componentId: requiredId,
        processedComponentIds,
        allDependencies,
        allDevDependencies,
      });
    }
  }

  logger.info(`✓ ${componentRegistry.name}`);
}
