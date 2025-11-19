import { REGISTRY_RAW_URL } from '../constants/urls.ts';
import type { Registry } from '../types/registry.ts';
import { logger } from './logger.ts';

export async function getRegistry() {
  try {
    const response = await fetch(REGISTRY_RAW_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch registry: ${response.statusText}`);
    }

    return response.json() as Promise<Registry>;
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    } else {
      logger.error('An unknown error occurred while fetching the registry.');
    }

    process.exit(1);
  }
}
