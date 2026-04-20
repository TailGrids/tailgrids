# Tailgrids MCP Server

The official MCP (Model Context Protocol) Server for Tailgrids UI. Gives AI coding assistants in Claude Code, Cursor, and VS Code direct access to 600+ Tailwind CSS React UI components, UI blocks, props, accessibility docs, and theming in the code editor.

## What is Tailgrids MCP?

Tailgrids MCP is an MCP server that connects AI coding assistants to the Tailgrids React component library. Your AI agent can search components by name or natural language, retrieve TSX source code, inspect TypeScript props, validate usage, audit accessibility, and scaffold full-page sections from inside VS Code, Claude Code, or Cursor.

Built for React and Next.js developers using AI-assisted workflows with GitHub Copilot, Claude Code, or Cursor.

## Requirements

- Node.js 18 or higher
- Any MCP-compatible AI client: Claude Code, Cursor, or VS Code with GitHub Copilot

## Tools

The Tailgrids UI MCP server provides a rich set of tools for discovery, inspection, and generation.

### Discovery

- `list_components`: List all Tailgrids components with optional filters for category, tier (free/pro), and tags.
- `search_components`: Search using natural language such as "pricing table" or "dark hero section."
- `get_component`: Fetch the full technical specification for a component, including metadata and dependencies.

### Code and Installation

- `get_component_code`: Retrieve raw TSX source code for any Tailgrids component.
- `get_usage_example`: Get usage examples for a component and its variants.
- `get_install_command`: Generate exact CLI commands and import statements to add a component to your project.

### UI Composition

- `compose_ui`: Describe a UI goal in plain English and get a full component plan with a starter TSX scaffold.
- `get_primitive_info`: Inspect the underlying primitive library powering a component such as React Aria or Base UI.

### Props & Validation

- `get_props_schema`:Inspect complete TypeScript prop definitions for any component.
- `validate_props`: Validate a props object against a component schema to catch type errors and anti-patterns before running your app.

### Accessibility

- `get_a11y_notes`: Get keyboard interaction docs, ARIA guidance, and common accessibility pitfalls for any component.
- `check_usage_a11y`: Audit your JSX/TSX code for Tailgrids-specific accessibility issues.

### Theming & Styling

- `get_tailwind_variants`: List all visual variants and their corresponding Tailwind CSS utility classes.
- `get_dark_mode_classes`: Inspect dark mode support and the specific classes used for dark themes.
- `get_theming_guide`: Get guidance on customizing a component using Tailwind CSS utilities and design tokens.

## Prompts

Predefined templates for complex AI-assisted UI tasks.

- `explain_component`: Beginner-friendly explanation of any Tailgrids component.
- `build_page_section`: Generate a complete UI section from a plain English description.
- `scaffold_feature_ui`: Break a complex feature into sections and generate a full page scaffold.
- `audit_component_usage`: Run a quality and accessibility audit on your existing component code.

## Resources

Direct URI access to Tailgrids components, categories, docs, and primitive library references.

- component://{name} - Full specification for a specific component.
- component://{name}/source - Raw TSX source code for a component.
- component://{name}/examples - All usage examples for a component.
- category://{name} - List all components in a specific category (e.g., core, navigation).
- docs://setup - Step-by-step installation and project setup guide
- docs://theming - Guide on the Tailgrids theming system and design tokens.
- docs://cli - Reference for the Tailgrids CLI commands.
- primitives://{lib} - Deep dives into primitive libraries (react-aria, base-ui, floating-ui).

## Example Prompts

- Generate a hero section with a headline, subtitle, and CTA button using Tailgrids
- Search for card components in Tailgrids and show me the options
- Get the Tailgrids pricing table component with a toggle for monthly/yearly
- Build a settings page with an avatar uploader using Tailgrids
- Audit my dashboard layout for accessibility issues

## Troubleshooting

- **Tools do not appear in Agent mode:** Make sure you are in **Agent** mode, not Chat or Edit mode, in the GitHub Copilot panel.

- **Server fails to start:** Verify Node.js 18 or higher is installed by running `node --version`. The server requires internet access on first run.

- **npx is slow on first run:** `npx` downloads the package on first use. Subsequent runs are faster because the package is cached locally.

## Privacy

The Tailgrids UI MCP server runs locally as a child process on your machine. No usage data is sent to Tailgrids servers. All communication stays between your AI agent and the local MCP server process over stdio.

## Quick Links

- [Tailgrids Website](https://tailgrids.com)
- [Tailgrids Documentation](https://tailgrids.com/docs)
- [npm Package (@Tailgrids/cli)](https://www.npmjs.com/package/@tailgrids/cli)
- [GitHub Repository](https://github.com/TailGrids/tailgrids.git)
- [Report an Issue](https://github.com/TailGrids/tailgrids/issues)

## License

MIT
