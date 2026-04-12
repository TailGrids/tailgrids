import { writeFileSync } from "fs";
import { globSync } from "glob";
import { basename, dirname, join } from "path";
import { Project } from "ts-morph";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const COMPONENT_DIR = join(__dirname, "../../..");
const OUTPUT_FILE = join(__dirname, "../src/registry/components.generated.ts");

// Map import source → PrimitiveLib
const PRIMITIVE_IMPORT_MAP: Record<string, string> = {
  "react-aria-components": "react-aria",
  "@react-aria": "react-aria",
  "@react-stately": "react-aria",
  "@base-ui-components/react": "base-ui",
  "@floating-ui/react": "floating-ui",
  "@floating-ui/react-dom": "floating-ui"
};

// Map component filename → category
const CATEGORY_MAP: Record<string, string> = {
  accordion: "core",
  alert: "feedback",
  "alert-dialog": "overlay",
  "aspect-ratio": "layout",
  avatar: "data-display",
  badge: "data-display",
  breadcrumbs: "navigation",
  button: "core",
  "button-group": "core",
  card: "data-display",
  carousel: "core",
  chart: "dashboard",
  checkbox: "forms",
  collapsible: "core",
  combobox: "forms",
  command: "overlay",
  "context-menu": "overlay",
  "date-picker": "forms",
  dialog: "overlay",
  drawer: "overlay",
  dropdown: "overlay",
  field: "forms",
  "hover-card": "overlay",
  input: "forms",
  "input-group": "forms",
  label: "forms",
  link: "navigation",
  list: "data-display",
  menubar: "navigation",
  "native-select": "forms",
  "navigation-menu": "navigation",
  "otp-input": "forms",
  pagination: "navigation",
  popover: "overlay",
  progress: "feedback",
  "radio-input": "forms",
  resizable: "layout",
  "scroll-area": "layout",
  select: "forms",
  separator: "layout",
  sheet: "overlay",
  sidebar: "navigation",
  skeleton: "feedback",
  slider: "forms",
  "social-button": "core",
  spinner: "feedback",
  table: "data-display",
  tabs: "navigation",
  "text-area": "forms",
  "time-picker": "forms",
  toast: "feedback",
  toggle: "core",
  tooltip: "overlay"
};

// Map component filename → known primitives (supplement what we detect from imports)
const KNOWN_PRIMITIVES: Record<string, string[]> = {
  button: ["react-aria"],
  checkbox: ["react-aria"],
  combobox: ["react-aria"],
  "date-picker": ["react-aria"],
  dialog: ["react-aria"],
  dropdown: ["react-aria", "floating-ui"],
  input: ["react-aria"],
  menubar: ["react-aria"],
  "navigation-menu": ["react-aria"],
  popover: ["base-ui", "floating-ui"],
  progress: ["base-ui"],
  "radio-input": ["react-aria"],
  select: ["react-aria"],
  slider: ["react-aria"],
  tabs: ["react-aria"],
  "time-picker": ["react-aria"],
  toast: ["react-aria"],
  tooltip: ["base-ui", "floating-ui"],
  "context-menu": ["react-aria", "floating-ui"],
  "hover-card": ["base-ui", "floating-ui"],
  "otp-input": ["react-aria"],
  "alert-dialog": ["react-aria"],
  drawer: ["react-aria"],
  sheet: ["react-aria"]
};

function toPascalCase(kebab: string): string {
  return kebab
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

function toKebabCase(name: string): string {
  return name
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "");
}

// Find all component source files
const componentFiles = globSync(
  `${COMPONENT_DIR}/apps/docs/src/registry/core/**/*.tsx`
);

const project = new Project({ skipAddingFilesFromTsConfig: true });
componentFiles.forEach(f => project.addSourceFileAtPath(f));

const entries: string[] = [];
const exportNames: string[] = [];

for (const sourceFile of project.getSourceFiles()) {
  const filePath = sourceFile.getFilePath();
  const fileName = basename(filePath, ".tsx");

  // Skip index files and non-component files
  if (fileName === "index" || fileName.startsWith("_")) continue;

  const relativeSourceFile = filePath.replace(COMPONENT_DIR + "/", "");
  const componentName = fileName;
  const displayName = toPascalCase(componentName);
  const varName = `${componentName.replace(/-/g, "_")}Meta`;
  exportNames.push(varName);

  // --- Detect primitives from imports ---
  const detectedPrimitives = new Set<string>(
    KNOWN_PRIMITIVES[componentName] ?? []
  );
  sourceFile.getImportDeclarations().forEach(imp => {
    const moduleSpec = imp.getModuleSpecifierValue();
    for (const [pattern, primitive] of Object.entries(PRIMITIVE_IMPORT_MAP)) {
      if (moduleSpec.startsWith(pattern)) {
        detectedPrimitives.add(primitive);
      }
    }
  });
  const primitives =
    detectedPrimitives.size > 0 ? [...detectedPrimitives] : ["none"];

  // --- Extract prop interfaces ---
  const propInterfaces = sourceFile
    .getInterfaces()
    .filter(i => i.getName().endsWith("Props"));

  const props: string[] = [];
  for (const iface of propInterfaces) {
    for (const prop of iface.getProperties()) {
      const propName = prop.getName();
      const propType = prop.getTypeNode()?.getText() ?? "unknown";
      const isRequired = !prop.hasQuestionToken();
      const jsDoc = prop
        .getJsDocs()
        .map(d => d.getComment())
        .join(" ")
        .trim();

      props.push(`    {
      name: ${JSON.stringify(propName)},
      type: ${JSON.stringify(propType)},
      required: ${isRequired},
      description: ${JSON.stringify(jsDoc || `TODO: describe ${propName}`)},
    }`);
    }
  }

  const category = CATEGORY_MAP[componentName] ?? "core";
  const installCmd = `npx @tailgrids/cli@latest add ${componentName}`;

  const entry = `
export const ${varName}: ComponentMeta = {
  name: ${JSON.stringify(componentName)},
  displayName: ${JSON.stringify(displayName)},
  category: ${JSON.stringify(category)},
  tier: "free",
  description: "TODO: Write a description for ${displayName}.",
  sourceFile: ${JSON.stringify(relativeSourceFile)},
  primitives: ${JSON.stringify(primitives)},
  variants: [
    // TODO: List variants from the source (look for cva() or className maps)
  ],
  props: [
${props.join(",\n")}
  ],
  examples: [
    {
      title: "Basic usage",
      code: \`import { ${displayName} } from "@/components/core/${componentName}";\n\n<${displayName}>TODO: add example</${displayName}>\`,
    },
  ],
  a11yNotes: "TODO: Write accessibility notes for ${displayName}.",
  darkModeSupport: true,
  installCommand: ${JSON.stringify(installCmd)},
  tags: [], // TODO: add relevant tags
};`;

  entries.push(entry);
}

const output = `// AUTO-GENERATED by scripts/generate-registry.ts
// Do NOT edit this file manually.
// After generation, copy entries into src/registry/components.ts and fill in the TODOs.

import type { ComponentMeta } from "./types.js";
${entries.join("\n")}

export const allComponents: ComponentMeta[] = [
  ${exportNames.join(",\n  ")},
];
`;

writeFileSync(OUTPUT_FILE, output, "utf-8");
console.log(`Generated ${entries.length} component entries → ${OUTPUT_FILE}`);
