import docsConfig from "./apps/docs/eslint.config.mjs";

const docsFiles = ["apps/docs/**/*.{js,mjs,cjs,ts,tsx,jsx}"];

export default docsConfig.map((entry) => {
  if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
    return entry;
  }

  if ("ignores" in entry && Object.keys(entry).length === 1) {
    return entry;
  }

  const settings = entry.settings ?? {};

  return {
    ...entry,
    files: entry.files ?? docsFiles,
    settings: {
      ...settings,
      next: {
        ...(settings.next ?? {}),
        rootDir: "apps/docs"
      }
    }
  };
});
