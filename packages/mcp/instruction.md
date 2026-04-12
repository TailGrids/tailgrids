# Updating the Registry When a New TailGrids Component Is Released

## Overview

When Tailgrids ships a new component, the MCP server won't know about it until you add it to the registry. This document explains the full update process — both the human steps and the exact agent prompt to use.

---

## Step 1 — Pull the Latest Tailgrids Source and Generate Skeleton

```bash
pnpm run sync-registry
```

The output will say something like:

```bash
Generated 56 component entries → src/registry/components.generated.ts
```

Verify the new component file exists:

```bash
ls tailgrids-source/apps/docs/src/registry/core/
```

You should see a new `.tsx` file for the component (e.g. `timeline.tsx`).

---

## Step 2 — Identify What's New

Diff the generated file against the current registry to see exactly which entries are new:

```bash
# List component names already in your live registry:
grep 'name:' src/registry/components.ts | sort > /tmp/existing.txt

# List component names in the freshly generated file:
grep 'name:' src/registry/components.generated.ts | sort > /tmp/generated.txt

# Show the difference — these are the new ones:
diff /tmp/existing.txt /tmp/generated.txt
```

Note the names of the new components.

---

## Step 3 — Run the Agent Task

Open a **new agent session in your code editor**. Paste the prompt from the section below, replacing `<COMPONENT_NAME>` with the actual component name(s) you identified in Step 2.

For a single new component, the agent will finish in one session. For multiple new components, you can run parallel agent sessions — one per component — to finish faster.

---

## Step 4 — Verify the Build

After the agent finishes, run:

```bash
pnpm build
```

It must compile with zero TypeScript errors. If there are errors, they are almost always in the new entry — ask the agent to fix them by pasting the error output.

---

## Step 5 — Test in a MCP Client

Reconnect the MCP server in an MCP client, then test the new component:

```bash
get_component { name: "<component-name>" }
get_component_code { name: "<component-name>" }
get_a11y_notes { name: "<component-name>" }
```

All three should return meaningful, non-placeholder content.

---

## Step 6 — Update AGENTS.md (if needed)

If the new component introduced a new category that didn't exist before, add it to the `ComponentCategory` type in `src/registry/types.ts` and note it in `AGENTS.md`.

---

---

## Agent Prompt — Complete TODO Fill-In

Copy everything between the `---PROMPT START---` and `---PROMPT END---` markers and paste it into a new AI agent session. Replace the placeholder at the top with the actual component name(s) you want the agent to process.

---PROMPT START---

## Your Task

You are working inside the `tailgrids-mcp` project. Your job is to fill in all TODO values in the component registry for the following component(s):

**Target component(s):** `<COMPONENT_NAME>`
_(Replace this with the actual component name, e.g. `timeline` or `timeline, stepper`)_

If you are doing a full registry fill-in (all components), set the target to: **all components in `src/registry/components.generated.ts`**

---

## Context

- The registry file to read from is: `src/registry/components.generated.ts`
- The registry file to write to is: `src/registry/components.ts`
- The actual TailGrids component source files are in: `tailgrids-source/apps/docs/src/registry/core/`
- The TypeScript type for a registry entry is in: `src/registry/types.ts`

---

## Rules

1. **Never invent anything.** Every prop, variant, class name, and example must be derived from the actual source file. If you are unsure about something, leave a short note rather than guessing.
2. **Never modify files inside `tailgrids-source/`.** That directory is read-only.
3. **Never skip a component.** If processing multiple components, complete every single one before finishing.
4. **Always verify your output compiles.** After writing to `src/registry/components.ts`, run `pnpm build` and fix any TypeScript errors before declaring the task done.
5. **Do not remove existing entries.** When adding new entries to `src/registry/components.ts`, append them — do not overwrite entries that are already correct.

---

## Step-by-Step Instructions

Follow these steps in order for each target component.

### Step 1 — Read the generated skeleton

Open `src/registry/components.generated.ts` and find the entry for the target component. Note every field that contains a `TODO` value — these are what you need to fill in.

### Step 2 — Read the actual source file

The `sourceFile` field in the skeleton entry gives you the path relative to `tailgrids-source/`. Open that file now.

For example, if `sourceFile` is `"apps/docs/src/registry/core/timeline.tsx"`, open:
`tailgrids-source/apps/docs/src/registry/core/timeline.tsx`

Read the entire file carefully before writing anything.

### Step 3 — Fill in `description`

Write 1–2 sentences in plain English:

- What is this component? (what it renders, what it represents)
- When should a developer use it? (the specific UI scenario it solves)

Good example: `"A vertically stacked list of events in chronological order. Use it to display activity logs, changelogs, order tracking, or any sequence of timestamped events."`

Bad example: `"A timeline component."` — too vague, not actionable.

### Step 4 — Fill in `primitives`

Look at the import statements at the top of the source file. Map each import to its primitive library:

| Import source starts with   | Set primitive to |
| --------------------------- | ---------------- |
| `react-aria-components`     | `"react-aria"`   |
| `@react-aria/`              | `"react-aria"`   |
| `@react-stately/`           | `"react-aria"`   |
| `@base-ui-components/react` | `"base-ui"`      |
| `@floating-ui/react`        | `"floating-ui"`  |
| None of the above           | `"none"`         |

