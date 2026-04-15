import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getComponentByName } from '../registry/queries.js';

// ---------------------------------------------------------------------------
// Hard-coded keyboard interaction map keyed by "primitiveLib:componentType"
// ---------------------------------------------------------------------------
const keyboardInteractions: Record<
    string,
    Array<{ key: string; action: string }>
> = {
    'react-aria:button': [
        { key: 'Enter / Space', action: 'Activates the button' },
        { key: 'Tab / Shift+Tab', action: 'Moves focus to/from the button' },
    ],
    'react-aria:dialog': [
        { key: 'Escape', action: 'Closes the dialog' },
        { key: 'Tab', action: 'Cycles focus within dialog (focus trap)' },
        { key: 'Shift+Tab', action: 'Cycles focus backwards within dialog' },
    ],
    'react-aria:tabs': [
        { key: 'Arrow Left / Right', action: 'Moves focus between tabs' },
        { key: 'Enter / Space', action: 'Activates focused tab' },
        { key: 'Tab', action: 'Moves into tab panel content' },
    ],
    'react-aria:select': [
        { key: 'Space / Enter', action: 'Opens the listbox' },
        { key: 'Arrow Up / Down', action: 'Navigates options' },
        { key: 'Escape', action: 'Closes without selecting' },
        { key: 'Enter', action: 'Selects focused option' },
    ],
    'react-aria:menu': [
        { key: 'Arrow Up / Down', action: 'Navigates menu items' },
        { key: 'Enter / Space', action: 'Triggers focused item' },
        { key: 'Escape', action: 'Closes the menu' },
    ],
    'react-aria:combobox': [
        { key: 'Arrow Down', action: 'Opens listbox / moves to next option' },
        { key: 'Arrow Up', action: 'Moves to previous option' },
        { key: 'Enter', action: 'Selects focused option' },
        { key: 'Escape', action: 'Closes listbox or clears input' },
    ],
    'base-ui:tooltip': [
        { key: 'Tab', action: 'Focuses trigger element, showing tooltip' },
        { key: 'Escape', action: 'Hides tooltip' },
    ],
};

// ---------------------------------------------------------------------------
// Mapping from component name → the key used in keyboardInteractions.
// Some components don't match their primitive exactly (e.g., "dropdown" → "menu").
// ---------------------------------------------------------------------------
const componentToKeyboardKey: Record<string, string> = {
    button: 'react-aria:button',
    dialog: 'react-aria:dialog',
    tabs: 'react-aria:tabs',
    select: 'react-aria:select',
    dropdown: 'react-aria:menu',
    combobox: 'react-aria:combobox',
    tooltip: 'base-ui:tooltip',
};

