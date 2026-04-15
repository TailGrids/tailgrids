import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import {
    getComponentByName,
    searchComponents,
} from '../registry/queries.js';
import type { ComponentMeta } from '../registry/types.js';

// ---------------------------------------------------------------------------
// Primitive library documentation URLs
// ---------------------------------------------------------------------------
const primitiveDocs: Record<string, string> = {
    'react-aria': 'https://react-spectrum.adobe.com/react-aria/',
    'base-ui': 'https://base-ui.com/react/',
    'floating-ui': 'https://floating-ui.com/docs/react',
};

// ---------------------------------------------------------------------------
// Primitive library descriptions per component role
// ---------------------------------------------------------------------------
const primitiveDescriptions: Record<string, Record<string, string>> = {
    'react-aria': {
        default:
            'React Aria provides accessible interaction primitives including keyboard handling, focus management, ARIA attribute injection, and pointer/touch normalization.',
        button: 'Provides `onPress` event handling (unified pointer, touch, keyboard), `isDisabled` state, and proper ARIA button role.',
        dialog:
            'Provides focus trapping, `Escape` key dismissal, overlay click-outside handling, proper `role="dialog"` / `role="alertdialog"`, and return-focus on close.',
        select: 'Provides ARIA combobox/listbox roles, keyboard navigation (arrow keys, type-ahead), focus management, and controlled/uncontrolled selection state.',
        menu: 'Provides ARIA menu roles, keyboard navigation (arrow keys, Enter/Space activation, type-ahead), and focus management for menu items.',
        dropdown:
            'Provides ARIA menu trigger pattern, keyboard navigation (arrow keys, Enter/Space activation), type-ahead search, and automatic focus management.',
        tabs: 'Provides ARIA tablist/tab/tabpanel roles and keyboard navigation (arrow keys, Home/End).',
        combobox:
            'Provides ARIA combobox pattern with listbox popup, keyboard filtering, focus management, and selection handling.',
    },
    'base-ui': {
        default:
            'Base UI provides unstyled, accessible primitive components with proper ARIA roles, keyboard navigation, and focus management.',
        tooltip:
            'Provides accessible tooltip pattern with proper ARIA tooltip role, show/hide on hover/focus, and dismissal.',
        popover:
            'Provides accessible popover pattern with proper ARIA roles and focus management.',
        progress:
            'Provides accessible progress indicator with proper ARIA progressbar role and value attributes.',
    },
    'floating-ui': {
        default:
            'Floating UI provides a positioning engine for floating elements (dropdowns, tooltips, popovers). It handles placement, flipping, shifting, and arrow positioning but does NOT provide accessibility — that comes from React Aria or Base UI.',
        tooltip:
            'Provides dynamic positioning, flip/shift behavior, and floating arrow for tooltip placement. Accessibility (ARIA roles, keyboard handling) must come from a separate library.',
        dropdown:
            'Provides dynamic positioning for the dropdown popover, including auto-placement, boundary detection, and offset handling.',
        popover:
            'Provides floating element positioning with flip, shift, and offset middleware for optimal viewport placement.',
    },
};

// ---------------------------------------------------------------------------
// Keywords → component name mapping for compose_ui
// ---------------------------------------------------------------------------
const keywordMap: Record<string, string[]> = {
    button: ['button', 'btn', 'submit', 'action', 'click', 'save', 'cancel', 'delete', 'send', 'cta'],
    input: ['input', 'text', 'field', 'name', 'email', 'password', 'search', 'username', 'phone', 'url'],
    checkbox: ['checkbox', 'check', 'agree', 'terms', 'toggle', 'opt-in', 'remember'],
    dialog: ['dialog', 'modal', 'popup', 'confirm', 'confirmation', 'prompt'],
    dropdown: ['dropdown', 'menu', 'context-menu', 'actions', 'options'],
    tooltip: ['tooltip', 'hint', 'help', 'info', 'hover'],
    tabs: ['tabs', 'tab', 'tabbed', 'sections', 'views', 'panels'],
    badge: ['badge', 'tag', 'label', 'status', 'indicator', 'chip'],
    alert: ['alert', 'notification', 'message', 'banner', 'toast', 'warning', 'error', 'success'],
    select: ['select', 'picker', 'dropdown', 'choose', 'choice', 'option', 'country', 'category', 'role'],
};