If the component has no imports from any of those libraries, set `primitives: ["none"]`.

### Step 5 — Fill in `variants`

Look for one of these patterns in the source file:

**Pattern A — `cva()` call:**

```ts
const buttonVariants = cva('base-classes', {
    variants: {
        variant: {
            primary: 'bg-blue-600 text-white ...',
            secondary: 'bg-gray-100 ...',
        },
        size: {
            sm: 'text-sm px-3 ...',
            lg: 'text-lg px-6 ...',
        },
    },
});
```

Each key inside `variants: {}` is a variant dimension. Each sub-key is a variant name. Extract the actual Tailwind class strings.

**Pattern B — conditional className string:**

```ts
className={variant === "primary" ? "bg-blue-600 ..." : "bg-gray-100 ..."}
```

Extract the variant name and its classes.

**Pattern C — no variants:**
If neither pattern exists, set `variants: []`.

For each variant, produce:

```ts
{ name: "primary", description: "High-emphasis filled style", tailwindClasses: "bg-blue-600 text-white hover:bg-blue-700" }
```

### Step 6 — Fill in `props`

The script already extracted props from TypeScript interfaces. Your job is to:

1. Replace any `"TODO: describe <propName>"` descriptions with a real one-sentence explanation of what the prop does.
2. Check for props the script may have missed (e.g. props passed through `...rest` or inherited via `extends`). Add them if they are important for usage.
3. For any prop that comes from React Aria, Base UI, or Floating UI, set `fromPrimitive` to the appropriate library name.

Important React Aria props to flag when you see them:

- `isDisabled` → `fromPrimitive: "react-aria"` — note in description: "Prefer over native `disabled` — keeps element focusable"
- `onPress` → `fromPrimitive: "react-aria"` — note: "Prefer over `onClick` — unifies pointer, keyboard, and touch"
- `isOpen` / `defaultOpen` → `fromPrimitive: "react-aria"`
- `onOpenChange` → `fromPrimitive: "react-aria"`

### Step 7 — Fill in `examples`

Write 2–3 realistic code examples. Each must:

- Use the correct import path: `import { ComponentName } from "@/components/core/component-name"`
- Use only props that actually exist in the component
- Be copy-paste ready (no ellipsis placeholders like `...`, no invented prop names)
- Cover meaningfully different use cases (e.g. basic, with a specific variant, with an event handler)

Example of a good entry:

```ts
{
  title: "Basic usage",
  code: `import { Badge } from "@/components/core/badge";\n\n<Badge variant="success">Active</Badge>`,
},
{
  title: "With dot indicator",
  code: `<Badge variant="warning" dot>3 pending</Badge>`,
},
```

### Step 8 — Fill in `a11yNotes`

Write 2–4 sentences covering:

1. What the underlying primitive (React Aria / Base UI) gives for free (keyboard, ARIA roles, focus management). If `primitives: ["none"]`, say "No primitive dependency — relies on semantic HTML."
2. One specific thing a developer must do to keep this component accessible (e.g. "Always provide an `aria-label` for icon-only usage", "The Dialog must contain a heading that is referenced via `aria-labelledby`").
3. Any known gotcha (e.g. "Do not nest interactive elements inside a Link — it creates invalid HTML").

### Step 9 — Fill in `darkModeSupport`

Search the source file for any class prefixed with `dark:`. If found, set `darkModeSupport: true`. If none found, set `darkModeSupport: false`.

Quick check command you can run:

```bash
grep -c "dark:" tailgrids-source/apps/docs/src/registry/core/<component-name>.tsx
```

If the count is greater than 0, it's `true`.

### Step 10 — Fill in `tags`

Choose 2–5 lowercase tags from this list. Only use tags that genuinely apply:

`interactive`, `form`, `overlay`, `navigation`, `feedback`, `data-display`, `layout`, `action`, `input`, `selection`, `disclosure`, `status`, `media`, `chart`, `table`, `button`

Add one or two freeform tags if none of the above fit, keeping them lowercase and hyphenated.

### Step 11 — Write the completed entry to `src/registry/components.ts`

- If the component is **new** (not yet in `components.ts`): append its `const` declaration and add it to the `allComponents` array at the bottom of the file.
- If the component **already exists** with TODOs: replace the existing entry in place.
- Do not touch any entry you were not asked to process.

### Step 12 — Verify no TODOs remain for your target component(s)

Run:

```bash
grep -n "TODO" src/registry/components.ts
```

If any TODO lines remain for your target component(s), go back and fill them in. TODOs from other components (ones you were not asked to process) are acceptable to leave.

### Step 13 — Build and confirm

```bash
pnpm build
```

The build must pass with zero TypeScript errors. If there are type errors, fix them before finishing. Common causes:

- A `category` value that isn't in the `ComponentCategory` union → add it to `src/registry/types.ts`
- A `primitives` value that isn't in the `PrimitiveLib` union → same fix
- A missing required field on `ComponentMeta` → add the field

### Step 14 — Report back

When done, respond with:

1. Which component(s) you processed
2. Any fields you were unsure about (flag them for human review)
3. Confirmation that `pnpm build` passed

---PROMPT END---