// ---------------------------------------------------------------------------
// Common mistakes per component type
// ---------------------------------------------------------------------------
const commonMistakes: Record<string, string[]> = {
    button: [
        'Using `onClick` instead of `onPress` — React Aria\'s `onPress` handles keyboard, pointer, and touch interactions uniformly.',
        'Using `disabled` instead of `isDisabled` — native `disabled` removes the element from tab order, making it invisible to screen readers.',
        'Icon-only buttons without `aria-label` — screen readers will announce nothing meaningful.',
        'Wrapping a `<Button>` inside an `<a>` tag — use `<LinkButton>` or set `elementType="a"` instead.',
    ],
    input: [
        'Omitting the `label` prop — every input must have a visible or `aria-label` label for screen reader users.',
        'Using `placeholder` text as a substitute for a label — placeholders disappear on focus and are not announced by all screen readers.',
        'Not associating error messages with `aria-describedby` — use the `hint` prop with `state="error"` to auto-associate.',
    ],
    checkbox: [
        'Not providing a `label` prop — the checkbox will appear as an unlabelled form control.',
        'Using `onChange` without checking the event structure — the visually-hidden input fires native change events.',
    ],
    dialog: [
        'Missing `aria-labelledby` or `aria-label` on the dialog — React Aria requires one for proper screen reader announcement.',
        'Placing autofocused elements outside the dialog — focus must stay trapped inside the dialog while open.',
        'Forgetting to return focus to the trigger element when the dialog closes — React Aria handles this if you use `DialogTrigger`.',
    ],
    dropdown: [
        'Using `onClick` on `DropdownMenuItem` instead of `onAction` — React Aria menus use `onAction` for item activation.',
        'Not using `keyboard` prop for type-ahead search — React Aria menus support type-ahead by default, but custom rendering can break it.',
        'Rendering menu items as `<a>` tags without proper ARIA roles — use `href` prop on `DropdownMenuItem` instead.',
    ],
    tooltip: [
        'Wrapping a non-focusable element (`<div>`, `<span>`) as the trigger — tooltips must be triggered by focusable elements for keyboard users.',
        'Using tooltip for critical information — tooltips are supplementary; don\'t hide essential content in them.',
        'Not providing `aria-label` on icon-only trigger buttons — the tooltip text isn\'t a substitute for accessible name.',
    ],
    tabs: [
        'Using `onClick` on `TabTrigger` instead of the built-in state management — the component handles selection internally.',
        'Not providing unique `value` props on each `TabTrigger` and `TabContent` — duplicate values cause unpredictable behavior.',
        'Placing interactive content in tab labels — screen readers may not announce nested interactive elements correctly.',
    ],
    badge: [
        'Using a badge to convey critical status without additional context — badges are often visual-only indicators.',
        'Not providing an `aria-label` on the parent when the badge conveys important state information.',
    ],
    alert: [
        'Not using `role="alert"` or `aria-live="polite"` for dynamically rendered alerts — without it, screen readers won\'t announce new alerts.',
        'Auto-dismissing alerts too quickly — users with cognitive disabilities may need more time to read the message.',
        'Missing descriptive close button label — ensure the dismiss button has `aria-label="Close alert"`.',
    ],
    select: [
        'Missing an associated `<Label>` — `Select` requires a visible label or `aria-label` for screen reader announcement.',
        'Using `disabled` instead of `isDisabled` on React Aria `Select` — native `disabled` removes the element from tab order.',
        'Not providing an `aria-label` on `SelectTrigger` when no visible label exists.',
    ],
};

// ---------------------------------------------------------------------------
// Primitive descriptions for the a11y notes
// ---------------------------------------------------------------------------
const primitiveGuarantees: Record<string, string> = {
    'react-aria':
        'React Aria provides full ARIA attribute injection, keyboard interaction handling, focus management, and pointer/touch normalization. It ensures the component meets WAI-ARIA design patterns out of the box.',
    'base-ui':
        'Base UI provides unstyled, accessible primitive components with proper ARIA roles, keyboard navigation, and focus management built in.',
    'floating-ui':
        'Floating UI provides the positioning engine for floating elements. It does NOT provide accessibility by itself — ARIA roles and keyboard handling come from React Aria or Base UI.',
    none: 'This component is built with plain HTML elements and class-variance-authority. Accessibility patterns are implemented manually.',
};

