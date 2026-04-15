import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { allComponents } from '../registry/components.js';

export function registerDocsResources(server: McpServer): void {
    // ── docs://setup ──────────────────────────────────────────────────
    server.resource(
        'docs-setup',
        'docs://setup',
        { description: 'TailGrids installation and project setup guide.' },
        async (uri) => ({
            contents: [
                {
                    uri: uri.href,
                    mimeType: 'text/markdown',
                    text: `# TailGrids — Setup Guide

## Prerequisites

- **Node.js 18+** — Required runtime. Check with \`node -v\`.
- **Tailwind CSS v4** — TailGrids components are styled exclusively with Tailwind utility classes.
- **React 18+ / Next.js 13+** — Components are React-based; Next.js is the recommended framework.
- **A package manager** — npm, pnpm, or yarn.

## Step 1: Initialize TailGrids

Run the TailGrids CLI init command in your project root:

\`\`\`bash
npx @tailgrids/cli@latest init
\`\`\`

This will:
1. Create a \`tailgrids.css\` file with design tokens (CSS custom properties).
2. Generate a \`components.json\` configuration file.
3. Set up the import alias \`@/components/core\` in your \`tsconfig.json\`.

## Step 2: Import the TailGrids Stylesheet

Add the TailGrids stylesheet to your \`globals.css\` (or equivalent entry CSS file):

\`\`\`css
@import "tailwindcss";
@import "./tailgrids.css";
\`\`\`

Order matters — \`tailgrids.css\` must come **after** the Tailwind import so that design tokens are available to Tailwind utilities.

## Step 3: Add Your First Component

Use the CLI to add a component:

\`\`\`bash
npx @tailgrids/cli@latest add button
\`\`\`

The CLI copies the component source into your project at \`src/components/core/button.tsx\`. You own the code — modify it freely.

## Step 4: Import and Use

\`\`\`tsx
import { Button } from "@/components/core/button";

export default function Page() {
  return <Button variant="primary">Get Started</Button>;
}
\`\`\`

## Import Path Convention

All TailGrids components follow the import convention:

\`\`\`
@/components/core/{component-name}
\`\`\`

Examples:
- \`@/components/core/button\`
- \`@/components/core/dialog\`
- \`@/components/core/select\`

The \`@/\` alias maps to \`src/\` by default (configured in \`tsconfig.json\`).
`,
                },
            ],
        }),
    );

    // ── docs://theming ────────────────────────────────────────────────
    server.resource(
        'docs-theming',
        'docs://theming',
        { description: 'TailGrids theming system, design tokens, dark mode, and class override patterns.' },
        async (uri) => ({
            contents: [
                {
                    uri: uri.href,
                    mimeType: 'text/markdown',
                    text: `# TailGrids — Theming Guide

## Utility-First Styling

TailGrids is built on Tailwind CSS's utility-first approach. Every component is styled using Tailwind utility classes — there is no separate component CSS or CSS-in-JS. This means you customize components by adding, removing, or overriding Tailwind classes.

## The \`cn()\` / \`tailwind-merge\` Pattern

TailGrids components use a \`cn()\` helper function that wraps \`clsx\` + \`tailwind-merge\`:

\`\`\`ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
\`\`\`

This utility intelligently merges Tailwind classes, ensuring that later classes override earlier conflicting ones:

\`\`\`ts
cn("bg-red-500 px-4", "bg-blue-500 px-8")
// => "bg-blue-500 px-8"
\`\`\`

## Overriding Styles with \`className\`

Every TailGrids component accepts a \`className\` prop. Your classes are merged with the component's default classes via \`cn()\`, so your overrides **always win** over the defaults:

\`\`\`tsx
<Button className="bg-indigo-600 hover:bg-indigo-700 rounded-full">
  Custom Button
</Button>
\`\`\`

## Dark Mode

TailGrids supports dark mode via Tailwind's built-in \`dark:\` prefix. No separate theme configuration is needed:

\`\`\`tsx
<Button className="dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
  Dark Mode Button
</Button>
\`\`\`

Dark mode is activated by adding the \`dark\` class to a parent element (typically \`<html>\`) or by using the \`prefers-color-scheme\` media query (depending on your Tailwind configuration).

Most TailGrids components already include dark mode styles through CSS custom properties defined in \`tailgrids.css\`. The design tokens automatically adapt to light and dark modes.

## Design Tokens (CSS Custom Properties)

TailGrids uses CSS custom properties as design tokens, defined in \`tailgrids.css\`. These tokens control colors, spacing, and other values across all components:

\`\`\`css
/* Example tokens from tailgrids.css */
--button-primary-background: ...;
--button-primary-hover-background: ...;
--input-primary-focus-border: ...;
--alert-success-border: ...;
\`\`\`

To customize the entire theme, edit the values in \`tailgrids.css\`. All components referencing these tokens will update automatically.

## Class-Variance-Authority (CVA)

Many TailGrids components use \`class-variance-authority\` (CVA) for type-safe, variant-based styling. CVA maps prop values (like \`variant="primary"\`) to specific sets of Tailwind classes. The \`className\` prop is always merged last, so your overrides take precedence.
`,
                },
            ],
        }),
    );

    // ── docs://cli ────────────────────────────────────────────────────
    server.resource(
        'docs-cli',
        'docs://cli',
        { description: 'TailGrids CLI reference for initializing projects and adding components.' },
        async (uri) => ({
            contents: [
                {
                    uri: uri.href,
                    mimeType: 'text/markdown',
                    text: `# TailGrids — CLI Reference

## Overview

The TailGrids CLI (\`@tailgrids/cli\`) is the primary way to add components to your project. It copies component source code into your project — you own the code and can modify it freely.

## Commands

### \`init\` — Initialize a Project

\`\`\`bash
npx @tailgrids/cli@latest init
\`\`\`

Sets up TailGrids in your project:
- Creates \`tailgrids.css\` with design tokens.
- Generates \`components.json\` with project configuration.
- Sets up path aliases in \`tsconfig.json\`.

### \`add\` — Add a Component

\`\`\`bash
npx @tailgrids/cli@latest add <component-name>
\`\`\`

Examples:

\`\`\`bash
# Add a single component
npx @tailgrids/cli@latest add button

# Add multiple components at once
npx @tailgrids/cli@latest add button input checkbox dialog

# Add all components
npx @tailgrids/cli@latest add --all
\`\`\`

### Where Files Are Written

Components are written to:

\`\`\`
src/components/core/<component-name>.tsx
\`\`\`

For example:
- \`npx @tailgrids/cli@latest add button\` → \`src/components/core/button.tsx\`
- \`npx @tailgrids/cli@latest add dialog\` → \`src/components/core/dialog.tsx\`
- \`npx @tailgrids/cli@latest add select\` → \`src/components/core/select.tsx\`

### You Own the Code

The CLI **copies** the source into your project. This is intentional:
- You can read and understand every line.
- You can modify, extend, or delete components freely.
- No black-box dependency — upgrades are opt-in by re-running \`add\`.
- Components are tree-shaken naturally since they are local source files.

### Dependencies

Some components depend on external packages. The CLI will prompt you to install them:

- **class-variance-authority** — Used by most components for variant styling.
- **tailwind-merge** + **clsx** — Used by the \`cn()\` utility for class merging.
- **react-aria-components** — Used by Dialog, Dropdown, Select.
- **@floating-ui/react** — Used by Tooltip.

The CLI will also resolve internal dependencies. For example, \`alert\` depends on \`button\`, so running \`add alert\` will also add \`button\` if it isn't already present.
`,
                },
            ],
        }),
    );

    // ── primitives://react-aria ────────────────────────────────────────
    server.resource(
        'primitives-react-aria',
        'primitives://react-aria',
        { description: 'Overview of React Aria and which TailGrids components use it.' },
        async (uri) => {
            const reactAriaComponents = allComponents
                .filter((c) => c.primitives.includes('react-aria'))
                .map((c) => c.displayName);

            return {
                contents: [
                    {
                        uri: uri.href,
                        mimeType: 'text/markdown',
                        text: `# React Aria — Primitive Library Overview

## What is React Aria?

React Aria is a library of unstyled React hooks and components from **Adobe** that provides accessible UI primitives. It implements the [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) for common interactive patterns like buttons, menus, dialogs, selects, tabs, and more.

React Aria handles:
- **Keyboard interactions** — Arrow keys, Enter, Space, Escape, Tab, type-ahead search.
- **Focus management** — Focus trapping (dialogs), focus restoration, roving tabindex.
- **ARIA attributes** — Correct roles, states, and properties injected automatically.
- **Pointer and touch normalization** — \`onPress\` unifies click, touch, and keyboard activation.
- **Internationalization** — RTL support, locale-aware formatting.

## Why TailGrids Uses React Aria

TailGrids uses React Aria for complex interactive components where getting accessibility right is difficult and error-prone. By building on React Aria, TailGrids components are accessible by default without requiring developers to manually manage ARIA attributes or keyboard handlers.

## TailGrids Components Using React Aria

${reactAriaComponents.map((name) => `- **${name}**`).join('\n')}

## Key API Differences

### \`onPress\` vs \`onClick\`

React Aria components use \`onPress\` instead of \`onClick\`. The \`onPress\` handler unifies pointer (mouse), touch, and keyboard interactions into a single event. This prevents common issues like double-firing on touch devices or missing keyboard activation.

\`\`\`tsx
// ✅ Correct — use onPress
<Button onPress={() => save()}>Save</Button>

// ❌ Avoid — onClick doesn't normalize touch/keyboard
<Button onClick={() => save()}>Save</Button>
\`\`\`

### \`isDisabled\` vs \`disabled\`

React Aria uses \`isDisabled\` instead of the native \`disabled\` attribute. The key difference: \`isDisabled\` keeps the element in the tab order so screen reader users can still discover and understand it, while \`disabled\` removes it from the tab order entirely.

\`\`\`tsx
// ✅ Correct — keeps element focusable for screen readers
<Button isDisabled>Cannot Submit</Button>

// ❌ Avoid — removes from tab order
<Button disabled>Cannot Submit</Button>
\`\`\`

## Official Documentation

- **React Aria docs:** [https://react-spectrum.adobe.com/react-aria/](https://react-spectrum.adobe.com/react-aria/)
- **React Aria Components (styled primitives):** [https://react-spectrum.adobe.com/react-aria/components.html](https://react-spectrum.adobe.com/react-aria/components.html)
`,
                    },
                ],
            };
        },
    );

    // ── primitives://base-ui ──────────────────────────────────────────
    server.resource(
        'primitives-base-ui',
        'primitives://base-ui',
        { description: 'Overview of Base UI and which TailGrids components use it.' },
        async (uri) => {
            const baseUiComponents = allComponents
                .filter((c) => c.primitives.includes('base-ui'))
                .map((c) => c.displayName);

            const componentList =
                baseUiComponents.length > 0
                    ? baseUiComponents.map((name) => `- **${name}**`).join('\n')
                    : '_No TailGrids components currently use Base UI directly._';

            return {
                contents: [
                    {
                        uri: uri.href,
                        mimeType: 'text/markdown',
                        text: `# Base UI — Primitive Library Overview

## What is Base UI?

Base UI is an open-source library of **unstyled, accessible React components** created by the MUI team. It provides headless primitives — components with full accessibility and interaction logic but zero visual styling. You bring your own styles (Tailwind CSS, in the case of TailGrids).

Base UI handles:
- **ARIA roles and attributes** — Correct semantic markup injected automatically.
- **Keyboard navigation** — Full keyboard support for interactive patterns.
- **Focus management** — Proper focus handling for overlays and composite widgets.
- **State management** — Controlled and uncontrolled state patterns for all components.

## Why TailGrids Uses Base UI

Base UI is used for specific components where its headless approach provides a clean API with minimal overhead. It complements React Aria — TailGrids chooses whichever primitive library best fits each component's needs.

## TailGrids Components Using Base UI

${componentList}

## Key Concepts

### Headless / Unstyled

Base UI components render minimal DOM and apply no visual styles. All styling comes from the consuming project (TailGrids applies Tailwind classes). This means:
- No CSS specificity conflicts.
- Full control over the visual appearance.
- No theme configuration required.

### Render Props and Slots

Base UI components expose their internal state via render props and a slot-based architecture. TailGrids wraps these with Tailwind-styled components so you don't need to interact with the slot API directly.

## Official Documentation

- **Base UI docs:** [https://base-ui.com/react/](https://base-ui.com/react/)
`,
                    },
                ],
            };
        },
    );

    // ── primitives://floating-ui ──────────────────────────────────────
    server.resource(
        'primitives-floating-ui',
        'primitives://floating-ui',
        { description: 'Overview of Floating UI and which TailGrids components use it.' },
        async (uri) => {
            const floatingUiComponents = allComponents
                .filter((c) => c.primitives.includes('floating-ui'))
                .map((c) => c.displayName);

            return {
                contents: [
                    {
                        uri: uri.href,
                        mimeType: 'text/markdown',
                        text: `# Floating UI — Primitive Library Overview

## What is Floating UI?

Floating UI is a low-level **positioning engine** for floating elements like tooltips, popovers, dropdowns, and menus. It calculates where a floating element should be placed relative to a reference (trigger) element, handling edge cases like viewport boundaries, scrolling containers, and dynamic content.

Floating UI handles:
- **Placement** — Position a floating element relative to its reference (top, bottom, left, right, and alignment variants).
- **Flip** — Automatically switch placement when the floating element would overflow the viewport.
- **Shift** — Slide the floating element along an axis to keep it visible.
- **Offset** — Add distance between the floating element and its reference.
- **Arrow** — Calculate the correct position for a visual arrow/pointer.
- **Size** — Resize the floating element to fit within available space.

## Important: Floating UI is NOT an Accessibility Library

Floating UI is **exclusively a positioning engine**. It does **not** provide:
- ARIA roles or attributes.
- Keyboard interaction handling.
- Focus management.
- Screen reader support.

Accessibility for floating elements comes from **React Aria** or **Base UI**. TailGrids components that use Floating UI always pair it with an accessibility primitive to ensure full keyboard and screen reader support.

## Why TailGrids Uses Floating UI

TailGrids uses Floating UI for components that need precise, dynamic positioning of floating elements. The library is lightweight, framework-agnostic at its core, and provides a React-specific package (\`@floating-ui/react\`) with hooks like \`useFloating\`, \`useHover\`, \`useDismiss\`, and \`useRole\`.

## TailGrids Components Using Floating UI

${floatingUiComponents.map((name) => `- **${name}**`).join('\n')}

## How It Works in TailGrids

In TailGrids components, Floating UI handles the **where** (positioning), while another library handles the **how** (behavior and accessibility):

\`\`\`
┌─────────────┐     ┌──────────────┐     ┌──────────────────┐
│  Floating UI │     │  React Aria  │     │   TailGrids      │
│  Positioning │  +  │  A11y/Input  │  =  │   Component      │
│  Engine      │     │  Handling    │     │   (fully styled) │
└─────────────┘     └──────────────┘     └──────────────────┘
\`\`\`

For example, the **Tooltip** component uses:
- \`@floating-ui/react\` for calculating tooltip position, flip/shift behavior, and arrow placement.
- \`useRole("tooltip")\` from Floating UI for the ARIA \`tooltip\` role.
- \`useHover\`, \`useFocus\`, \`useDismiss\` from Floating UI for interaction handling.

## Official Documentation

- **Floating UI docs:** [https://floating-ui.com/docs/react](https://floating-ui.com/docs/react)
- **Middleware reference:** [https://floating-ui.com/docs/middleware](https://floating-ui.com/docs/middleware)
`,
                    },
                ],
            };
        },
    );
}
