# Contributing to TailGrids

Thank you for your interest in contributing to TailGrids.
This guide will help you get started with the contribution process.

## Project Structure

The TailGrids monorepo is organized as follows:

- `/apps/docs/content` - Documentation website
- `/apps/docs/src/registry/core` - Core components by Tailgrids
- `/apps/docs/src/components` - All components for the website
- `/apps/docs/src/components/preview` - All presentational components
- `/packages/cli` - Command-line interface tools
- `/packages/icons` - Icon library
- `/packages/eslint-config` - Shared ESLint configuration
- `/packages/typescript-config` - Shared TypeScript configuration

## Development Guidelines

When contributing to TailGrids:

- Keep changes focused.
  Large PRs are harder to review and unlikely to be accepted.
  We recommend opening an issue and discussing it with us first.
- Ensure all code is type-safe and takes full advantage of TypeScript features.
- Write clear, self-explanatory code.
  Use comments only when truly necessary.
- Follow the existing code style and conventions.
- We aim for stability, so avoid changes that would require users to run a migration or update their config.

## Getting Started

Before getting started, make sure you have Node.js installed in your machine. We use `npm` as our package manager (which already comes with Node.js's default installation). You can find the installation guide [here](https://nodejs.org/en/download) (LTS version recommended).

1. Find or open an [issue](https://github.com/TailGrids/tailgrids/issues) that you are interested in addressing or a feature that you would like to add.

2. Fork the repository to your GitHub account.

3. Clone your fork locally:

   ```bash
   git clone https://github.com/your-username/tailgrids.git
   cd tailgrids
   ```

4. Install project dependencies:

   ```bash
   npm install
   ```

5. Create a `.env` file from the example:
   - On Unix-based systems:
     ```bash
     cp -n ./apps/docs/.env.example ./apps/docs/.env
     ```
   - On Windows:
     ```batch
     copy /Y .\apps\docs\.env.example .\apps\docs\.env
     ```

   After creating the `.env` file, fill in the required values.

6. Build the project:

   Internally we use all the icons locally from `packages/icons` which is exposed as `@tailgrids/icons`. So it is crucial to build the project before running the documentation locally.

   ```bash
   npm run build
   ```

7. Run the project locally:

   ```bash
   npm run dev
   ```

## Code Formatting

We use [Prettier](https://prettier.io/) for code formatting and linting.
Before committing, please ensure your code is properly formatted:

```bash
# Format all code
npm run format

# Check for linting issues
npm run lint
```

## Development Workflow

1. Create a new branch for your changes:

   Follow the [Conventional Branch](https://conventional-branch.github.io/) naming convention to name your branch.

   ```bash
   git checkout -b type/description
   # Example: git checkout -b feat/combobox
   ```

2. Make your changes following the code style guidelines

3. Commit your changes with a descriptive message following the [Conventional Commits](https://www.conventionalcommits.org) specification:

   For new components or features, use the `fix` or `feat` format with a specific scope:

   ```text
   fix(select): multi select is not working.

   feat(cli): add support for new component generation.
   ```

   For documentation changes, use `docs`:

   ```bash
   docs: fix typos in README

   # To be more specific
   docs(installation): improve installation explanation
   ```

   For changes that refactor or don’t change the functionality of the library or
   docs, use `chore`:

   ```bash
   chore(refactor): reorganize package exports

   chore: update dependencies to latest versions
   ```

   Each commit message should be clear and descriptive, explaining what the
   change does.
   For features and fixes, include context about what was added or resolved.

4. Push your branch to your fork

5. Open a pull request against the **main** branch. In your PR description:
   - Clearly describe what changes you made and why
   - Include any relevant context or background
   - List any breaking changes or deprecations
   - Add screenshots for UI changes
   - Reference related issues or discussions

6. Title the pull request with a short description of the changes made and the issue or bug number associated with your change. For example, you can title an issue like so "feat(cli): add support for new component generation to resolve #2201".

7. In the description of the pull request, explain the changes that you made, any issues you think exist with the pull request you made, and any questions you have for the maintainer. It's OK if your pull request is not perfect (no pull request is), the reviewer will be able to help you fix any problems and improve it!

8. Once you have submitted your pull request, you can expect a response from a maintainer within a few business days. If you do not hear back within a week, it is acceptable to send a friendly follow-up message.

9. If your pull request is not accepted, we will explain the reasons and suggest improvements. You can then make the suggested changes and resubmit your pull request.

10. Celebrate your success after your pull request is merged! 🎉 🎉

## Pull Request Process

1. Before creating a PR, create a issue and discuss with us
2. Reference any related issues in your PR description
3. Ensure all tests pass and the build is successful
4. Update documentation as needed
5. Keep your PR focused on a single feature or bug fix
6. Be responsive to code review feedback.

## Code Style

- Follow the existing code style
- Use TypeScript types and interfaces effectively
- Keep functions small and focused
- Use meaningful variable and function names
- Add comments for complex logic
- Follow the formatting rules