export function registerA11yTools(server: McpServer): void {
    // ── get_a11y_notes ─────────────────────────────────────────────────
    server.tool(
        'get_a11y_notes',
        'Get full accessibility documentation for a Tailgrids component: primitive guarantees, keyboard interactions, common mistakes, and ARIA patterns.',
        {
            name: z.string().describe("Component name, e.g. 'button', 'dialog', 'select'"),
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
            lines.push(`# Accessibility — ${component.displayName}`);
            lines.push('');

            // Section 1: Primitive Guarantee
            lines.push('## Primitive Guarantee');
            lines.push('');
            for (const prim of component.primitives) {
                const desc = primitiveGuarantees[prim] ?? `Unknown primitive: ${prim}`;
                lines.push(`**${prim}**: ${desc}`);
                lines.push('');
            }

            // Section 2: Component Notes
            lines.push('## Component Notes');
            lines.push('');
            lines.push(component.a11yNotes);
            lines.push('');

            // Section 3: Keyboard Interactions
            lines.push('## Keyboard Interactions');
            lines.push('');

            const kbKey = componentToKeyboardKey[component.name];
            const interactions = kbKey ? keyboardInteractions[kbKey] : undefined;

            if (interactions && interactions.length > 0) {
                lines.push('| Key | Action |');
                lines.push('|-----|--------|');
                for (const { key, action } of interactions) {
                    lines.push(`| ${key} | ${action} |`);
                }
            } else {
                lines.push(
                    'No specific keyboard interactions documented for this component. It relies on standard HTML keyboard behavior.',
                );
            }
            lines.push('');

            // Section 4: Common Mistakes
            lines.push('## Common Mistakes');
            lines.push('');
            const mistakes = commonMistakes[component.name];
            if (mistakes && mistakes.length > 0) {
                for (const mistake of mistakes) {
                    lines.push(`- ${mistake}`);
                }
            } else {
                lines.push('No common accessibility mistakes documented for this component.');
            }

            return {
                content: [{ type: 'text' as const, text: lines.join('\n') }],
            };
        },
    );

    // ── check_usage_a11y ───────────────────────────────────────────────
    server.tool(
        'check_usage_a11y',
        'Audit a JSX/TSX snippet that uses TailGrids components and flag accessibility issues.',
        {
            code: z.string().describe('JSX/TSX snippet to audit'),
        },
        async ({ code }) => {
            const findings: Array<{
                severity: 'error' | 'warning';
                pattern: string;
                message: string;
                fix: string;
            }> = [];

            // Pattern 1: <Button with icon-child content and no aria-label
            // Heuristic: Button contains only an icon element (e.g. <SomeIcon />) and no text
            const buttonIconRegex = /<Button\b[^>]*>[\s]*<[A-Z]\w*Icon\b[^/]*\/>[\s]*<\/Button>/g;
            const buttonAriaRegex = /<Button\b[^>]*aria-label/g;
            const buttonIconMatches = code.match(buttonIconRegex);
            if (buttonIconMatches) {
                for (const match of buttonIconMatches) {
                    if (!buttonAriaRegex.test(match)) {
                        findings.push({
                            severity: 'error',
                            pattern: 'Icon-only Button without aria-label',
                            message:
                                'Icon-only Button must have an `aria-label` for screen readers',
                            fix: 'Add aria-label="Description of action" to the <Button> element.',
                        });
                    }
                    // Reset regex lastIndex
                    buttonAriaRegex.lastIndex = 0;
                }
            }

            // Also check for iconOnly prop without aria-label
            const iconOnlyRegex = /<Button\b[^>]*iconOnly[^>]*>/g;
            let match;
            while ((match = iconOnlyRegex.exec(code)) !== null) {
                if (!match[0].includes('aria-label')) {
                    findings.push({
                        severity: 'error',
                        pattern: 'iconOnly Button without aria-label',
                        message:
                            'Icon-only Button must have an `aria-label` for screen readers',
                        fix: 'Add aria-label="Description of action" to the <Button> element.',
                    });
                }
            }

            // Pattern 2: disabled= on a TailGrids component
            const disabledRegex =
                /<(Button|Select|Dialog|Dropdown|DropdownMenu|Input|Checkbox|Tabs|TabRoot|TabTrigger|Alert|Badge|Tooltip)\b[^>]*\bdisabled\b(?!=\{false\})[^>]*>/g;
            while ((match = disabledRegex.exec(code)) !== null) {
                findings.push({
                    severity: 'warning',
                    pattern: `\`disabled\` on <${match[1]}>`,
                    message:
                        'Use `isDisabled` (React Aria prop) — native `disabled` blocks focus, `isDisabled` does not',
                    fix: 'Replace `disabled` with `isDisabled`.',
                });
            }

            // Pattern 3: onClick= on a TailGrids component
            const onClickRegex =
                /<(Button|Select|Dialog|Dropdown|DropdownMenu|DropdownMenuItem|Input|Checkbox|Tabs|TabRoot|TabTrigger|Alert|Tooltip)\b[^>]*\bonClick\b[^>]*>/g;
            while ((match = onClickRegex.exec(code)) !== null) {
                findings.push({
                    severity: 'warning',
                    pattern: `\`onClick\` on <${match[1]}>`,
                    message:
                        "Prefer `onPress` over `onClick` — React Aria's `onPress` unifies pointer, touch, and keyboard",
                    fix: 'Replace `onClick` with `onPress`.',
                });
            }

            // Pattern 4: <Modal or <Dialog without aria-labelledby or aria-label
            const dialogRegex = /<(Modal|Dialog|DialogContent)\b([^>]*)>/g;
            while ((match = dialogRegex.exec(code)) !== null) {
                const attrs = match[2] ?? '';
                if (
                    !attrs.includes('aria-labelledby') &&
                    !attrs.includes('aria-label')
                ) {
                    // Check if there's a DialogTitle inside — that's often sufficient
                    // For simplicity, only flag if we don't find aria-label/aria-labelledby
                    findings.push({
                        severity: 'error',
                        pattern: `<${match[1]}> without aria-labelledby or aria-label`,
                        message:
                            'Dialog/Modal must have `aria-labelledby` pointing to a heading, or an `aria-label`',
                        fix: 'Add aria-labelledby="dialog-title-id" or aria-label="Dialog description" to the element.',
                    });
                }
            }

            // Pattern 5: Raw <input inside TailGrids form
            const rawInputRegex = /<input\b/g;
            while ((match = rawInputRegex.exec(code)) !== null) {
                // Only flag if the code also uses TailGrids components
                const hasTailgridsImport =
                    code.includes('@/components') ||
                    code.includes('<Button') ||
                    code.includes('<Select') ||
                    code.includes('<Dialog');
                if (hasTailgridsImport) {
                    findings.push({
                        severity: 'warning',
                        pattern: 'Raw `<input>` alongside TailGrids components',
                        message:
                            'Use TailGrids `<Input>` instead of raw `<input>` to inherit label association and error state',
                        fix: 'Replace `<input>` with `<Input>` from `@/components/core/input`.',
                    });
                }
            }

            // Pattern 6: <Tooltip wrapping a non-focusable element
            const tooltipTriggerRegex =
                /<TooltipTrigger\b[^>]*>[\s]*<(div|span)\b/g;
            while ((match = tooltipTriggerRegex.exec(code)) !== null) {
                findings.push({
                    severity: 'error',
                    pattern: `<TooltipTrigger> wrapping non-focusable <${match[1]}>`,
                    message:
                        'Tooltip trigger must be focusable — wrap a `<button>` or use `asChild` on a focusable element',
                    fix: `Replace the <${match[1]}> with a <button> or add \`asChild\` on TooltipTrigger with a focusable child.`,
                });
            }

            // Pattern 7: <Select with no associated <Label
            // Heuristic: Look for <Select blocks that don't have <SelectLabel or <Label nearby
            const selectBlockRegex = /<Select\b[^>]*>/g;
            while ((match = selectBlockRegex.exec(code)) !== null) {
                // Check if there's a Label component nearby (within ~500 chars)
                const contextStart = Math.max(0, match.index - 200);
                const contextEnd = Math.min(
                    code.length,
                    match.index + match[0].length + 500,
                );
                const context = code.slice(contextStart, contextEnd);
                const hasLabel =
                    context.includes('<SelectLabel') ||
                    context.includes('<Label') ||
                    context.includes('aria-label') ||
                    context.includes('aria-labelledby');
                if (!hasLabel) {
                    findings.push({
                        severity: 'error',
                        pattern: '<Select> without associated Label',
                        message:
                            'Select must have an associated Label for screen reader announcement',
                        fix: 'Add a <SelectLabel> inside the Select, or add aria-label on the Select.',
                    });
                }
            }

            // Build output
            const lines: string[] = [];
            lines.push('## Accessibility Audit Results');
            lines.push('');

            if (findings.length === 0) {
                lines.push(
                    '✅ No accessibility issues found in the provided snippet.',
                );
            } else {
                for (const finding of findings) {
                    const icon = finding.severity === 'error' ? '❌' : '⚠️';
                    lines.push(`### ${icon} ${finding.severity.toUpperCase()}: ${finding.pattern}`);
                    lines.push('');
                    lines.push(`**Issue:** ${finding.message}`);
                    lines.push('');
                    lines.push(`**Fix:** ${finding.fix}`);
                    lines.push('');
                }
            }

            const errorCount = findings.filter(
                (f) => f.severity === 'error',
            ).length;
            const warningCount = findings.filter(
                (f) => f.severity === 'warning',
            ).length;
            lines.push('---');
            lines.push(
                `**Summary:** ${errorCount} error${errorCount !== 1 ? 's' : ''}, ${warningCount} warning${warningCount !== 1 ? 's' : ''}`,
            );

            return {
                content: [{ type: 'text' as const, text: lines.join('\n') }],
            };
        },
    );
}
