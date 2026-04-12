import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import {
    getComponentByName,
    getComponentSource,
} from '../registry/queries.js';

export function registerCodeTools(server: McpServer): void {
    // ── get_component_code ─────────────────────────────────────────────
    server.tool(
        'get_component_code',
        'Get the actual TSX source code for a Tailgrids component as it exists in the repository.',
        {
            name: z.string().describe("Component name, e.g. 'button', 'dialog'"),
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

            try {
                const source = getComponentSource(component);
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: `## ${component.displayName} — Source Code\n\n\`\`\`tsx\n${source}\n\`\`\``,
                        },
                    ],
                };
            } catch (err) {
                const message =
                    err instanceof Error ? err.message : String(err);
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: `Error: ${message}`,
                        },
                    ],
                };
            }
        },
    );

    // ── get_usage_example ──────────────────────────────────────────────
    server.tool(
        'get_usage_example',
        'Get a usage example for a Tailgrids component. Optionally target a specific variant.',
        {
            name: z.string().describe("Component name, e.g. 'button', 'tabs'"),
            variant: z
                .string()
                .optional()
                .describe(
                    "Specific variant name, e.g. 'danger', 'outline'. Returns first example if omitted.",
                ),
        },
        async ({ name, variant }) => {
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

            if (component.examples.length === 0) {
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: `No usage examples are available for "${component.displayName}".`,
                        },
                    ],
                };
            }

            let example = component.examples[0]!;

            if (variant) {
                const variantLower = variant.toLowerCase();
                const match = component.examples.find(
                    (ex) =>
                        ex.title.toLowerCase().includes(variantLower) ||
                        ex.code.toLowerCase().includes(variantLower),
                );
                if (match) {
                    example = match;
                } else {
                    return {
                        content: [
                            {
                                type: 'text' as const,
                                text:
                                    `No example found for variant "${variant}" in ${component.displayName}. ` +
                                    `Available examples: ${component.examples.map((e) => e.title).join(', ')}`,
                            },
                        ],
                    };
                }
            }

            const lines = [
                `## ${component.displayName} — ${example.title}`,
                '',
            ];
            if (example.description) {
                lines.push(example.description, '');
            }
            lines.push('```tsx', example.code, '```', '');
            lines.push(`**Install:** \`${component.installCommand}\``);

            return {
                content: [{ type: 'text' as const, text: lines.join('\n') }],
            };
        },
    );

    // ── get_install_command ────────────────────────────────────────────
    server.tool(
        'get_install_command',
        'Get the CLI commands to install one or more Tailgrids components into a React project.',
        {
            components: z
                .array(z.string())
                .describe(
                    "Component names to install, e.g. ['button', 'input', 'modal']",
                ),
        },
        async ({ components }) => {
            const resolved: { name: string; displayName: string; installCommand: string; importPath: string }[] = [];
            const notFound: string[] = [];

            for (const name of components) {
                const component = getComponentByName(name);
                if (component) {
                    resolved.push({
                        name: component.name,
                        displayName: component.displayName,
                        installCommand: component.installCommand,
                        importPath: `import { ${component.displayName} } from "@/components/${component.category}/${component.name}"`,
                    });
                } else {
                    notFound.push(name);
                }
            }

            const lines: string[] = [];

            if (notFound.length > 0) {
                lines.push(
                    `> **Warning:** The following components were not found: ${notFound.join(', ')}. Use list_components to see available components.`,
                    '',
                );
            }

            if (resolved.length === 0) {
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text:
                                lines.join('\n') ||
                                'Error: No valid component names provided. Use list_components to see available components.',
                        },
                    ],
                };
            }

            // Section 1: Project init
            lines.push('### 1. Initialize Tailgrids (if not already set up)');
            lines.push('');
            lines.push('```bash');
            lines.push('npx @tailgrids/cli@latest init');
            lines.push('```');
            lines.push('');

            // Section 2: Add commands
            lines.push('### 2. Add Components');
            lines.push('');
            lines.push('```bash');
            for (const c of resolved) {
                lines.push(c.installCommand);
            }
            lines.push('```');
            lines.push('');

            // Section 3: Import paths
            lines.push('### 3. Import Components');
            lines.push('');
            lines.push('```tsx');
            for (const c of resolved) {
                lines.push(c.importPath);
            }
            lines.push('```');

            return {
                content: [{ type: 'text' as const, text: lines.join('\n') }],
            };
        },
    );
}
