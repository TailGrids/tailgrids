import { writeFileSync } from "fs";
import { globSync } from "glob";
import { basename, dirname, join } from "path";
import { Project, SourceFile } from "ts-morph";
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

// Map component filename → known primitives
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

function getExportedSubComponentNames(sourceFile: SourceFile, displayName: string): string[] {
  const names = new Set<string>();

  sourceFile.getExportDeclarations().forEach(decl => {
      decl.getNamedExports().forEach(ne => names.add(ne.getName()));
  });

  sourceFile.getVariableDeclarations().forEach(vd => {
      if (vd.isExported()) names.add(vd.getName());
  });

  sourceFile.getFunctions().forEach(fn => {
      if (fn.isExported() && fn.getName()) names.add(fn.getName()!);
  });
  
  return [...names].filter(n => n.startsWith(displayName) && n !== displayName && /^[A-Z]/.test(n));
}

function extractPropsForName(sourceFile: SourceFile, name: string): string[] {
  let propsContainers: any[] = sourceFile.getInterfaces().filter(i => i.getName() === `${name}Props`);
  
  if (propsContainers.length === 0) {
    propsContainers = sourceFile.getTypeAliases().filter(t => t.getName() === `${name}Props`);
  }

  // Fallback
  if (propsContainers.length === 0) {
    const allPropsInterfaces = sourceFile.getInterfaces().filter(i => i.getName().endsWith('Props'));
    const allPropsTypes = sourceFile.getTypeAliases().filter(t => t.getName().endsWith('Props') || t.getName().includes('PropsType'));
    const all = [...allPropsInterfaces, ...allPropsTypes];
    if (all.length === 1) {
      propsContainers = all;
    }
  }

  const props: string[] = [];
  const seen = new Set<string>();

  for (const container of propsContainers) {
    let properties: any[] = [];
    if (container.getKindName() === 'InterfaceDeclaration') {
         properties = container.getProperties();
    } else if (container.getKindName() === 'TypeAliasDeclaration') {
         const typeNode = container.getTypeNode();
         if (typeNode && typeNode.getKindName() === 'TypeLiteral') {
              properties = typeNode.getProperties();
         } else if (typeNode && typeNode.getKindName() === 'IntersectionType') {
              typeNode.getTypeNodes().forEach((n: any) => {
                  if (n.getKindName() === 'TypeLiteral') {
                      properties.push(...n.getProperties());
                  }
              });
         }
    }

    for (const prop of properties) {
      const propName = prop.getName();
      if (seen.has(propName)) continue;
      seen.add(propName);

      const propType = prop.getTypeNode ? (prop.getTypeNode()?.getText() ?? "unknown") : "unknown";
      const isRequired = prop.hasQuestionToken ? !prop.hasQuestionToken() : true;
      const jsDoc = prop.getJsDocs ? prop.getJsDocs().map((d: any) => d.getComment()).join(" ").trim() : "";

      props.push(`    {
      name: ${JSON.stringify(propName)},
      type: ${JSON.stringify(propType)},
      required: ${isRequired},
      description: ${JSON.stringify(jsDoc || `TODO: describe ${propName}`)},
    }`);
    }
  }
  return props;
}

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

  if (fileName === "index" || fileName.startsWith("_")) continue;

  const relativeSourceFile = filePath.replace(COMPONENT_DIR + "/", "");
  const componentName = fileName;
  const displayName = toPascalCase(componentName);
  const varName = `${componentName.replace(/-/g, "_")}Meta`;
  exportNames.push(varName);

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

  const primaryProps = extractPropsForName(sourceFile, displayName);
  const subComponentNames = getExportedSubComponentNames(sourceFile, displayName);
  const subComponents = subComponentNames
    .map(name => ({ name, props: extractPropsForName(sourceFile, name) }))
    .filter(s => s.props.length > 0);

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
${primaryProps.join(",\n")}
  ],
  subComponents: ${subComponents.length > 0 ? `[
${subComponents.map(s => `    {
      name: ${JSON.stringify(s.name)},
      props: [
${s.props.join(",\n")}
      ]
    }`).join(',\n')}
  ]` : 'undefined'},
  examples: [
    {
      title: "Basic usage",
      code: \`import { ${displayName} } from "@/components/core/${componentName}";\\n\\n<${displayName}>TODO: add example</${displayName}>\`,
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
