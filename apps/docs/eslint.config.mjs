import { nextJsConfig } from "@repo/eslint-config/next-js";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  ...nextJsConfig,
  {
    ignores: [".next/**", "out/**", "build/**", ".source/**", "next-env.d.ts"]
  }
];

export default eslintConfig;
