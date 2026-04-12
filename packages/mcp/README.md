# TailGrids MCP Server

An MCP (Model Context Protocol) server that exposes the [Tailgrids](https://tailgrids.com) React + Tailwind CSS component library to AI agents. It provides tools for component discovery, source code retrieval, accessibility auditing, theming guidance, and UI composition — plus addressable resources and reusable prompt templates — so any MCP-compatible client can build with Tailgrids components intelligently.

## Setup

### VS Code

Add the following to your workspace's `.mcp.json`:

```json
{
    "mcpServers": {
        "tailgrids": {
            "command": "npx",
            "args": ["-y", "tailgrids-mcp"]
        }
    }
}
```

### Antigravity IDE

Add the following to your workspace's `.mcp.json`:

```json
{
    "mcpServers": {
        "tailgrids": {
            "command": "npx",
            "args": ["-y", "tailgrids-mcp"]
        }
    }
}
```

Connect the server from the MCP panel in Antigravity.

### Claude Desktop

Add the following configuration to your Claude Desktop config file:

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
    "mcpServers": {
        "tailgrids": {
            "command": "npx",
            "args": ["-y", "tailgrids-mcp"]
        }
    }
}
```

### Claude Code

Place the config in your project's `.mcp.json` (project-scoped) or `~/.claude/mcp.json` (global):

```json
{
    "mcpServers": {
        "tailgrids": {
            "command": "npx",
            "args": ["-y", "tailgrids-mcp"]
        }
    }
}
```

---

## Running Locally

### 1. Build for production

```bash
pnpm build
```

This compiles `src/` → `dist/` via TypeScript and automatically runs `chmod +x dist/main.js` (via the `postbuild` script) so the compiled entry point can be spawned directly by MCP clients.

> **Why `chmod +x`?**  
> MCP clients launch the server by spawning `dist/main.js` as an executable. TypeScript's compiler (`tsc`) emits plain `.js` files without the executable bit set, which causes an `EACCES` (permission denied) error at startup. The `postbuild` script handles this automatically on every build.

### 2. Verify the build

```bash
node dist/main.js
```

You should see no errors. The process will wait for MCP input over stdio — press `Ctrl+C` to exit.

### 3. Development mode (no build needed)

For rapid iteration, run the server directly from TypeScript source using `tsx`:

```bash
pnpm dev
```

This uses `tsx` to transpile and run `src/main.ts` on the fly. **No `chmod` step is needed in dev mode** — only the built `dist/main.js` requires it.

For auto-restart on file changes:

```bash
pnpm dev:watch
```

### Troubleshooting

| Error                       | Cause                   | Fix                                                                              |
| --------------------------- | ----------------------- | -------------------------------------------------------------------------------- |
| `spawn dist/main.js EACCES` | File is not executable  | Run `chmod +x dist/main.js` or `pnpm build` (postbuild handles it automatically) |
| `Cannot find module '...'`  | Missing build           | Run `pnpm build` first                                                           |
| `ERR_MODULE_NOT_FOUND`      | Wrong import extensions | All local imports must use `.js` extensions (even for `.ts` source files)        |

---

## Tools

| Tool Name               | Description                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------- |
| `list_components`       | List all TailGrids components. Filter by category, tier (free/pro), or tag.         |
| `search_components`     | Search components by natural language query. Returns top 5 matches.                 |
| `get_component`         | Get the full spec for a component: props, variants, examples, a11y notes.           |
| `get_component_code`    | Get the raw TSX source code for a component.                                        |
| `get_usage_example`     | Get a usage example, optionally targeting a specific variant.                       |
| `get_install_command`   | Get CLI commands to install one or more components.                                 |
| `get_props_schema`      | Get the props schema for a component with types, defaults, and descriptions.        |
| `validate_props`        | Validate a set of prop values against a component's schema.                         |
| `get_a11y_notes`        | Get full accessibility docs: keyboard interactions, ARIA patterns, common mistakes. |
| `check_usage_a11y`      | Audit a JSX/TSX snippet for accessibility issues.                                   |
| `get_tailwind_variants` | List all Tailwind CSS classes for each variant of a component.                      |
| `get_dark_mode_classes` | Show dark mode classes and how to override them.                                    |
| `get_theming_guide`     | Explain how to customize a component's appearance with Tailwind CSS.                |
| `get_primitive_info`    | Explain the underlying primitive library (React Aria, Base UI, Floating UI).        |
| `compose_ui`            | Generate a component plan, install commands, and starter TSX from a description.    |

---

## Resources

| URI Pattern                   | Description                              |
| ----------------------------- | ---------------------------------------- |
| `component://{name}`          | Full component specification (JSON)      |
| `component://{name}/source`   | Raw TSX source code                      |
| `component://{name}/examples` | All usage examples                       |
| `category://{name}`           | All components in a category             |
| `docs://setup`                | Installation and setup guide             |
| `docs://theming`              | Theming system, design tokens, dark mode |
| `docs://cli`                  | CLI reference (init, add)                |
| `primitives://react-aria`     | React Aria overview and usage            |
| `primitives://base-ui`        | Base UI overview and usage               |
| `primitives://floating-ui`    | Floating UI overview and usage           |

---

## Prompts

| Prompt Name             | Description                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------- |
| `build_page_section`    | Build a UI section from a natural language description using TailGrids components. |
| `scaffold_feature_ui`   | Break a feature into sections and scaffold it with TailGrids components.           |
| `explain_component`     | Get a plain-English explanation of a component with a11y details and examples.     |
| `audit_component_usage` | Audit a JSX/TSX snippet for accessibility and prop correctness.                    |

---

## Contributing

- **`tailgrids-source/`** must be cloned manually — it is never committed to this repo (listed in `.gitignore`).
- All source files are TypeScript (`.ts`) with ES module syntax.
- All local imports must include `.js` extensions.
- Use `pnpm` exclusively — never npm or yarn.
- Always run `pnpm build` after changes to verify compilation.
- See `AGENTS.md` for the complete project map and coding rules.
