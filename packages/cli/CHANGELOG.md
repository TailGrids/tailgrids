# @tailgrids/cli

## 1.3.0

### Minor Changes

feat(cli): add framework detection and optionally replace main CSS file during init

- Added automatic detection for Vite and Next.js projects to find the main CSS file during `init`.
- Added a prompt to ask for the main CSS file path if the project framework cannot be automatically determined.
- Added a confirmation step allowing users to replace their existing main CSS file with the selected theme's CSS variables, falling back to creating a `tailgrids.css` file if they decline.
- Updated `tailgrids.config.json` payload to track the project's `framework` and `mainCssFile`.

## 1.2.0

### Minor Changes

- Update css variables for chart styles

## 1.1.3

### Patch Changes

- Incorrect css variable names on CLI initialization template
- Fixes #102

## 1.1.2

### Patch Changes

- fix: `@tailwindcss/forms` not added as dev dependency during project initialization

## 1.1.1

### Patch Changes

- Update avatar component file path in registries.json file

## 1.1.0

### Minor Changes

- Update templates and registry to support the new CSS variable-based theming system and dark mode.

## 1.0.1

### Patch Changes

- Update readme guide and package.json information

## 1.0.0

### Major Changes

- Stable release of @tailgrids/cli

### Minor Changes

- a1a58df: Beta release of @tailgrids/cli package

## 0.2.0-beta.0

### Minor Changes

- Beta release of @tailgrids/cli package

## 0.1.1-alpha

### Patch Changes

- Fixes \_\_dirname not defined error

## 0.1.0-alpha

### Patch Changes

- Use local component registry instead of fetching from a remote URL.
- `add` command uses a local `registries.ts` file to get the list of available components.
- Update file type from 'ui' to 'core' in registry and related files
- Base URL for downloading component source files has been updated to point to the correct location
