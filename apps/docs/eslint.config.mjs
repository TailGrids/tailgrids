import { nextJsConfig } from "@repo/eslint-config/next-js";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  ...nextJsConfig,
  {
    ignores: [".next/**", "out/**", "build/**", ".source/**", "next-env.d.ts"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off"
    }
  }
];

export default eslintConfig;
