import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import {
    listComponents,
    searchComponents,
    getComponentByName,
} from '../registry/queries.js';
import type { ComponentMeta } from '../registry/types.js';

/**
 * Returns a concise summary of a component suitable for list / search results.
 */
function summarise(c: ComponentMeta) {
    return {
        name: c.name,
        displayName: c.displayName,
        category: c.category,
        tier: c.tier,
        description: c.description,
        installCommand: c.installCommand,
    };
}

export function registerDiscoveryTools(server: McpServer): void {
    // ── list_components ────────────────────────────────────────────────
    server.tool(
        'list_components',
        'List all available Tailgrids components. Optionally filter by category, tier (free/pro), or tag.',
        {
            category: z
                .enum([
                    'core',
                    'forms',
                    'navigation',
                    'overlay',
                    'data-display',
                    'feedback',
                    'layout',
                    'marketing',
                    'dashboard',
                    'ecommerce',
                    'ai',
                ])
                .optional(),
            tier: z.enum(['free', 'pro']).optional(),
            tag: z
                .string()
                .optional()
                .describe(
                    "Filter by tag, e.g. 'interactive', 'form', 'action'",
                ),
        },
        async ({ category, tier, tag }) => {
            const results = listComponents({ category, tier, tag });
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify(results.map(summarise), null, 2),
                    },
                ],
            };
        },
    );

    // ── search_components ──────────────────────────────────────────────
    server.tool(
        'search_components',
        'Search Tailgrids components by natural language intent or keyword. Returns top 5 matches.',
        {
            query: z
                .string()
                .describe(
                    "Natural language search, e.g. 'confirmation dialog', 'password input', 'pricing toggle'",
                ),
        },
        async ({ query }) => {
            const results = searchComponents(query);
            if (results.length === 0) {
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: `No components matched "${query}". Use list_components to browse all available components.`,
                        },
                    ],
                };
            }
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify(results.map(summarise), null, 2),
                    },
                ],
            };
        },
    );

    // ── get_component ──────────────────────────────────────────────────
    server.tool(
        'get_component',
        'Get the full specification for a Tailgrids component: props, variants, usage examples, accessibility notes, primitive dependencies, and install command.',
        {
            name: z
                .string()
                .describe("Component name, e.g. 'button', 'modal', 'tabs'"),
        },
        async ({ name }) => {
            const component = getComponentByName(name);
            if (!component) {
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: `Error: Component "${name}" not found. Use list_components to see available components.`,
                        },
                    ],
                };
            }
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify(component, null, 2),
                    },
                ],
            };
        },
    );
}
