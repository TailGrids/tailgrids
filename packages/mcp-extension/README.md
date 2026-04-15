# Tailgrids MCP

> AI-powered Tailgrids UI component assistant for VS Code — generate, search, and customize Tailwind CSS UI components directly from your AI agent.

## What is Tailgrids MCP?

Tailgrids MCP connects your AI coding assistant in VS Code to the Tailgrids component library so it can discover components, inspect props and variants, retrieve source code, and help you compose polished Tailwind CSS UI faster.

## Available Tools

The Tailgrids MCP server provides a rich set of tools for discovery, inspection, and generation.

### 🔍 Discovery Tools

- `list_components`: List all Tailgrids components with optional filters for category, tier (free/pro), and tags.
- `search_components`: Find components using natural language search (e.g., "pricing table", "dark hero").
- `get_component`: Fetch the full technical specification for a component, including metadata and dependencies.

### 💻 Code & Installation

- `get_component_code`: Retrieve the raw TSX source code for any Tailgrids component.
- `get_usage_example`: Get specific usage examples for components and their variants.
- `get_install_command`: Generate the exact CLI commands and import statements to add components to your project.

### 🧩 UI Composition

- `compose_ui`: Describe a UI goal (e.g., "settings page with avatar") and get a full component plan + starter TSX scaffold.
- `get_primitive_info`: Learn about the underlying primitive library (React Aria, Base UI, etc.) powering a component.

### 📋 Props & Validation

- `get_props_schema`: Inspect the complete TypeScript prop definitions for any component.
- `validate_props`: Validate a props object against a component's schema to catch errors and anti-patterns.

### ♿ Accessibility

- `get_a11y_notes`: Get detailed accessibility documentation, keyboard interactions, and common pitfalls.
- `check_usage_a11y`: Audit your JSX/TSX code for Tailgrids-specific accessibility issues.

### 🎨 Theming & Styling

- `get_tailwind_variants`: List all visual variants and their corresponding Tailwind CSS classes.
- `get_dark_mode_classes`: Inspect dark mode support and see specific classes used for dark themes.
- `get_theming_guide`: Get guidance on how to customize a component's appearance using Tailwind utilities.

## Available Resources

Resources provide direct access to the Tailgrids knowledge base via URI templates.

| URI Template                  | Description                                                                   |
| :---------------------------- | :---------------------------------------------------------------------------- |
| `component://{name}`          | Full specification for a specific component.                                  |
| `component://{name}/source`   | Raw TSX source code for a component.                                          |
| `component://{name}/examples` | All usage examples for a component.                                           |
| `category://{name}`           | List all components in a specific category (e.g., `core`, `navigation`).      |
| `docs://setup`                | Step-by-step installation and project setup guide.                            |
| `docs://theming`              | Guide on the Tailgrids theming system and design tokens.                      |
| `docs://cli`                  | Reference for the Tailgrids CLI commands.                                     |
| `primitives://{lib}`          | Deep dives into primitive libraries (`react-aria`, `base-ui`, `floating-ui`). |

## Available Prompts

Prompts are predefined templates that help the AI agent perform complex tasks.

- `explain_component`: Get a conversational, beginner-friendly explanation of any component.
- `build_page_section`: Build a complete UI section from a natural language description.
- `scaffold_feature_ui`: Break a complex feature into sections and generate a full page scaffold.
- `audit_component_usage`: Perform a comprehensive quality and accessibility audit on your code.

## Examples

**Generate a hero section:**

```
Generate a hero section with a headline, subtitle, and CTA button using Tailgrids
```

**Find all card components:**

```
Search for card components in Tailgrids and show me the options
```

**Get a specific component:**

```
Get the Tailgrids pricing table component with a toggle for monthly/yearly
```

## Requirements

- VS Code 1.99 or later
- GitHub Copilot or any MCP-compatible AI agent in VS Code
- Node.js 18+ for `npx`
- Internet connection for the first server launch

## Troubleshooting

**Tools don't appear in Agent mode**
→ Make sure you are in **Agent** mode, not Chat or Edit mode, in the GitHub Copilot panel.

**Server fails to start**
→ Check that Node.js 18+ is installed: `node --version`. The server runs via `npx` and requires internet access on first run.

**npx is slow on first run**
→ `npx` downloads the package on first use. Subsequent starts are faster because the package is cached locally.

## Privacy & Security

The Tailgrids MCP server runs locally on your machine as a child process launched by VS Code. No data is sent to Tailgrids servers by the extension itself. All communication happens between your AI agent and your local MCP server process over stdio.

## Links

- [Tailgrids Website](https://tailgrids.com)
- [Tailgrids Documentation](https://tailgrids.com/docs)
- [npm Package (@Tailgrids/cli)](https://www.npmjs.com/package/@tailgrids/cli)
- [GitHub Repository](https://github.com/TailGrids/tailgrids.git)
- [Report an Issue](https://github.com/TailGrids/tailgrids/issues)

## License

MIT
