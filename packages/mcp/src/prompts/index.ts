import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerPrompts(server: McpServer): void {
    // ── build_page_section ─────────────────────────────────────────────
    server.prompt(
        'build_page_section',
        'Build a UI section using TailGrids components from a natural language description.',
        {
            description: z
                .string()
                .describe(
                    "The UI section to build, e.g. 'hero with CTA and headline'",
                ),
            framework: z.enum(['nextjs', 'react', 'vite']).optional(),
        },
        ({ description, framework }) => ({
            messages: [
                {
                    role: 'user' as const,
                    content: {
                        type: 'text' as const,
                        text: [
                            `You are a Tailgrids expert. Build the following UI section.`,
                            `Framework: ${framework ?? 'nextjs'}`,
                            `Description: ${description}`,
                            ``,
                            `Steps:`,
                            `1. Call search_components to find the right components.`,
                            `2. Call get_component_code to retrieve their source.`,
                            `3. Call get_install_command to generate install commands.`,
                            `4. Return complete TSX with all imports included.`,
                        ].join('\n'),
                    },
                },
            ],
        }),
    );

    // ── scaffold_feature_ui ───────────────────────────────────────────
    server.prompt(
        'scaffold_feature_ui',
        'Break a feature into named sections, identify the right TailGrids components per section, and return a scaffold with imports and composition.',
        {
            feature_description: z
                .string()
                .describe(
                    "The feature to scaffold, e.g. 'user profile settings with avatar, name fields, and password change'",
                ),
            page_type: z
                .enum(['settings', 'dashboard', 'auth', 'marketing', 'ecommerce'])
                .describe('The type of page this feature belongs to.'),
        },
        ({ feature_description, page_type }) => ({
            messages: [
                {
                    role: 'user' as const,
                    content: {
                        type: 'text' as const,
                        text: [
                            `You are a Tailgrids expert building a ${page_type} page.`,
                            ``,
                            `Feature: ${feature_description}`,
                            ``,
                            `Steps:`,
                            `1. Break the feature into named UI sections (e.g. "Header", "Form Fields", "Actions").`,
                            `2. For each section, call search_components to find matching TailGrids components.`,
                            `3. Call get_component to retrieve full specs (props, variants, examples) for each match.`,
                            `4. Call get_install_command with all identified components.`,
                            `5. Return a component-by-component scaffold:`,
                            `   - Section name and purpose`,
                            `   - Which TailGrids component(s) to use and why`,
                            `   - Complete import statements`,
                            `   - Starter TSX composition with all relevant props filled in`,
                            `6. Include a final "Full Page Assembly" section that combines all sections into a single page component.`,
                            ``,
                            `Use real TailGrids component APIs — do not invent props or components that don't exist.`,
                        ].join('\n'),
                    },
                },
            ],
        }),
    );

    // ── explain_component ─────────────────────────────────────────────
    server.prompt(
        'explain_component',
        'Explain a TailGrids component in plain English, including what it is, when to use it, its primitive backing, keyboard interactions, and a quick example.',
        {
            name: z
                .string()
                .describe(
                    "Component name, e.g. 'button', 'dialog', 'select'",
                ),
        },
        ({ name }) => ({
            messages: [
                {
                    role: 'user' as const,
                    content: {
                        type: 'text' as const,
                        text: [
                            `You are a Tailgrids documentation expert.`,
                            ``,
                            `Explain the "${name}" component by following these steps:`,
                            ``,
                            `1. Call get_component with name="${name}" to retrieve its full specification.`,
                            `2. Call get_a11y_notes with name="${name}" to retrieve accessibility details.`,
                            `3. Write a clear, beginner-friendly explanation covering:`,
                            `   - **What it is** — a one-sentence description of the component.`,
                            `   - **When to use it** — common use cases and scenarios.`,
                            `   - **When NOT to use it** — what alternatives exist for different needs.`,
                            `   - **Primitive backing** — which underlying library powers it (React Aria, Base UI, Floating UI, or none) and what that provides.`,
                            `   - **Keyboard interactions** — how users interact with it via keyboard.`,
                            `   - **Quick example** — a minimal, self-contained TSX snippet showing basic usage with the import statement.`,
                            ``,
                            `Keep the tone conversational but precise. Use markdown formatting.`,
                        ].join('\n'),
                    },
                },
            ],
        }),
    );

    // ── audit_component_usage ─────────────────────────────────────────
    server.prompt(
        'audit_component_usage',
        'Audit a JSX/TSX snippet for accessibility and prop correctness across all TailGrids components found in the code.',
        {
            code: z
                .string()
                .describe('JSX/TSX code snippet to audit'),
        },
        ({ code }) => ({
            messages: [
                {
                    role: 'user' as const,
                    content: {
                        type: 'text' as const,
                        text: [
                            `You are a TailGrids accessibility and code quality auditor.`,
                            ``,
                            `Audit the following code for correct TailGrids component usage:`,
                            ``,
                            '```tsx',
                            code,
                            '```',
                            ``,
                            `Steps:`,
                            `1. Identify every TailGrids component used in the snippet (Button, Input, Dialog, Select, etc.).`,
                            `2. For each component found, call check_usage_a11y with the relevant code section.`,
                            `3. For each component found, call validate_props with the component name and the props used in the snippet.`,
                            `4. Produce a consolidated audit report with:`,
                            `   - A summary table: Component | Status (✅ Pass / ⚠️ Warning / ❌ Error) | Issues`,
                            `   - Detailed findings grouped by component`,
                            `   - Specific fix recommendations with corrected code snippets`,
                            `   - An overall score: number of issues found and severity breakdown`,
                            ``,
                            `Be thorough but practical — focus on real issues, not style preferences.`,
                        ].join('\n'),
                    },
                },
            ],
        }),
    );
}
