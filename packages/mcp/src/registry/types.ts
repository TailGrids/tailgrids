export type ComponentTier = "free" | "pro";

export type PrimitiveLib = "react-aria" | "base-ui" | "floating-ui" | "none";

export type ComponentCategory =
  | "core"
  | "forms"
  | "navigation"
  | "overlay"
  | "data-display"
  | "feedback"
  | "layout"
  | "marketing"
  | "dashboard"
  | "ecommerce"
  | "ai";

export type ComponentVariant = {
  name: string;
  description: string;
  tailwindClasses?: string | string[];
};

export type ComponentProp = {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: string;
  description: string;
  fromPrimitive?: PrimitiveLib;
};

export type ComponentExample = {
  title: string;
  description?: string;
  code: string;
};

export type SubComponentMeta = {
  name: string;
  props: ComponentProp[];
};

export type ComponentMeta = {
  name: string; // e.g. "button" — matches the filename without .tsx
  displayName: string; // e.g. "Button"
  category: ComponentCategory;
  tier: ComponentTier;
  description: string;
  sourceFile: string; // relative path from tailgrids-source/ root, e.g. "apps/docs/src/registry/core/button.tsx"
  primitives: PrimitiveLib[];
  variants: ComponentVariant[];
  props: ComponentProp[];
  examples: ComponentExample[];
  a11yNotes: string;
  darkModeSupport: boolean;
  installCommand: string; // e.g. "npx @tailgrids/cli@latest add button"
  tags: string[];
  subComponents?: SubComponentMeta[];
};
