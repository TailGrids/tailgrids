# Changelog

All notable changes to the Tailgrids MCP extension are documented here.

## [1.0.0] — 2026-04-15

### Added

- Initial release
- Registers Tailgrids MCP server (`@tailgrids/mcp`) with VS Code
- One-click install from the VS Code Marketplace `@mcp` gallery
- Automatic server discovery — no manual `mcp.json` configuration required
- Isolated build system that prevents monorepo compilation issues
- Complete testing infrastructure with Mocha and VSCode test runner
- Development workflow with debug configurations
- Simplified architecture using remote CLI installation

### Technical Improvements

- Extension compiles independently without triggering monorepo builds
- Robust TypeScript configuration with isolated compilation
- Proper VSCode extension packaging with `--no-dependencies`
- ESLint integration for code quality
- Comprehensive development scripts and testing setup