/**
 * Map natural language description keywords to component names.
 */
function mapDescriptionToComponents(description: string): string[] {
    const words = description.toLowerCase().split(/[\s,.\-;:!?()]+/);
    const matched = new Set<string>();

    for (const [componentName, keywords] of Object.entries(keywordMap)) {
        for (const keyword of keywords) {
            if (words.includes(keyword) || description.toLowerCase().includes(keyword)) {
                matched.add(componentName);
            }
        }
    }

    // Also try searchComponents for broader matching
    const searchResults = searchComponents(description);
    for (const result of searchResults) {
        matched.add(result.name);
    }

    return [...matched];
}

export function registerCompositionTools(server: McpServer): void {
    // ── get_primitive_info ─────────────────────────────────────────────
    server.tool(
        'get_primitive_info',
        'Explain which underlying primitive library (React Aria, Base UI, Floating UI) a Tailgrids component is built on, and what behavioral and accessibility guarantees that provides.',
        {
            name: z
                .string()
                .describe("Component name, e.g. 'dialog', 'tooltip'"),
            primitive: z
                .enum(['react-aria', 'base-ui', 'floating-ui'])
                .optional()
                .describe(
                    'Scope to a specific primitive if the component uses multiple.',
                ),
        },
        async ({ name, primitive }) => {
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

            let primitivesToDescribe = component.primitives.filter(
                (p) => p !== 'none',
            );

            if (primitive) {
                if (!component.primitives.includes(primitive)) {
                    return {
                        content: [
                            {
                                type: 'text' as const,
                                text: `Error: ${component.displayName} does not use "${primitive}". It uses: ${component.primitives.join(', ')}.`,
                            },
                        ],
                    };
                }
                primitivesToDescribe = [primitive];
            }

            const lines: string[] = [];
            lines.push(`# Primitive Info — ${component.displayName}`);
            lines.push('');

            if (primitivesToDescribe.length === 0) {
                lines.push(
                    `**${component.displayName}** is not built on any primitive library. ` +
                        'It uses plain HTML elements with class-variance-authority for styling. ' +
                        'Accessibility patterns are implemented manually.',
                );
                return {
                    content: [
                        { type: 'text' as const, text: lines.join('\n') },
                    ],
                };
            }

            for (const prim of primitivesToDescribe) {
                const descriptions = primitiveDescriptions[prim] ?? {};
                const desc =
                    descriptions[component.name] ?? descriptions['default'] ?? 'No description available.';
                const docsUrl = primitiveDocs[prim] ?? '';

                lines.push(`## ${prim}`);
                lines.push('');
                lines.push(`**What it is:** ${getLibraryDescription(prim)}`);
                lines.push('');
                lines.push(
                    `**What it contributes to ${component.displayName}:** ${desc}`,
                );
                lines.push('');
                if (docsUrl) {
                    lines.push(`**Official docs:** ${docsUrl}`);
                    lines.push('');
                }
            }

            return {
                content: [{ type: 'text' as const, text: lines.join('\n') }],
            };
        },
    );

    // ── compose_ui ────────────────────────────────────────────────────
    server.tool(
        'compose_ui',
        'Given a natural language description of a UI section, return a Tailgrids component plan, install commands, and a starter TSX composition.',
        {
            description: z
                .string()
                .describe(
                    "What you want to build, e.g. 'settings page with avatar upload, name, email, password change, and save button'",
                ),
        },
        async ({ description }) => {
            // 1. Map keywords to component names
            const componentNames = mapDescriptionToComponents(description);

            if (componentNames.length === 0) {
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text:
                                `Could not identify any TailGrids components for: "${description}".\n\n` +
                                'Try using more specific keywords like "button", "input", "dialog", "tabs", etc. ' +
                                'Use `list_components` to see all available components.',
                        },
                    ],
                };
            }

            // 2. Resolve component metadata
            const components: ComponentMeta[] = [];
            for (const name of componentNames) {
                const meta = getComponentByName(name);
                if (meta) {
                    components.push(meta);
                }
            }

            if (components.length === 0) {
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: `Error: No matching components could be resolved. Use list_components to see available components.`,
                        },
                    ],
                };
            }

            const lines: string[] = [];

            // Section 1: Component Plan
            lines.push('## Component Plan');
            lines.push('');
            lines.push(`**Goal:** ${description}`);
            lines.push('');
            lines.push('| Component | Why |');
            lines.push('|-----------|-----|');
            for (const c of components) {
                lines.push(`| ${c.displayName} | ${c.description.split('.')[0]} |`);
            }
            lines.push('');

            // Section 2: Install Commands
            lines.push('## Install Commands');
            lines.push('');
            lines.push('```bash');
            lines.push('# Initialize Tailgrids (if not already set up)');
            lines.push('npx @tailgrids/cli@latest init');
            lines.push('');
            lines.push('# Add required components');
            for (const c of components) {
                lines.push(c.installCommand);
            }
            lines.push('```');
            lines.push('');

            // Section 3: Starter TSX
            lines.push('## Starter TSX');
            lines.push('');
            lines.push(
                '> ⚠️ **Starting point only** — this is a scaffold to get you started, not production-ready code. ' +
                    'Adjust props, layout, and content to match your actual requirements.',
            );
            lines.push('');
            lines.push('```tsx');

            // Generate imports
            for (const c of components) {
                const example = c.examples[0];
                if (example) {
                    // Extract import statement from example if available
                    const importMatch = example.code.match(
                        /import\s+\{[^}]+\}\s+from\s+['"@/][^'"]+['"]/,
                    );
                    if (importMatch) {
                        lines.push(importMatch[0] + ';');
                    } else {
                        lines.push(
                            `import { ${c.displayName} } from "@/components/${c.category}/${c.name}";`,
                        );
                    }
                } else {
                    lines.push(
                        `import { ${c.displayName} } from "@/components/${c.category}/${c.name}";`,
                    );
                }
            }

            lines.push('');
            lines.push('export default function MySection() {');
            lines.push('  return (');
            lines.push('    <div className="mx-auto max-w-2xl space-y-6 p-6">');
            lines.push(`      <h2 className="text-2xl font-semibold">${capitalizeFirst(description.split(' ').slice(0, 4).join(' '))}...</h2>`);
            lines.push('');

            // Generate component usage from examples
            for (const c of components) {
                const example = c.examples[0];
                if (example) {
                    // Extract just the JSX part (skip the import line)
                    const jsxLines = example.code
                        .split('\n')
                        .filter((l) => !l.startsWith('import '));
                    const jsx = jsxLines.join('\n').trim();
                    if (jsx) {
                        // Indent the JSX
                        const indented = jsx
                            .split('\n')
                            .map((l) => `      ${l}`)
                            .join('\n');
                        lines.push(indented);
                        lines.push('');
                    }
                } else {
                    lines.push(
                        `      <${c.displayName}>/* ${c.description.split('.')[0]} */</${c.displayName}>`,
                    );
                    lines.push('');
                }
            }

            lines.push('    </div>');
            lines.push('  );');
            lines.push('}');
            lines.push('```');

            return {
                content: [{ type: 'text' as const, text: lines.join('\n') }],
            };
        },
    );
}

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

function getLibraryDescription(lib: string): string {
    switch (lib) {
        case 'react-aria':
            return 'A library of React hooks and components from Adobe that provides accessible UI primitives. It handles keyboard interactions, focus management, ARIA attributes, and pointer/touch normalization.';
        case 'base-ui':
            return 'An unstyled component library (from the MUI team) that provides accessible, headless primitives. Components come with proper ARIA roles and keyboard support built in.';
        case 'floating-ui':
            return 'A low-level positioning engine for floating elements (tooltips, popovers, dropdowns). It calculates optimal placement, handles viewport boundaries, and positions arrows — but does NOT handle accessibility (ARIA/keyboard).';
        default:
            return 'Unknown primitive library.';
    }
}

function capitalizeFirst(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}
