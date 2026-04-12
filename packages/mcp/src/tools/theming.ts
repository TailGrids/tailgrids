import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import {
    getComponentByName,
    getComponentSource,
} from '../registry/queries.js';

export function registerThemingTools(server: McpServer): void {
    // ── get_tailwind_variants ──────────────────────────────────────────
    server.tool(
        'get_tailwind_variants',
        'List all visual variants for a TailGrids component and their Tailwind CSS classes.',
        {
            name: z.string().describe("Component name, e.g. 'button', 'alert'"),
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

            const lines: string[] = [];
            lines.push(`## ${component.displayName} — Tailwind Variants`);
            lines.push('');

            // Try to extract variant class strings from source code
            let sourceVariants: Record<string, string> = {};
            try {
                const source = getComponentSource(component);

                // Look for cva(...) calls and extract variant mappings
                const cvaMatch = source.match(/cva\s*\(([\s\S]*?)\)\s*[;,]/);
                if (cvaMatch) {
                    // Extract individual variant value → class mappings
                    const variantBlockRegex =
                        /(\w+)\s*:\s*\{([^}]+)\}/g;
                    let vMatch;
                    while (
                        (vMatch = variantBlockRegex.exec(cvaMatch[1] ?? '')) !==
                        null
                    ) {
                        const variantName = vMatch[1]!;
                        const variantBody = vMatch[2]!;
                        // Extract each value: "classes" pair
                        const valueRegex =
                            /(\w+)\s*:\s*["`']([^"`']+)["`']/g;
                        let valMatch;
                        while (
                            (valMatch = valueRegex.exec(variantBody)) !== null
                        ) {
                            const key = `${variantName}=${valMatch[1]}`;
                            sourceVariants[key] = valMatch[2]!;
                        }
                    }
                }

                // Also look for class maps like: const classMap = { primary: "...", danger: "..." }
                const classMapRegex =
                    /(?:classMap|classes|variantClasses|styles)\s*=\s*\{([^}]+)\}/g;
                let cmMatch;
                while ((cmMatch = classMapRegex.exec(source)) !== null) {
                    const mapBody = cmMatch[1]!;
                    const entryRegex =
                        /(\w+)\s*:\s*["`']([^"`']+)["`']/g;
                    let entryMatch;
                    while (
                        (entryMatch = entryRegex.exec(mapBody)) !== null
                    ) {
                        sourceVariants[entryMatch[1]!] = entryMatch[2]!;
                    }
                }
            } catch {
                // Source not available — fall back to registry data
            }

            if (
                component.variants.length === 0 &&
                Object.keys(sourceVariants).length === 0
            ) {
                lines.push(
                    `${component.displayName} does not define named visual variants. It relies on props like \`className\` for customization.`,
                );
            } else {
                lines.push('| Variant | Description | Key Tailwind Classes |');
                lines.push('|---------|-------------|---------------------|');

                for (const v of component.variants) {
                    // Try to find matching source classes
                    const sourceClasses =
                        sourceVariants[v.name] ??
                        sourceVariants[`variant=${v.name}`] ??
                        v.tailwindClasses ??
                        '—';
                    const displayClasses = Array.isArray(sourceClasses) ? sourceClasses.join(', ') : sourceClasses;
                    lines.push(
                        `| ${v.name} | ${v.description} | \`${displayClasses}\` |`,
                    );
                }

                // Add any source variants not in registry
                for (const [key, classes] of Object.entries(sourceVariants)) {
                    const variantName = key.includes('=')
                        ? key.split('=')[1]!
                        : key;
                    const alreadyListed = component.variants.some(
                        (v) => v.name === variantName,
                    );
                    if (!alreadyListed) {
                        lines.push(
                            `| ${variantName} | *(from source)* | \`${classes}\` |`,
                        );
                    }
                }
            }

            return {
                content: [{ type: 'text' as const, text: lines.join('\n') }],
            };
        },
    );

    // ── get_dark_mode_classes ──────────────────────────────────────────
    server.tool(
        'get_dark_mode_classes',
        'Show which dark mode Tailwind classes a component uses and how to override them.',
        {
            name: z
                .string()
                .describe("Component name, e.g. 'button', 'input'"),
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

            const lines: string[] = [];
            lines.push(`## ${component.displayName} — Dark Mode`);
            lines.push('');

            // Dark mode support status
            lines.push(
                `**Dark mode supported:** ${component.darkModeSupport ? '✅ Yes' : '❌ No'}`,
            );
            lines.push('');

            // Extract dark: classes from source
            let darkClasses: string[] = [];
            try {
                const source = getComponentSource(component);
                const matches = source.match(/dark:[^\s'"]+/g);
                if (matches) {
                    darkClasses = [...new Set(matches)].sort();
                }
            } catch {
                // Source not available
            }

            if (darkClasses.length > 0) {
                lines.push('### Dark Mode Classes Found');
                lines.push('');
                lines.push('```');
                for (const cls of darkClasses) {
                    lines.push(cls);
                }
                lines.push('```');
                lines.push('');
            } else if (component.darkModeSupport) {
                lines.push(
                    'Dark mode is supported via CSS custom properties / design tokens rather than explicit `dark:` utility classes.',
                );
                lines.push('');
            } else {
                lines.push(
                    'No `dark:` Tailwind classes found in the component source.',
                );
                lines.push('');
            }

            // How to override
            lines.push('### How to Override Dark Mode Styles');
            lines.push('');
            lines.push(
                'TailGrids components use `cn()` (powered by `tailwind-merge`) to merge class names. ' +
                    'You can pass dark mode overrides via the `className` prop:',
            );
            lines.push('');
            lines.push('```tsx');
            lines.push(
                `<${component.displayName} className="dark:bg-gray-900 dark:text-white dark:border-gray-700" />`,
            );
            lines.push('```');
            lines.push('');
            lines.push(
                '`tailwind-merge` intelligently resolves conflicting utilities, so your `dark:` overrides ' +
                    'will replace the component\'s defaults rather than competing with them.',
            );

            return {
                content: [{ type: 'text' as const, text: lines.join('\n') }],
            };
        },
    );

    // ── get_theming_guide ─────────────────────────────────────────────
    server.tool(
        'get_theming_guide',
        'Explain how to customize the visual appearance of a TailGrids component using Tailwind CSS classes.',
        {
            name: z
                .string()
                .describe("Component name, e.g. 'button', 'input'"),
            goal: z
                .string()
                .optional()
                .describe(
                    "What you want to change, e.g. 'make it pill-shaped', 'change hover color', 'increase padding'",
                ),
        },
        async ({ name, goal }) => {
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

            const lines: string[] = [];
            lines.push(`## Theming Guide — ${component.displayName}`);
            lines.push('');

            // Section 1: How styles are applied
            lines.push('### How TailGrids Applies Styles');
            lines.push('');

            const hasCva = component.tags.includes('cva');
            if (hasCva) {
                lines.push(
                    `**${component.displayName}** uses \`class-variance-authority\` (cva) to define variant-based styles. ` +
                        'Each variant (e.g., size, color, appearance) maps to a set of Tailwind classes that are merged at render time.',
                );
            } else {
                lines.push(
                    `**${component.displayName}** applies Tailwind classes directly or through internal utility functions. ` +
                        'Classes are composed using the `cn()` helper (which wraps `tailwind-merge` + `clsx`).',
                );
            }
            lines.push('');

            // Section 2: How to use className to override
            lines.push('### Using `className` to Override');
            lines.push('');
            lines.push(
                'All TailGrids components accept a `className` prop. Classes you pass are merged via `cn()`, ' +
                    'which uses `tailwind-merge` under the hood to resolve conflicting utilities intelligently.',
            );
            lines.push('');
            lines.push('```tsx');
            lines.push(`// Override background and padding`);
            lines.push(
                `<${component.displayName} className="bg-indigo-600 px-8 py-4" />`,
            );
            lines.push('```');
            lines.push('');

            // Section 3: Goal-specific example
            if (goal) {
                lines.push(`### Achieving: "${goal}"`);
                lines.push('');

                // Generate a plausible before/after based on common goals
                const goalLower = goal.toLowerCase();
                let beforeClass = '';
                let afterClass = '';

                if (
                    goalLower.includes('pill') ||
                    goalLower.includes('round')
                ) {
                    beforeClass = '(default border radius)';
                    afterClass = 'rounded-full';
                } else if (
                    goalLower.includes('hover') ||
                    goalLower.includes('color')
                ) {
                    beforeClass =
                        '(default hover color)';
                    afterClass =
                        'hover:bg-purple-600 hover:text-white';
                } else if (
                    goalLower.includes('padding') ||
                    goalLower.includes('spacing')
                ) {
                    beforeClass = '(default padding)';
                    afterClass = 'px-8 py-4';
                } else if (
                    goalLower.includes('border') ||
                    goalLower.includes('outline')
                ) {
                    beforeClass = '(default border)';
                    afterClass = 'border-2 border-indigo-500';
                } else if (
                    goalLower.includes('shadow') ||
                    goalLower.includes('elevation')
                ) {
                    beforeClass = '(no shadow)';
                    afterClass = 'shadow-lg shadow-indigo-500/30';
                } else if (
                    goalLower.includes('font') ||
                    goalLower.includes('text') ||
                    goalLower.includes('typography')
                ) {
                    beforeClass = '(default text)';
                    afterClass = 'text-lg font-bold tracking-wide';
                } else if (goalLower.includes('size') || goalLower.includes('width')) {
                    beforeClass = '(default size)';
                    afterClass = 'w-full max-w-md';
                } else {
                    beforeClass = '(default styles)';
                    afterClass = `/* Add Tailwind classes for: ${goal} */`;
                }

                lines.push('**Before:**');
                lines.push('```tsx');
                lines.push(
                    `<${component.displayName}>${component.displayName} content</${component.displayName}>`,
                );
                lines.push(`// ${beforeClass}`);
                lines.push('```');
                lines.push('');
                lines.push('**After:**');
                lines.push('```tsx');
                lines.push(
                    `<${component.displayName} className="${afterClass}">${component.displayName} content</${component.displayName}>`,
                );
                lines.push('```');
                lines.push('');
            }

            // Section 4: Tailwind specificity warning
            lines.push('### ⚠️ Tailwind Specificity');
            lines.push('');
            lines.push(
                'When two conflicting Tailwind utilities appear in the same `className` string, ' +
                    'the one defined **later in the CSS stylesheet** wins — NOT the one that appears later in the string. ' +
                    'For example, `"bg-red-500 bg-blue-500"` will always render the same color regardless of order.',
            );
            lines.push('');
            lines.push(
                'TailGrids uses `tailwind-merge` (via the `cn()` helper) to resolve this predictably. ' +
                    'When you pass classes through the `className` prop, `tailwind-merge` ensures your overrides ' +
                    'take precedence over the component\'s default classes. If you\'re composing classes outside of ' +
                    'TailGrids components, use `tailwind-merge` directly:',
            );
            lines.push('');
            lines.push('```ts');
            lines.push(
                'import { twMerge } from "tailwind-merge";',
            );
            lines.push(
                'const classes = twMerge("bg-red-500 px-4", "bg-blue-500 px-8");',
            );
            lines.push('// Result: "bg-blue-500 px-8"');
            lines.push('```');

            return {
                content: [{ type: 'text' as const, text: lines.join('\n') }],
            };
        },
    );
}
