import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getComponentOrSubComponentByName } from '../registry/queries.js';
import type { ComponentProp } from '../registry/types.js';

/**
 * Extracts the allowed literal values from a union-of-strings type annotation.
 *
 * Examples:
 *   `"primary" | "danger" | "success"` → ["primary", "danger", "success"]
 *   `string`                           → null (not a union of literals)
 */
function extractEnumValues(type: string): string[] | null {
    const literals = type.match(/"([^"]+)"/g);
    if (!literals || literals.length === 0) return null;

    // Only treat as enum if the type is purely string literals joined by |
    const cleaned = type.replace(/\s/g, '');
    const expected = literals.join('|');
    if (cleaned !== expected) return null;

    return literals.map((l) => l.replace(/"/g, ''));
}

export function registerPropsTools(server: McpServer): void {
    // ── get_props_schema ───────────────────────────────────────────────
    server.tool(
        'get_props_schema',
        'Get the TypeScript prop types for a Tailgrids component, including props inherited from React Aria, Base UI, or Floating UI primitives.',
        {
            name: z.string().describe("Component name, e.g. 'button', 'select'"),
            include_primitive_props: z
                .boolean()
                .optional()
                .default(true)
                .describe(
                    'Include props from React Aria / Base UI / Floating UI. Default: true.',
                ),
        },
        async ({ name, include_primitive_props }) => {
            const resolved = getComponentOrSubComponentByName(name);
            if (!resolved) {
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: `Error: Component "${name}" not found. Use list_components to see available components.`,
                        },
                    ],
                };
            }

            const { component, props: resolvedProps } = resolved;
            let props: ComponentProp[] = resolvedProps;
            if (!include_primitive_props) {
                props = props.filter((p) => !p.fromPrimitive);
            }

            if (props.length === 0) {
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: `${name} has no props${include_primitive_props ? '' : ' (excluding primitive props)'}.`,
                        },
                    ],
                };
            }

            const header = `## ${name} — Props\n`;
            const tableHeader =
                '| Prop | Type | Required | Default | Description | Source |';
            const separator =
                '|------|------|----------|---------|-------------|--------|';

            const rows = props.map((p) => {
                const source = p.fromPrimitive ?? 'Tailgrids';
                const defaultVal = p.defaultValue ?? '—';
                const required = p.required ? '✅' : '—';
                // Escape pipe characters in type strings for markdown table
                const type = p.type.replace(/\|/g, '\\|');
                return `| \`${p.name}\` | \`${type}\` | ${required} | \`${defaultVal}\` | ${p.description} | ${source} |`;
            });

            const table = [header, tableHeader, separator, ...rows].join('\n');

            return {
                content: [{ type: 'text' as const, text: table }],
            };
        },
    );

    // ── validate_props ─────────────────────────────────────────────────
    server.tool(
        'validate_props',
        "Validate a props object against a Tailgrids component's schema. Catches unknown props, missing required props, invalid variant values, and React Aria anti-patterns.",
        {
            name: z.string().describe("Component name, e.g. 'button', 'dialog'"),
            props: z
                .record(z.string(), z.unknown())
                .describe(
                    "The props object to validate, e.g. { variant: 'primary', size: 'xl' }",
                ),
        },
        async ({ name, props }) => {
            const resolved = getComponentOrSubComponentByName(name);
            if (!resolved) {
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: `Error: Component "${name}" not found. Use list_components to see available components.`,
                        },
                    ],
                };
            }

            const { component, props: resolvedProps } = resolved;
            const errors: string[] = [];
            const warnings: string[] = [];
            const propMap = new Map<string, ComponentProp>(
                resolvedProps.map((p) => [p.name, p]),
            );

            // 1. Check for unknown props
            for (const key of Object.keys(props)) {
                if (!propMap.has(key)) {
                    // Special handling for common HTML/React props that aren't in our schema
                    if (key === 'children' || key === 'key' || key === 'ref') {
                        continue;
                    }
                    errors.push(
                        `Unknown prop "${key}". ${name} does not accept this prop.`,
                    );
                }
            }

            // 2. Check for missing required props
            for (const prop of resolvedProps) {
                if (prop.required && !(prop.name in props)) {
                    errors.push(
                        `Missing required prop "${prop.name}" (${prop.type}).`,
                    );
                }
            }

            // 3. Check for invalid enum values
            for (const [key, value] of Object.entries(props)) {
                const propDef = propMap.get(key);
                if (!propDef || typeof value !== 'string') continue;

                const allowed = extractEnumValues(propDef.type);
                if (allowed && !allowed.includes(value)) {
                    errors.push(
                        `Invalid value "${value}" for prop "${key}". Allowed values: ${allowed.join(', ')}.`,
                    );
                }
            }

            // 4. React Aria anti-patterns
            if ('disabled' in props) {
                const usesReactAria = component.primitives.includes('react-aria');
                if (usesReactAria) {
                    warnings.push(
                        'Anti-pattern: Use "isDisabled" instead of "disabled" for React Aria components.',
                    );
                }
            }
            if ('onClick' in props) {
                const usesReactAria = component.primitives.includes('react-aria');
                if (usesReactAria) {
                    warnings.push(
                        'Anti-pattern: Use "onPress" instead of "onClick" for React Aria components.',
                    );
                }
            }

            // Build report
            const lines: string[] = [
                `## Validation Report — ${name}`,
                '',
            ];

            if (errors.length > 0) {
                lines.push('### ❌ Errors', '');
                for (const e of errors) {
                    lines.push(`- ${e}`);
                }
                lines.push('');
            }

            if (warnings.length > 0) {
                lines.push('### ⚠️ Warnings', '');
                for (const w of warnings) {
                    lines.push(`- ${w}`);
                }
                lines.push('');
            }

            if (errors.length === 0 && warnings.length === 0) {
                lines.push('All props are valid. ✅', '');
            }

            const status = errors.length > 0 ? '❌ FAIL' : '✅ PASS';
            lines.push(
                `**Result:** ${status} (${errors.length} error${errors.length !== 1 ? 's' : ''}, ${warnings.length} warning${warnings.length !== 1 ? 's' : ''})`,
            );

            return {
                content: [{ type: 'text' as const, text: lines.join('\n') }],
            };
        },
    );
}
