import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { allComponents } from './components.js';
import type { ComponentMeta, ComponentCategory } from './types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Resolves to the project root directory.
// The TAILGRIDS_SOURCE_PATH env var can override this for custom setups.
const TAILGRIDS_SOURCE =
    process.env['TAILGRIDS_SOURCE_PATH'] ??
    join(__dirname, '../../../..');

export function getComponentByName(name: string): ComponentMeta | undefined {
    return allComponents.find(
        (c) => c.name.toLowerCase() === name.toLowerCase() || c.displayName.toLowerCase() === name.toLowerCase(),
    );
}

export function getComponentOrSubComponentByName(name: string): { component: ComponentMeta, props: import('./types.js').ComponentProp[] } | undefined {
    // Check if it's a primary component first
    const primary = getComponentByName(name);
    if (primary) {
        return { component: primary, props: primary.props };
    }

    // Check if it's a subcomponent
    for (const component of allComponents) {
        if (component.subComponents) {
            const sub = component.subComponents.find(
                (s) => s.name.toLowerCase() === name.toLowerCase()
            );
            if (sub) {
                return { component, props: sub.props }; // return parent component context + sub props
            }
        }
    }

    return undefined;
}

export function listComponents(filters?: {
    category?: ComponentCategory;
    tier?: 'free' | 'pro';
    tag?: string;
}): ComponentMeta[] {
    return allComponents.filter((c) => {
        if (filters?.category && c.category !== filters.category) return false;
        if (filters?.tier && c.tier !== filters.tier) return false;
        if (filters?.tag && !c.tags.includes(filters.tag)) return false;
        return true;
    });
}

export function searchComponents(query: string): ComponentMeta[] {
    const q = query.toLowerCase();
    return allComponents
        .filter(
            (c) =>
                c.name.includes(q) ||
                c.displayName.toLowerCase().includes(q) ||
                c.description.toLowerCase().includes(q) ||
                c.tags.some((t) => t.includes(q)) ||
                c.category.includes(q),
        )
        .slice(0, 5);
}

export function getComponentSource(component: ComponentMeta): string {
    const fullPath = join(TAILGRIDS_SOURCE, component.sourceFile);
    try {
        return readFileSync(fullPath, 'utf-8');
    } catch {
        throw new Error(
            `Could not read source for "${component.name}" at ${fullPath}. ` +
                `Make sure you are running the MCP server inside the Tailgrids monorepo.`,
        );
    }
}
