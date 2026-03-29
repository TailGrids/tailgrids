# ⚠️ This package is DEPRECATED

> **The `tailgrids` npm package has been deprecated in favor of [`@tailgrids/cli`](https://www.npmjs.com/package/@tailgrids/cli).**

## Migration Guide

The new `@tailgrids/cli` package provides a modern CLI-based workflow for managing TailGrids components in your projects. Instead of installing a monolithic package, you can now initialize your project and selectively add only the components you need.

### Step 1: Remove the old package

```bash
npm uninstall tailgrids
```

### Step 2: Initialize your project with the new CLI

```bash
npx @tailgrids/cli@latest init
```

This will:
- Create a `tailgrids.config.json` configuration file
- Generate a `tailgrids.css` file with base styles or directly override your main css file depending on your selection
- Add a `cn` utility file for merging Tailwind CSS classes
- Install necessary dependencies (`clsx`, `tailwind-merge`, `@tailwindcss/forms`)

### Step 3: Add components as needed

```bash
npx @tailgrids/cli@latest add <component-id>
```

For example:

```bash
npx @tailgrids/cli@latest add button
```

Components are copied directly into your project (usually `components/tailgrids/core/`), giving you full control to customize them.

### Step 4: Remove the old plugin import

If you had the old plugin in your CSS file:

```diff
- @plugin 'tailgrids/plugin'
```

---

## Why the change?

- **Smaller footprint** — Only install the components you actually use
- **Full customization** — Components live in your project, not in `node_modules`
- **Modern CLI workflow** — Standardized setup with `init` and `add` commands
- **Better DX** — Automatic dependency management and project configuration

## Links

- 📦 **New package:** [@tailgrids/cli on npm](https://www.npmjs.com/package/@tailgrids/cli)
- 📃 **Documentation:** [tailgrids.com/docs](https://tailgrids.com/docs)
- 🌏 **Website:** [tailgrids.com](https://tailgrids.com)
- 🚀 **Components:** [tailgrids.com/components](https://tailgrids.com/components)

## License

TailGrids Core Version is 100% Free and open-source. You can use it with your personal or commercial projects.
