## @tailgrids/mcp

The MCP server for the Tailgrids UI provides AI assistants with direct access to 600+ React Tailwind CSS components, UI blocks, and documentation.

---

# Tailgrids MCP Server

Tailgrids MCP connects your AI coding assistant to the full Tailgrids UI component library. Instead of guessing Tailwind classes or browsing docs manually, an AI agent can search components by name or natural language, fetch TSX source code, inspect props and variants, validate usage, check accessibility, and scaffold entire page sections directly inside Claude Code, Cursor, or VS Code.

### Requirements

- Any MCP-compatible AI client (Claude Code, Cursor, VS Code with Copilot)
- Node.js 18 or higher

### Tools

- **Discovery:** list_components, search_components, get_component. Browse and search the full Tailgrids library. Filter by category, tier, or tags. Use natural language queries like "dark hero" or "pricing toggle."
- **Code and Installation:** get_component_code, get_usage_example, get_install_command. Pull raw TSX source, see working usage examples, and generate the exact CLI and import statements to add any component to your project.
- **UI Composition:** compose_ui, get_primitive_info Describe a UI goal in plain English and get a full component plan with a starter scaffold. Inspect the underlying primitive libraries powering each component.
- **Props and Validation:** get_props_schema, validate_props Inspect full TypeScript prop definitions and validate your props object against the schema before running your app.
- **Accessibility:** get_a11y_notes, check_usage_a11y Get keyboard interaction docs, ARIA notes, and common pitfalls. Audit your JSX/TSX code for Tailgrids-specific accessibility issues.
- **Theming:** get_tailwind_variants, get_dark_mode_classes, get_theming_guide Inspect every visual variant, dark mode class, and customization path available for a component.

### Resources

Direct URI access to the Tailgrids knowledge base for components, categories, docs, and primitive libraries.

- component://{name} - Full specification for a specific component.
- component://{name}/source - Raw TSX source code for a component.
- component://{name}/examples - All usage examples for a component.
- category://{name} - List all components in a specific category (e.g., core, navigation).
- docs://setup - Step-by-step installation and project setup guide
- docs://theming - Guide on the Tailgrids theming system and design tokens.
- docs://cli - Reference for the Tailgrids CLI commands.
- primitives://{lib} - Deep dives into primitive libraries (react-aria, base-ui, floating-ui).

### Example Prompts

- Generate a hero section with a headline, subtitle, and CTA using Tailgrids
- Search for card components and show me the variants
- Get the pricing table with a monthly and yearly toggle
- Build a settings page with an avatar uploader using Tailgrids
- Audit my layout code for accessibility issues

### Privacy

The server runs locally as a child process. No usage data is sent to Tailgrids servers. All communication remains between your AI agent and the local process via stdin/stdout.

### Quick Links

- [Tailgrids Website](https://tailgrids.com/)
- [Tailgrids Documentation](https://tailgrids.com/docs)
- [Npm Package (@Tailgrids/cli)](https://www.npmjs.com/package/@tailgrids/cli)
- [GitHub Repository](https://github.com/TailGrids/tailgrids.git)
- [Report an Issue](https://github.com/TailGrids/tailgrids/issues)

### License

MIT License, see the [LICENSE](https://github.com/TailGrids/tailgrids/blob/main/LICENSE.md) file for details.
