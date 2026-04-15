import type { ComponentMeta } from "./types.js";

export const accordionMeta: ComponentMeta = {
  name: "accordion",
  displayName: "Accordion",
  category: "core",
  tier: "free",
  description:
    "A vertically stacked list of expandable sections. Use it to organize related content and reduce visual clutter.",
  sourceFile: "apps/docs/src/registry/core/accordion.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "variant",
      description: "The visual style variant.",
      tailwindClasses: [
        "style_one",
        "style_two",
        "style_three",
        "style_four",
        "style_five"
      ]
    }
  ],
  props: [],
  subComponents: [
    {
      name: "AccordionRoot",
      props: [
        {
          name: "className",
          type: "string",
          required: false,
          description: "Additional CSS classes to apply to the component"
        },
        {
          name: "children",
          type: "React.ReactNode",
          required: true,
          description: "The content to display inside the component"
        },
        {
          name: "variant",
          type: "Variant",
          required: false,
          description: "Controls the visual style of the component"
        }
      ]
    },
    {
      name: "AccordionItem",
      props: [
        {
          name: "children",
          type: "React.ReactNode",
          required: true,
          description: "The children property"
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "The className property"
        }
      ]
    },
    {
      name: "AccordionTrigger",
      props: [
        {
          name: "children",
          type: "React.ReactNode",
          required: true,
          description: "The children property"
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "The className property"
        }
      ]
    },
    {
      name: "AccordionContent",
      props: [
        {
          name: "children",
          type: "React.ReactNode",
          required: true,
          description: "The children property"
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "The className property"
        }
      ]
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/core/accordion";\n\n<Accordion>\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Is it accessible?</AccordionTrigger>\n    <AccordionContent>Yes.</AccordionContent>\n  </AccordionItem>\n</Accordion>'
    }
  ],
  a11yNotes:
    "Ensure proper semantic HTML structure and keyboard navigation support. Always provide appropriate ARIA labels and roles where needed.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add accordion",
  tags: ["interactive", "disclosure", "content"]
};

export const alert_dialogMeta: ComponentMeta = {
  name: "alert-dialog",
  displayName: "AlertDialog",
  category: "overlay",
  tier: "free",
  description:
    "A modal dialog that interrupts the user with important content and expects a response.",
  sourceFile: "apps/docs/src/registry/core/alert-dialog.tsx",
  primitives: ["react-aria"],
  variants: [],
  props: [
    {
      name: "overlayClassName",
      type: "string",
      required: false,
      description: "Optional CSS classes for the overlay."
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional CSS classes to apply."
    }
  ],
  subComponents: [
    {
      name: "AlertDialogContent",
      props: [
        {
          name: "overlayClassName",
          type: "string",
          required: false,
          description: "The overlayClassName property"
        }
      ]
    },
    {
      name: "AlertDialogTitle",
      props: [
        {
          name: "className",
          type: "string",
          required: false,
          description: "The className property"
        }
      ]
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/core/alert-dialog";\nimport { Button } from "@/components/core/button";\nimport { DialogTrigger } from "react-aria-components";\n\n<DialogTrigger>\n  <Button>Delete</Button>\n  <AlertDialog>\n    <AlertDialogContent>\n      <AlertDialogHeader>\n        <AlertDialogTitle>Are you sure?</AlertDialogTitle>\n        <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>\n      </AlertDialogHeader>\n      <AlertDialogFooter>\n        <AlertDialogCancel>Cancel</AlertDialogCancel>\n        <AlertDialogAction>Delete</AlertDialogAction>\n      </AlertDialogFooter>\n    </AlertDialogContent>\n  </AlertDialog>\n</DialogTrigger>'
    }
  ],
  a11yNotes:
    "Powered by react-aria. Manages focus and traps tab navigation automatically.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add alert-dialog",
  tags: ["overlay", "modal", "feedback"]
};

export const alertMeta: ComponentMeta = {
  name: "alert",
  displayName: "Alert",
  category: "feedback",
  tier: "free",
  description:
    "A prominent message container. Use it to display important information or warnings.",
  sourceFile: "apps/docs/src/registry/core/alert.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "variant",
      description: "The severity/color of the alert.",
      tailwindClasses: ["success", "warning", "danger", "info", "gray"]
    }
  ],
  props: [
    {
      name: "title",
      type: "string",
      required: false,
      description: "The title text"
    },
    {
      name: "message",
      type: "string",
      required: true,
      description: "The message property"
    },
    {
      name: "variant",
      type: '"success" | "danger" | "info" | "warning" | "gray"',
      required: false,
      description: "The variant property"
    },
    {
      name: "icon",
      type: "React.ReactNode",
      required: false,
      description: "The icon to display"
    },
    {
      name: "actions",
      type: "{\n    primary?: {\n      label: string;\n      onClick: () => void;\n    };\n    secondary?: {\n      label: string;\n    };\n  }",
      required: false,
      description: "The actions property"
    },
    {
      name: "open",
      type: "boolean",
      required: false,
      description: "Controls whether the element is open"
    },
    {
      name: "onClose",
      type: "() => void",
      required: false,
      description: "Called when the element closes"
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Alert, AlertTitle, AlertDescription } from "@/components/core/alert";\n\n<Alert variant="info">\n  <AlertTitle>Heads up!</AlertTitle>\n  <AlertDescription>You can add your own content here.</AlertDescription>\n</Alert>'
    }
  ],
  a11yNotes:
    "Ensure proper semantic HTML structure and keyboard navigation support. Always provide appropriate ARIA labels and roles where needed.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add alert",
  tags: ["feedback", "banner", "status"]
};

export const aspect_ratioMeta: ComponentMeta = {
  name: "aspect-ratio",
  displayName: "AspectRatio",
  category: "layout",
  tier: "free",
  description:
    "A container maintaining fixed aspect ratio. Use it to prevent layout shift.",
  sourceFile: "apps/docs/src/registry/core/aspect-ratio.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "ratio",
      description: "The aspect ratio to constrain content to.",
      tailwindClasses: [
        "square",
        "video",
        "4/3",
        "3/4",
        "21/9",
        "9/16",
        "3/2",
        "2/3"
      ]
    }
  ],
  props: [
    {
      name: "customRatio",
      type: "number",
      required: false,
      description: "The customRatio property"
    },
    {
      name: "children",
      type: "React.ReactNode",
      required: true,
      description: "The children property"
    }
  ],
  subComponents: undefined,
  examples: [
    {
      title: "Basic usage",
      code: 'import { AspectRatio } from "@/components/core/aspect-ratio";\n\n<AspectRatio ratio="16/9">\n  <img src="/placeholder.jpg" alt="Image" className="object-cover" />\n</AspectRatio>'
    }
  ],
  a11yNotes:
    "Primarily a visual layout utility. Ensure inner content remains accessible.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add aspect-ratio",
  tags: ["layout", "media", "image"]
};

export const avatarMeta: ComponentMeta = {
  name: "avatar",
  displayName: "Avatar",
  category: "data-display",
  tier: "free",
  description: "An image element with a fallback for representing the user.",
  sourceFile: "apps/docs/src/registry/core/avatar.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "size",
      description: "The size of the avatar.",
      tailwindClasses: ["xs", "sm", "md", "lg", "xl", "xxl"]
    },
    {
      name: "status",
      description: "The online status indicator.",
      tailwindClasses: ["online", "offline", "busy"]
    }
  ],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Avatar } from "@/components/core/avatar";\n\n<Avatar size="md" status="online" src="/avatar.jpg" alt="@user" />'
    }
  ],
  a11yNotes:
    "Always provide an alt prop for screen readers if the image conveys meaning.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add avatar",
  tags: ["data-display", "user", "image"]
};

export const badgeMeta: ComponentMeta = {
  name: "badge",
  displayName: "Badge",
  category: "data-display",
  tier: "free",
  description: "A small visual indicator for categorization or status.",
  sourceFile: "apps/docs/src/registry/core/badge.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "size",
      description: "The size of the badge.",
      tailwindClasses: ["sm", "md", "lg"]
    },
    {
      name: "color",
      description: "The color theme.",
      tailwindClasses: [
        "gray",
        "primary",
        "error",
        "warning",
        "success",
        "cyan",
        "sky",
        "blue",
        "violet",
        "purple",
        "pink",
        "rose",
        "orange"
      ]
    }
  ],
  props: [
    {
      name: "prefixIcon",
      type: "React.ReactNode",
      required: false,
      description: "Icon or element to display before the main content"
    },
    {
      name: "suffixIcon",
      type: "React.ReactNode",
      required: false,
      description: "Icon or element to display after the main content"
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Badge } from "@/components/core/badge";\n\n<Badge color="primary" size="sm">New</Badge>'
    }
  ],
  a11yNotes:
    "Purely visual component. Ensure color is not the only means of conveying status to users.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add badge",
  tags: ["data-display", "status", "indicator"]
};

export const breadcrumbsMeta: ComponentMeta = {
  name: "breadcrumbs",
  displayName: "Breadcrumbs",
  category: "navigation",
  tier: "free",
  description:
    "Displays the path to the current resource using a hierarchy of links.",
  sourceFile: "apps/docs/src/registry/core/breadcrumbs.tsx",
  primitives: ["none"],
  variants: [],
  props: [
    {
      name: "items",
      type: "{\n    href: string;\n    label: string;\n    icon?: React.ReactNode;\n  }[]",
      required: true,
      description: "The items property"
    },
    {
      name: "dividerType",
      type: '"slash" | "chevron" | "dot"',
      required: false,
      description: "The dividerType property"
    },
    {
      name: "activeHref",
      type: "string",
      required: false,
      description: "The activeHref property"
    }
  ],
  subComponents: undefined,
  examples: [
    {
      title: "Basic usage",
      code: 'import { Breadcrumbs, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/core/breadcrumbs";\n\n<Breadcrumbs>\n  <BreadcrumbItem>\n    <BreadcrumbLink href="/">Home</BreadcrumbLink>\n  </BreadcrumbItem>\n  <BreadcrumbSeparator />\n  <BreadcrumbItem>\n    <BreadcrumbLink href="/components">Components</BreadcrumbLink>\n  </BreadcrumbItem>\n</Breadcrumbs>'
    }
  ],
  a11yNotes:
    "Should be wrapped in a navigation region with an aria-label like 'Breadcrumb'.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add breadcrumbs",
  tags: ["navigation", "hierarchy"]
};

export const button_groupMeta: ComponentMeta = {
  name: "button-group",
  displayName: "ButtonGroup",
  category: "core",
  tier: "free",
  description:
    "Related buttons displayed together. Use it for organizing actions.",
  sourceFile: "apps/docs/src/registry/core/button-group.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "variant",
      description: "The style of the group.",
      tailwindClasses: ["primary", "secondary"]
    },
    {
      name: "size",
      description: "The size of the buttons.",
      tailwindClasses: ["sm", "md", "lg"]
    }
  ],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { ButtonGroup } from "@/components/core/button-group";\nimport { Button } from "@/components/core/button";\n\n<ButtonGroup variant="primary">\n  <Button>One</Button>\n  <Button>Two</Button>\n  <Button>Three</Button>\n</ButtonGroup>'
    }
  ],
  a11yNotes:
    "Can use role='group' and an aria-label to describe the group's purpose.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add button-group",
  tags: ["core", "interactive", "group"]
};

export const buttonMeta: ComponentMeta = {
  name: "button",
  displayName: "Button",
  category: "core",
  tier: "free",
  description:
    "Triggers an action or event, such as submitting a form or displaying a dialog.",
  sourceFile: "apps/docs/src/registry/core/button.tsx",
  primitives: ["react-aria"],
  variants: [
    {
      name: "variant",
      description: "The semantic style flavor.",
      tailwindClasses: ["primary", "danger", "success", "ghost"]
    },
    {
      name: "appearance",
      description: "The fill aspect.",
      tailwindClasses: ["fill", "outline"]
    },
    {
      name: "size",
      description: "The size of the button.",
      tailwindClasses: ["xs", "sm", "md", "lg"]
    }
  ],
  props: [
    {
      name: "variant",
      type: '"primary" | "danger" | "success" | "ghost"',
      required: false,
      description: "The variant property"
    },
    {
      name: "appearance",
      type: '"fill" | "outline"',
      required: false,
      description: "Controls the appearance style of the component"
    },
    {
      name: "iconOnly",
      type: "boolean",
      required: false,
      description: "The iconOnly property"
    },
    {
      name: "size",
      type: '"xs" | "sm" | "md" | "lg"',
      required: false,
      description: "Controls the size of the component"
    }
  ],
  subComponents: undefined,
  examples: [
    {
      title: "Basic usage",
      code: 'import { Button } from "@/components/core/button";\n\n<Button variant="primary" appearance="fill">Click me</Button>'
    }
  ],
  a11yNotes:
    "Automatically handles disabled states. Uses react-aria-components Button under the hood for robust interaction behavior.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add button",
  tags: ["core", "interactive", "trigger"]
};

export const cardMeta: ComponentMeta = {
  name: "card",
  displayName: "Card",
  category: "data-display",
  tier: "free",
  description: "A container that groups related content and actions.",
  sourceFile: "apps/docs/src/registry/core/card.tsx",
  primitives: ["none"],
  variants: [],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/core/card";\n\n<Card>\n  <CardHeader>\n    <CardTitle>Card Title</CardTitle>\n    <CardDescription>Card description</CardDescription>\n  </CardHeader>\n  <CardContent>Content</CardContent>\n</Card>'
    }
  ],
  a11yNotes:
    "A purely visual container. Use appropriate heading levels inside.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add card",
  tags: ["data-display", "container", "layout"]
};

export const carouselMeta: ComponentMeta = {
  name: "carousel",
  displayName: "Carousel",
  category: "core",
  tier: "free",
  description:
    "A slideshow component for cycling through elements like images or text.",
  sourceFile: "apps/docs/src/registry/core/carousel.tsx",
  primitives: ["none"],
  variants: [],
  props: [
    {
      name: "opts",
      type: "CarouselOptions",
      required: false,
      description: "The opts property"
    },
    {
      name: "plugins",
      type: "CarouselPlugin",
      required: false,
      description: "The plugins property"
    },
    {
      name: "orientation",
      type: '"horizontal" | "vertical"',
      required: false,
      description: "The orientation property"
    },
    {
      name: "setApi",
      type: "(api: CarouselApi) => void",
      required: false,
      description: "The setApi property"
    }
  ],
  subComponents: undefined,
  examples: [
    {
      title: "Basic usage",
      code: 'import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/core/carousel";\n\n<Carousel>\n  <CarouselContent>\n    <CarouselItem>Slide 1</CarouselItem>\n    <CarouselItem>Slide 2</CarouselItem>\n  </CarouselContent>\n  <CarouselPrevious />\n  <CarouselNext />\n</Carousel>'
    }
  ],
  a11yNotes:
    "Requires careful handling of aria-live regions and focus management for controls.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add carousel",
  tags: ["data-display", "gallery", "media"]
};

export const chartMeta: ComponentMeta = {
  name: "chart",
  displayName: "Chart",
  category: "dashboard",
  tier: "free",
  description: "Visualizes data using responsive and customizable charts.",
  sourceFile: "apps/docs/src/registry/core/chart.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "indicator",
      description: "The style of the indicator in tooltips and legends.",
      tailwindClasses: ["dot", "line", "square"]
    }
  ],
  props: [
    {
      name: "hideLabel",
      type: "boolean",
      required: false,
      description: "Whether to visually hide the label."
    },
    {
      name: "hideIndicator",
      type: "boolean",
      required: false,
      description: "Whether to visually hide the indicator."
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional CSS classes to apply."
    }
  ],
  subComponents: [
    {
      name: "ChartTooltipContent",
      props: [
        {
          name: "hideLabel",
          type: "boolean",
          required: false,
          description: "The hideLabel property"
        },
        {
          name: "hideIndicator",
          type: "boolean",
          required: false,
          description: "The hideIndicator property"
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "The className property"
        }
      ]
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Chart, ChartContainer, ChartTooltip } from "@/components/core/chart";\nimport { BarChart, Bar } from "recharts";\n\n<ChartContainer config={{}}>\n  <BarChart data={[]}>\n    <Bar dataKey="value" />\n    <ChartTooltip />\n  </BarChart>\n</ChartContainer>'
    }
  ],
  a11yNotes:
    "Provide alternative text representations or data tables for screen reader users, as Canvas/SVG charts are not inherently accessible.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add chart",
  tags: ["dashboard", "data-visualization", "metrics"]
};

export const checkboxMeta: ComponentMeta = {
  name: "checkbox",
  displayName: "Checkbox",
  category: "forms",
  tier: "free",
  description:
    "A control that allows the user to toggle between checked and not checked.",
  sourceFile: "apps/docs/src/registry/core/checkbox.tsx",
  primitives: ["react-aria"],
  variants: [
    {
      name: "size",
      description: "The size of the checkbox.",
      tailwindClasses: ["sm", "md"]
    }
  ],
  props: [
    {
      name: "label",
      type: "string",
      required: false,
      description: "The label text displayed for the component"
    }
  ],
  subComponents: undefined,
  examples: [
    {
      title: "Basic usage",
      code: 'import { Checkbox } from "@/components/core/checkbox";\n\n<Checkbox size="sm">Accept terms and conditions</Checkbox>'
    }
  ],
  a11yNotes:
    "Backed by react-aria. Includes built-in support for indeterminate state and keyboard interactions.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add checkbox",
  tags: ["forms", "input", "interactive"]
};

export const collapsibleMeta: ComponentMeta = {
  name: "collapsible",
  displayName: "Collapsible",
  category: "core",
  tier: "free",
  description: "An interactive component that expands and collapses content.",
  sourceFile: "apps/docs/src/registry/core/collapsible.tsx",
  primitives: ["react-aria"],
  variants: [],
  props: [
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional CSS classes to apply."
    },
    {
      name: "level",
      type: 'HeadingProps["level"]',
      required: false,
      description: "The heading level (e.g., 1, 2, 3)."
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional CSS classes to apply."
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional CSS classes to apply."
    }
  ],
  subComponents: [
    {
      name: "CollapsibleTrigger",
      props: [
        {
          name: "level",
          type: 'HeadingProps["level"]',
          required: false,
          description: "The level property"
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "The className property"
        }
      ]
    },
    {
      name: "CollapsibleContent",
      props: [
        {
          name: "className",
          type: "string",
          required: false,
          description: "The className property"
        }
      ]
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/core/collapsible";\n\n<Collapsible>\n  <CollapsibleTrigger>Toggle</CollapsibleTrigger>\n  <CollapsibleContent>Content</CollapsibleContent>\n</Collapsible>'
    }
  ],
  a11yNotes:
    "Uses react-aria to manage aria-expanded and aria-controls automatically.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add collapsible",
  tags: ["core", "interactive", "disclosure"]
};

export const commandMeta: ComponentMeta = {
  name: "command",
  displayName: "Command",
  category: "overlay",
  tier: "free",
  description:
    "A composable, unstyled command menu (combobox) with a searchable list of items.",
  sourceFile: "apps/docs/src/registry/core/command.tsx",
  primitives: ["react-aria"],
  variants: [],
  props: [
    {
      name: "children",
      type: "ReactNode",
      required: true,
      description: "The content elements."
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional CSS classes to apply."
    },
    {
      name: "isOpen",
      type: "boolean",
      required: true,
      description: "Whether the component is open."
    },
    {
      name: "onOpenChange",
      type: "(isOpen: boolean) => void",
      required: true,
      description: "Event handler called when the open state changes."
    },
    {
      name: "placeholder",
      type: "string",
      required: false,
      description: "The placeholder text."
    },
    {
      name: "heading",
      type: "React.ReactNode",
      required: false,
      description: "The heading content."
    }
  ],
  subComponents: [
    {
      name: "CommandDialog",
      props: [
        {
          name: "isOpen",
          type: "boolean",
          required: true,
          description: "Controls whether the component is open or closed"
        },
        {
          name: "onOpenChange",
          type: "(isOpen: boolean) => void",
          required: true,
          description: "Called when the open state changes"
        }
      ]
    },
    {
      name: "CommandInput",
      props: [
        {
          name: "placeholder",
          type: "string",
          required: false,
          description: "Placeholder text shown when the input is empty"
        }
      ]
    },
    {
      name: "CommandGroup",
      props: [
        {
          name: "heading",
          type: "React.ReactNode",
          required: false,
          description: "The heading property"
        }
      ]
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Command, CommandInput, CommandList, CommandItem } from "@/components/core/command";\n\n<Command>\n  <CommandInput placeholder="Type a command..." />\n  <CommandList>\n    <CommandItem>Profile</CommandItem>\n    <CommandItem>Settings</CommandItem>\n  </CommandList>\n</Command>'
    }
  ],
  a11yNotes: "Powered by react-aria. Provides combobox pattern accessibility.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add command",
  tags: ["overlay", "search", "navigation"]
};

export const context_menuMeta: ComponentMeta = {
  name: "context-menu",
  displayName: "ContextMenu",
  category: "overlay",
  tier: "free",
  description:
    "Displays a menu to the user, triggered by a right-click or long press.",
  sourceFile: "apps/docs/src/registry/core/context-menu.tsx",
  primitives: ["react-aria", "floating-ui"],
  variants: [],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/core/context-menu";\n\n<ContextMenu>\n  <ContextMenuTrigger>Right click me</ContextMenuTrigger>\n  <ContextMenuContent>\n    <ContextMenuItem>Action 1</ContextMenuItem>\n  </ContextMenuContent>\n</ContextMenu>'
    }
  ],
  a11yNotes:
    "Implemented with base-ui and floating-ui for focus management and menu keyboard interactions.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add context-menu",
  tags: ["overlay", "interactive", "menu"]
};

export const dialogMeta: ComponentMeta = {
  name: "dialog",
  displayName: "Dialog",
  category: "overlay",
  tier: "free",
  description:
    "A window overlaid on either the primary window or another dialog window.",
  sourceFile: "apps/docs/src/registry/core/dialog.tsx",
  primitives: ["react-aria"],
  variants: [],
  props: [
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional CSS classes to apply."
    },
    {
      name: "modalProps",
      type: "ComponentProps<typeof Modal>",
      required: false,
      description: "Additional props to pass to the modal."
    },
    {
      name: "showCloseButton",
      type: "boolean",
      required: false,
      description: "Whether to show a close button."
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional CSS classes to apply."
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional CSS classes to apply."
    },
    {
      name: "showCloseButton",
      type: "boolean",
      required: false,
      description: "Whether to show a close button."
    }
  ],
  subComponents: [
    {
      name: "DialogOverlay",
      props: [
        {
          name: "className",
          type: "string",
          required: false,
          description: "The className property"
        }
      ]
    },
    {
      name: "DialogContent",
      props: [
        {
          name: "modalProps",
          type: "ComponentProps<typeof Modal>",
          required: false,
          description: "The modalProps property"
        },
        {
          name: "showCloseButton",
          type: "boolean",
          required: false,
          description: "The showCloseButton property"
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "The className property"
        }
      ]
    },
    {
      name: "DialogTitle",
      props: [
        {
          name: "className",
          type: "string",
          required: false,
          description: "The className property"
        }
      ]
    },
    {
      name: "DialogFooter",
      props: [
        {
          name: "showCloseButton",
          type: "boolean",
          required: false,
          description: "The showCloseButton property"
        }
      ]
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/core/dialog";\nimport { Button } from "@/components/core/button";\n\n<DialogTrigger>\n  <Button>Open</Button>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>Title</DialogTitle>\n    </DialogHeader>\n  </DialogContent>\n</DialogTrigger>'
    }
  ],
  a11yNotes: "Secures focus within the dialog with react-aria until dismissed.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add dialog",
  tags: ["overlay", "modal"]
};

export const drawerMeta: ComponentMeta = {
  name: "drawer",
  displayName: "Drawer",
  category: "overlay",
  tier: "free",
  description: "A panel that slides in from the edge of the screen.",
  sourceFile: "apps/docs/src/registry/core/drawer.tsx",
  primitives: ["react-aria"],
  variants: [
    {
      name: "side",
      description: "The edge from which the drawer slides in.",
      tailwindClasses: ["bottom", "top", "left", "right"]
    }
  ],
  props: [
    {
      name: "children",
      type: "React.ReactNode",
      required: true,
      description: "The content elements."
    },
    {
      name: "isOpen",
      type: "boolean",
      required: false,
      description: "Whether the component is open."
    },
    {
      name: "onOpenChange",
      type: "(isOpen: boolean) => void",
      required: false,
      description: "Event handler called when the open state changes."
    },
    {
      name: "defaultOpen",
      type: "boolean",
      required: false,
      description: "Whether the component is open by default."
    },
    {
      name: "showCloseButton",
      type: "boolean",
      required: false,
      description: "Whether to show a close button."
    },
    {
      name: "showHandle",
      type: "boolean",
      required: false,
      description: "Whether to show a drag handle."
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional CSS classes to apply."
    },
    {
      name: "snapThreshold",
      type: "number",
      required: false,
      description: "The threshold for snapping to the next position."
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional CSS classes to apply."
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional CSS classes to apply."
    },
    {
      name: "showCloseButton",
      type: "boolean",
      required: false,
      description: "Whether to show a close button."
    }
  ],
  subComponents: [
    {
      name: "DrawerContent",
      props: [
        {
          name: "showCloseButton",
          type: "boolean",
          required: false,
          description: "The showCloseButton property"
        },
        {
          name: "showHandle",
          type: "boolean",
          required: false,
          description: "The showHandle property"
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "The className property"
        },
        {
          name: "snapThreshold",
          type: "number",
          required: false,
          description: "The snapThreshold property"
        }
      ]
    },
    {
      name: "DrawerTitle",
      props: [
        {
          name: "className",
          type: "string",
          required: false,
          description: "The className property"
        }
      ]
    },
    {
      name: "DrawerFooter",
      props: [
        {
          name: "showCloseButton",
          type: "boolean",
          required: false,
          description: "The showCloseButton property"
        }
      ]
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/core/drawer";\nimport { Button } from "@/components/core/button";\n\n<DrawerTrigger>\n  <Button>Open Drawer</Button>\n  <DrawerContent side="right">\n    <DrawerHeader>\n       <DrawerTitle>Sidebar</DrawerTitle>\n    </DrawerHeader>\n  </DrawerContent>\n</DrawerTrigger>'
    }
  ],
  a11yNotes:
    "Behaves like a modal dialog. Relies on react-aria for accessibilty guarantees.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add drawer",
  tags: ["overlay", "sliding", "panel"]
};

export const dropdownMeta: ComponentMeta = {
  name: "dropdown",
  displayName: "Dropdown",
  category: "overlay",
  tier: "free",
  description:
    "Displays a menu to the user, triggered by a button interaction.",
  sourceFile: "apps/docs/src/registry/core/dropdown.tsx",
  primitives: ["react-aria", "floating-ui"],
  variants: [],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from "@/components/core/dropdown";\nimport { Button } from "@/components/core/button";\n\n<Dropdown>\n  <DropdownTrigger><Button>Options</Button></DropdownTrigger>\n  <DropdownContent>\n    <DropdownItem>Edit</DropdownItem>\n    <DropdownItem>Delete</DropdownItem>\n  </DropdownContent>\n</Dropdown>'
    }
  ],
  a11yNotes:
    "Built securely on react-aria handling popup triggers and focus delegation.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add dropdown",
  tags: ["overlay", "menu", "interactive"]
};

export const fieldMeta: ComponentMeta = {
  name: "field",
  displayName: "Field",
  category: "forms",
  tier: "free",
  description:
    "A wrapper for form inputs that manages labels, description, and error messages.",
  sourceFile: "apps/docs/src/registry/core/field.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "orientation",
      description: "The layout of the field.",
      tailwindClasses: ["vertical", "horizontal", "responsive"]
    }
  ],
  props: [
    {
      name: "children",
      type: "React.ReactNode",
      required: false,
      description: "The content elements."
    },
    {
      name: '"data-invalid"',
      type: "boolean",
      required: false,
      description: "Whether the field is in an invalid state."
    },
    {
      name: "asChild",
      type: "boolean",
      required: false,
      description: "Whether to delegate rendering to the child element."
    },
    {
      name: "orientation",
      type: '"vertical" | "horizontal" | "responsive"',
      required: false,
      description: "The layout orientation (horizontal or vertical)."
    },
    {
      name: "children",
      type: "React.ReactNode",
      required: true,
      description: "The content elements."
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional CSS classes to apply."
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Field, FieldLabel, FieldDescription, FieldError } from "@/components/core/field";\nimport { Input } from "@/components/core/input";\n\n<Field>\n  <FieldLabel>Email</FieldLabel>\n  <Input />\n  <FieldDescription>We\'ll never share your email.</FieldDescription>\n  <FieldError />\n</Field>'
    }
  ],
  a11yNotes:
    "Must link labels and descriptions to the enclosed input using id and aria-describedby (automatically managed if used with react-aria fields).",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add field",
  tags: ["forms", "layout"]
};

export const hover_cardMeta: ComponentMeta = {
  name: "hover-card",
  displayName: "HoverCard",
  category: "overlay",
  tier: "free",
  description: "For sighted users to preview content available behind a link.",
  sourceFile: "apps/docs/src/registry/core/hover-card.tsx",
  primitives: ["base-ui", "floating-ui"],
  variants: [],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/core/hover-card";\n\n<HoverCard>\n  <HoverCardTrigger href="#">@nextjs</HoverCardTrigger>\n  <HoverCardContent>The React Framework</HoverCardContent>\n</HoverCard>'
    }
  ],
  a11yNotes:
    "Uses base-ui. Do not use for essential content that keyboard-only users cannot access easily.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add hover-card",
  tags: ["overlay", "tooltip", "preview"]
};

export const input_groupMeta: ComponentMeta = {
  name: "input-group",
  displayName: "InputGroup",
  category: "forms",
  tier: "free",
  description:
    "Groups multiple elements like inputs and buttons together into a single visually cohesive field.",
  sourceFile: "apps/docs/src/registry/core/input-group.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "align",
      description: "Alignment within the group addon.",
      tailwindClasses: [
        "inline-start",
        "inline-end",
        "block-start",
        "block-end"
      ]
    }
  ],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { InputGroup, InputGroupAddon } from "@/components/core/input-group";\nimport { Input } from "@/components/core/input";\n\n<InputGroup>\n  <InputGroupAddon>https://</InputGroupAddon>\n  <Input />\n</InputGroup>'
    }
  ],
  a11yNotes:
    "Ensure that combined elements do not confuse screen readers. Provide an explicit label.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add input-group",
  tags: ["forms", "group"]
};

export const inputMeta: ComponentMeta = {
  name: "input",
  displayName: "Input",
  category: "forms",
  tier: "free",
  description: "A basic text input field.",
  sourceFile: "apps/docs/src/registry/core/input.tsx",
  primitives: ["react-aria"],
  variants: [
    {
      name: "state",
      description: "The validation state.",
      tailwindClasses: ["default", "error", "success"]
    }
  ],
  props: [
    {
      name: "label",
      type: "string",
      required: false,
      description: "The label property"
    },
    {
      name: "hint",
      type: "string",
      required: false,
      description: "The hint property"
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Input } from "@/components/core/input";\n\n<Input type="email" placeholder="example@acme.com" />'
    }
  ],
  a11yNotes: "Standard HTML input. Labeling is required for screen readers.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add input",
  tags: ["forms", "text"]
};

export const labelMeta: ComponentMeta = {
  name: "label",
  displayName: "Label",
  category: "forms",
  tier: "free",
  description: "An accessible label associated with form controls.",
  sourceFile: "apps/docs/src/registry/core/label.tsx",
  primitives: ["react-aria"],
  variants: [],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Label } from "@/components/core/label";\n\n<Label htmlFor="email">Email address</Label>'
    }
  ],
  a11yNotes:
    "Uses react-aria to provide robust htmlFor or implicit labeling capabilities.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add label",
  tags: ["forms", "text"]
};

export const linkMeta: ComponentMeta = {
  name: "link",
  displayName: "Link",
  category: "navigation",
  tier: "free",
  description:
    "An interactive anchor element that allows users to navigate between pages.",
  sourceFile: "apps/docs/src/registry/core/link.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "variant",
      description: "The color theme.",
      tailwindClasses: ["primary", "dark"]
    },
    {
      name: "size",
      description: "The size.",
      tailwindClasses: ["sm", "md"]
    }
  ],
  props: [
    {
      name: "href",
      type: "string",
      required: true,
      description: "The href property"
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Link } from "@/components/core/link";\n\n<Link href="/about" variant="primary">About us</Link>'
    }
  ],
  a11yNotes: "Standard a tag augmented. Ensure link text is descriptive.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add link",
  tags: ["navigation", "interactive"]
};

export const listMeta: ComponentMeta = {
  name: "list",
  displayName: "List",
  category: "data-display",
  tier: "free",
  description:
    "Displays a collection of related items in a vertical or horizontal layout.",
  sourceFile: "apps/docs/src/registry/core/list.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "direction",
      description: "Layout orientation.",
      tailwindClasses: ["vertical", "horizontal"]
    }
  ],
  props: [
    {
      name: "direction",
      type: '"vertical" | "horizontal"',
      required: false,
      description: "The direction property"
    },
    {
      name: "hideDividers",
      type: "boolean",
      required: false,
      description: "The hideDividers property"
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { List } from "@/components/core/list";\n\n<List direction="vertical">\n  <li>Item 1</li>\n  <li>Item 2</li>\n</List>'
    }
  ],
  a11yNotes: "Standard semantic list markup.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add list",
  tags: ["data-display", "collection"]
};

export const menubarMeta: ComponentMeta = {
  name: "menubar",
  displayName: "Menubar",
  category: "navigation",
  tier: "free",
  description: "A visually persistent menu common in desktop applications.",
  sourceFile: "apps/docs/src/registry/core/menubar.tsx",
  primitives: ["react-aria"],
  variants: [],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/core/menubar";\n\n<Menubar>\n  <MenubarMenu>\n    <MenubarTrigger>File</MenubarTrigger>\n    <MenubarContent>\n      <MenubarItem>New</MenubarItem>\n    </MenubarContent>\n  </MenubarMenu>\n</Menubar>'
    }
  ],
  a11yNotes: "Powered by base-ui. Expects complex arrow-key navigation.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add menubar",
  tags: ["overlay", "navigation"]
};

export const modalMeta: ComponentMeta = {
  name: "modal",
  displayName: "Modal",
  category: "core",
  tier: "free",
  description: "A secondary window that forces user interaction.",
  sourceFile: "apps/docs/src/registry/core/modal.tsx",
  primitives: ["none"],
  variants: [],
  props: [
    {
      name: "open",
      type: "boolean",
      required: true,
      description: "The open property"
    },
    {
      name: "onClose",
      type: "() => void",
      required: true,
      description: "The onClose property"
    },
    {
      name: "children",
      type: "React.ReactNode",
      required: true,
      description: "The children property"
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "The className property"
    }
  ],
  subComponents: undefined,
  examples: [
    {
      title: "Basic usage",
      code: 'import { Modal } from "@/components/core/modal";\n\n<Modal>Content</Modal>'
    }
  ],
  a11yNotes: "Trap focus and render via React Portals.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add modal",
  tags: ["overlay", "window"]
};

export const native_selectMeta: ComponentMeta = {
  name: "native-select",
  displayName: "NativeSelect",
  category: "forms",
  tier: "free",
  description: "A standard HTML select element styled appropriately.",
  sourceFile: "apps/docs/src/registry/core/native-select.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "variant",
      description: "Validation state.",
      tailwindClasses: ["default", "error", "success"]
    }
  ],
  props: [
    {
      name: "placeholder",
      type: "string",
      required: false,
      description: "The placeholder property"
    }
  ],
  subComponents: [
    {
      name: "NativeSelectOptGroup",
      props: [
        {
          name: "placeholder",
          type: "string",
          required: false,
          description: "The placeholder property"
        }
      ]
    },
    {
      name: "NativeSelectOption",
      props: [
        {
          name: "placeholder",
          type: "string",
          required: false,
          description: "The placeholder property"
        }
      ]
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { NativeSelect } from "@/components/core/native-select";\n\n<NativeSelect>\n  <option>1</option>\n  <option>2</option>\n</NativeSelect>'
    }
  ],
  a11yNotes: "Extremely accessible inherently by all OS and AT out of the box.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add native-select",
  tags: ["forms", "selection"]
};

export const navigation_menuMeta: ComponentMeta = {
  name: "navigation-menu",
  displayName: "NavigationMenu",
  category: "navigation",
  tier: "free",
  description: "A collection of links for navigating websites.",
  sourceFile: "apps/docs/src/registry/core/navigation-menu.tsx",
  primitives: ["react-aria"],
  variants: [],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/core/navigation-menu";\n\n<NavigationMenu>\n  <NavigationMenuList>\n    <NavigationMenuItem>\n      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>\n      <NavigationMenuContent>Content here...</NavigationMenuContent>\n    </NavigationMenuItem>\n  </NavigationMenuList>\n</NavigationMenu>'
    }
  ],
  a11yNotes:
    "Implements base-ui navigation requirements, managing sub-menu focus and hover delays.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add navigation-menu",
  tags: ["navigation", "hierarchy"]
};

export const otp_inputMeta: ComponentMeta = {
  name: "otp-input",
  displayName: "OtpInput",
  category: "forms",
  tier: "free",
  description: "An input tailored for entering one-time passwords.",
  sourceFile: "apps/docs/src/registry/core/otp-input.tsx",
  primitives: ["react-aria"],
  variants: [],
  props: [
    {
      name: "digitLength",
      type: "4 | 6",
      required: false,
      description: "The digitLength property"
    },
    {
      name: "label",
      type: "string",
      required: false,
      description: "The label property"
    },
    {
      name: "hint",
      type: "string",
      required: false,
      description: "The hint property"
    },
    {
      name: "value",
      type: "string",
      required: false,
      description: "The current value of the component"
    }
  ],
  subComponents: undefined,
  examples: [
    {
      title: "Basic usage",
      code: 'import { OtpInput } from "@/components/core/otp-input";\n\n<OtpInput maxLength={6} />'
    }
  ],
  a11yNotes:
    "Announces multiple box focus states clearly when mapped to autocomplete='one-time-code'.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add otp-input",
  tags: ["forms", "security"]
};

export const paginationMeta: ComponentMeta = {
  name: "pagination",
  displayName: "Pagination",
  category: "navigation",
  tier: "free",
  description:
    "Navigation with previous/next controls for multiple pages of data.",
  sourceFile: "apps/docs/src/registry/core/pagination.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "variant",
      description: "Layout scale style.",
      tailwindClasses: ["default", "compact"]
    }
  ],
  props: [
    {
      name: "currentPage",
      type: "number",
      required: true,
      description: "The currentPage property"
    },
    {
      name: "totalPages",
      type: "number",
      required: true,
      description: "The totalPages property"
    },
    {
      name: "onPageChange",
      type: "(page: number) => void",
      required: false,
      description: "The onPageChange property"
    },
    {
      name: "variant",
      type: '"default" | "compact"',
      required: false,
      description: "The variant property"
    },
    {
      name: "sideLayout",
      type: '"full" | "label" | "icon"',
      required: false,
      description: "The sideLayout property"
    }
  ],
  subComponents: undefined,
  examples: [
    {
      title: "Basic usage",
      code: 'import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext } from "@/components/core/pagination";\n\n<Pagination>\n  <PaginationContent>\n    <PaginationItem><PaginationPrevious /></PaginationItem>\n    <PaginationItem><PaginationNext /></PaginationItem>\n  </PaginationContent>\n</Pagination>'
    }
  ],
  a11yNotes:
    "Use `<nav aria-label='pagination'>` to ensure screen readers identify the region correctly.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add pagination",
  tags: ["navigation", "lists"]
};

export const popoverMeta: ComponentMeta = {
  name: "popover",
  displayName: "Popover",
  category: "overlay",
  tier: "free",
  description: "Displays rich content in a portal, triggered by a button.",
  sourceFile: "apps/docs/src/registry/core/popover.tsx",
  primitives: ["base-ui", "floating-ui"],
  variants: [],
  props: [
    {
      name: "children",
      type: "React.ReactNode",
      required: true,
      description: "The content elements."
    },
    {
      name: "asChild",
      type: "boolean",
      required: false,
      description: "Whether to delegate rendering to the child element."
    }
  ],
  subComponents: [
    {
      name: "PopoverTrigger",
      props: [
        {
          name: "children",
          type: "React.ReactNode",
          required: true,
          description: "The children property"
        },
        {
          name: "asChild",
          type: "boolean",
          required: false,
          description: "The asChild property"
        }
      ]
    },
    {
      name: "PopoverContent",
      props: [
        {
          name: "children",
          type: "React.ReactNode",
          required: true,
          description: "The children property"
        },
        {
          name: "asChild",
          type: "boolean",
          required: false,
          description: "The asChild property"
        }
      ]
    },
    {
      name: "PopoverHeading",
      props: [
        {
          name: "children",
          type: "React.ReactNode",
          required: true,
          description: "The children property"
        },
        {
          name: "asChild",
          type: "boolean",
          required: false,
          description: "The asChild property"
        }
      ]
    },
    {
      name: "PopoverDescription",
      props: [
        {
          name: "children",
          type: "React.ReactNode",
          required: true,
          description: "The children property"
        },
        {
          name: "asChild",
          type: "boolean",
          required: false,
          description: "The asChild property"
        }
      ]
    },
    {
      name: "PopoverClose",
      props: [
        {
          name: "children",
          type: "React.ReactNode",
          required: true,
          description: "The children property"
        },
        {
          name: "asChild",
          type: "boolean",
          required: false,
          description: "The asChild property"
        }
      ]
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Popover, PopoverTrigger, PopoverContent } from "@/components/core/popover";\n\n<Popover>\n  <PopoverTrigger>Open</PopoverTrigger>\n  <PopoverContent>Place content here</PopoverContent>\n</Popover>'
    }
  ],
  a11yNotes:
    "Built utilizing floating-ui. Relies on portal handling and implicit ARIA roles.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add popover",
  tags: ["overlay", "content"]
};

export const progressMeta: ComponentMeta = {
  name: "progress",
  displayName: "Progress",
  category: "feedback",
  tier: "free",
  description:
    "Displays an indicator showing the completion progress of a task.",
  sourceFile: "apps/docs/src/registry/core/progress.tsx",
  primitives: ["base-ui"],
  variants: [],
  props: [
    {
      name: "progress",
      type: "number",
      required: true,
      description: "The progress property"
    },
    {
      name: "withLabel",
      type: "boolean",
      required: false,
      description: "The withLabel property"
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "The className property"
    },
    {
      name: "trackColor",
      type: "string",
      required: false,
      description: "The trackColor property"
    },
    {
      name: "barColor",
      type: "string",
      required: false,
      description: "The barColor property"
    }
  ],
  subComponents: undefined,
  examples: [
    {
      title: "Basic usage",
      code: 'import { Progress } from "@/components/core/progress";\n\n<Progress value={33} />'
    }
  ],
  a11yNotes:
    "Needs aria-valuenow and aria-valuemax to be announced correctly to screen reader users.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add progress",
  tags: ["feedback", "status", "indicator"]
};

export const radio_inputMeta: ComponentMeta = {
  name: "radio-input",
  displayName: "RadioInput",
  category: "forms",
  tier: "free",
  description:
    "A set of checkable buttons where only one can be checked at a time.",
  sourceFile: "apps/docs/src/registry/core/radio-input.tsx",
  primitives: ["react-aria"],
  variants: [
    {
      name: "size",
      description: "Size of the input.",
      tailwindClasses: ["sm", "md"]
    }
  ],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { RadioInput } from "@/components/core/radio-input";\n\n<RadioInput size="md" />'
    }
  ],
  a11yNotes:
    "Requires proper grouping and labeling to establish the mutually exclusive relationship in AT.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add radio-input",
  tags: ["forms", "selection"]
};

export const resizableMeta: ComponentMeta = {
  name: "resizable",
  displayName: "Resizable",
  category: "layout",
  tier: "free",
  description: "A container that can be resized by the user via a drag handle.",
  sourceFile: "apps/docs/src/registry/core/resizable.tsx",
  primitives: ["none"],
  variants: [],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/core/resizable";\n\n<ResizablePanelGroup direction="horizontal">\n  <ResizablePanel>One</ResizablePanel>\n  <ResizableHandle />\n  <ResizablePanel>Two</ResizablePanel>\n</ResizablePanelGroup>'
    }
  ],
  a11yNotes: "Uses keyboard events on the handle for non-pointer resizing.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add resizable",
  tags: ["layout", "interactive"]
};

export const scroll_areaMeta: ComponentMeta = {
  name: "scroll-area",
  displayName: "ScrollArea",
  category: "layout",
  tier: "free",
  description:
    "A custom scrollable container that augments native scrollbars visually.",
  sourceFile: "apps/docs/src/registry/core/scroll-area.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "orientation",
      description: "Scrollbar direction.",
      tailwindClasses: ["vertical", "horizontal"]
    }
  ],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { ScrollArea } from "@/components/core/scroll-area";\n\n<ScrollArea className="h-[200px] w-full">Content</ScrollArea>'
    }
  ],
  a11yNotes:
    "Built with base-ui. Respects native scrolling but styles the scroll thumb predictably.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add scroll-area",
  tags: ["layout", "container"]
};

export const selectMeta: ComponentMeta = {
  name: "select",
  displayName: "Select",
  category: "forms",
  tier: "free",
  description: "A styled select dropdown with searching and rich options.",
  sourceFile: "apps/docs/src/registry/core/select.tsx",
  primitives: ["react-aria"],
  variants: [],
  props: [
    {
      name: "label",
      type: "string",
      required: false,
      description: "The label text."
    },
    {
      name: "description",
      type: "string",
      required: false,
      description: "The description or helper text."
    },
    {
      name: "errorMessage",
      type: "string | ((validation: any) => string)",
      required: false,
      description: "The error message to display when invalid."
    },
    {
      name: "items",
      type: "Iterable<T>",
      required: false,
      description: "The items to render."
    },
    {
      name: "children",
      type: "React.ReactNode | ((item: T) => React.ReactNode)",
      required: false,
      description: "The content elements."
    },
    {
      name: "selectionMode",
      type: '"single" | "multiple"',
      required: false,
      description: "The selection mode (none, single, or multiple)."
    },
    {
      name: "value",
      type: "Key | Iterable<Key>",
      required: false,
      description: "The controlled or uncontrolled value."
    },
    {
      name: "onChange",
      type: "(value: any) => void",
      required: false,
      description: "Event handler called when the value changes."
    },
    {
      name: "isInvalid",
      type: "boolean",
      required: false,
      description: "Whether the input is in an invalid state."
    }
  ],
  subComponents: [
    {
      name: "SelectTrigger",
      props: [
        {
          name: "isInvalid",
          type: "boolean",
          required: false,
          description: "The isInvalid property"
        }
      ]
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/core/select";\n\n<Select>\n  <SelectTrigger><SelectValue placeholder="Theme" /></SelectTrigger>\n  <SelectContent>\n    <SelectItem value="light">Light</SelectItem>\n    <SelectItem value="dark">Dark</SelectItem>\n  </SelectContent>\n</Select>'
    }
  ],
  a11yNotes:
    "Powered by react-aria. Provides standard select behaviors entirely via keyboard.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add select",
  tags: ["forms", "selection"]
};

export const separatorMeta: ComponentMeta = {
  name: "separator",
  displayName: "Separator",
  category: "layout",
  tier: "free",
  description: "Visually or semantically separates content.",
  sourceFile: "apps/docs/src/registry/core/separator.tsx",
  primitives: ["react-aria"],
  variants: [
    {
      name: "orientation",
      description: "Line direction.",
      tailwindClasses: ["horizontal", "vertical"]
    }
  ],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Separator } from "@/components/core/separator";\n\n<Separator orientation="horizontal" />'
    }
  ],
  a11yNotes:
    "Uses react-aria to give role='separator' or role='none' dynamically.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add separator",
  tags: ["layout", "decorative"]
};

export const sheetMeta: ComponentMeta = {
  name: "sheet",
  displayName: "Sheet",
  category: "overlay",
  tier: "free",
  description: "An overlay element that pops out from an edge.",
  sourceFile: "apps/docs/src/registry/core/sheet.tsx",
  primitives: ["react-aria"],
  variants: [
    {
      name: "side",
      description: "Edge to pop out from.",
      tailwindClasses: ["top", "bottom", "left", "right"]
    }
  ],
  props: [
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional CSS classes to apply."
    },
    {
      name: "isDismissable",
      type: "boolean",
      required: false,
      description: "Whether the overlay is dismissable by the user."
    },
    {
      name: "modalProps",
      type: "ComponentProps<typeof Modal>",
      required: false,
      description: "Additional props to pass to the modal."
    },
    {
      name: "showCloseButton",
      type: "boolean",
      required: false,
      description: "Whether to show a close button."
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional CSS classes to apply."
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional CSS classes to apply."
    },
    {
      name: "showCloseButton",
      type: "boolean",
      required: false,
      description: "Whether to show a close button."
    }
  ],
  subComponents: [
    {
      name: "SheetOverlay",
      props: [
        {
          name: "className",
          type: "string",
          required: false,
          description: "The className property"
        },
        {
          name: "isDismissable",
          type: "boolean",
          required: false,
          description: "The isDismissable property"
        }
      ]
    },
    {
      name: "SheetContent",
      props: [
        {
          name: "modalProps",
          type: "ComponentProps<typeof Modal>",
          required: false,
          description: "The modalProps property"
        },
        {
          name: "showCloseButton",
          type: "boolean",
          required: false,
          description: "The showCloseButton property"
        },
        {
          name: "className",
          type: "string",
          required: false,
          description: "The className property"
        }
      ]
    },
    {
      name: "SheetTitle",
      props: [
        {
          name: "className",
          type: "string",
          required: false,
          description: "The className property"
        }
      ]
    },
    {
      name: "SheetFooter",
      props: [
        {
          name: "showCloseButton",
          type: "boolean",
          required: false,
          description: "The showCloseButton property"
        }
      ]
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Sheet, SheetTrigger, SheetContent } from "@/components/core/sheet";\nimport { Button } from "@/components/core/button";\n\n<Sheet>\n  <SheetTrigger><Button>Open</Button></SheetTrigger>\n  <SheetContent side="left">Menu content</SheetContent>\n</Sheet>'
    }
  ],
  a11yNotes:
    "Utilizes react-aria. Maintains focus trap logic identical to Dialog.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add sheet",
  tags: ["overlay", "panel"]
};

export const sidebarMeta: ComponentMeta = {
  name: "sidebar",
  displayName: "Sidebar",
  category: "navigation",
  tier: "free",
  description:
    "A responsive structural layout container for application navigation.",
  sourceFile: "apps/docs/src/registry/core/sidebar.tsx",
  primitives: ["react-aria"],
  variants: [
    {
      name: "variant",
      description: "Button appearance.",
      tailwindClasses: ["default", "outline"]
    },
    {
      name: "size",
      description: "Button size.",
      tailwindClasses: ["default", "sm", "lg"]
    }
  ],
  props: [
    {
      name: "defaultOpen",
      type: "boolean",
      required: false,
      description: "Whether the component is open by default."
    },
    {
      name: "open",
      type: "boolean",
      required: false,
      description: "The open state."
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      required: false,
      description: "Event handler called when the open state changes."
    },
    {
      name: "side",
      type: '"left" | "right"',
      required: false,
      description: "The side from which the sheet enters."
    },
    {
      name: "variant",
      type: '"sidebar" | "floating" | "inset"',
      required: false,
      description: "The visual variant."
    },
    {
      name: "collapsible",
      type: '"offcanvas" | "icon"',
      required: false,
      description: "Whether the group is collapsible."
    },
    {
      name: "showSheetCloseButton",
      type: "boolean",
      required: false,
      description: "Whether to show a close button on the sheet."
    },
    {
      name: "isActive",
      type: "boolean",
      required: false,
      description: "Whether the item is currently active."
    },
    {
      name: "tooltip",
      type: "string | React.ComponentProps<typeof TooltipContent>",
      required: false,
      description: "The tooltip content."
    }
  ],
  subComponents: [
    {
      name: "SidebarMenuButton",
      props: [
        {
          name: "isActive",
          type: "boolean",
          required: false,
          description: "The isActive property"
        },
        {
          name: "tooltip",
          type: "string | React.ComponentProps<typeof TooltipContent>",
          required: false,
          description: "The tooltip property"
        }
      ]
    },
    {
      name: "SidebarProvider",
      props: [
        {
          name: "defaultOpen",
          type: "boolean",
          required: false,
          description: "The defaultOpen property"
        },
        {
          name: "open",
          type: "boolean",
          required: false,
          description: "The open property"
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          required: false,
          description: "The onOpenChange property"
        }
      ]
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Sidebar, SidebarContent, SidebarGroup } from "@/components/core/sidebar";\n\n<Sidebar>\n  <SidebarContent>\n    <SidebarGroup>Links</SidebarGroup>\n  </SidebarContent>\n</Sidebar>'
    }
  ],
  a11yNotes:
    "Relies on react-aria. Ensure sidebar wrap logic toggles aria-hidden logically for screen readers.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add sidebar",
  tags: ["layout", "navigation"]
};

export const skeletonMeta: ComponentMeta = {
  name: "skeleton",
  displayName: "Skeleton",
  category: "feedback",
  tier: "free",
  description: "A placeholder to indicate that content is loading.",
  sourceFile: "apps/docs/src/registry/core/skeleton.tsx",
  primitives: ["none"],
  variants: [],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Skeleton } from "@/components/core/skeleton";\n\n<Skeleton className="h-4 w-[250px]" />'
    }
  ],
  a11yNotes:
    "Visually indicates loading. Consider combining with an aria-live region to announce state changes.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add skeleton",
  tags: ["feedback", "loading"]
};

export const sliderMeta: ComponentMeta = {
  name: "slider",
  displayName: "Slider",
  category: "forms",
  tier: "free",
  description:
    "An input where the user selects a value from within a given range.",
  sourceFile: "apps/docs/src/registry/core/slider.tsx",
  primitives: ["react-aria"],
  variants: [],
  props: [
    {
      name: "thumbLabels",
      type: "string[]",
      required: false,
      description: "Accessible labels for the thumbs."
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional CSS classes to apply."
    },
    {
      name: "thumbValueType",
      type: '"hidden" | "text" | "tooltip"',
      required: false,
      description: "The type of value represented by the thumbs."
    },
    {
      name: "name",
      type: "string",
      required: false,
      description: "The form field name."
    },
    {
      name: "state",
      type: "SliderState",
      required: true,
      description: "The validation state."
    },
    {
      name: "trackRef",
      type: "React.RefObject<HTMLDivElement | null>",
      required: true,
      description: "A ref to the track element."
    },
    {
      name: "index",
      type: "number",
      required: true,
      description: "The zero-based index of the item."
    },
    {
      name: "name",
      type: "string",
      required: false,
      description: "The form field name."
    },
    {
      name: "thumbValueType",
      type: '"hidden" | "text" | "tooltip"',
      required: true,
      description: "The type of value represented by the thumbs."
    }
  ],
  subComponents: undefined,
  examples: [
    {
      title: "Basic usage",
      code: 'import { Slider } from "@/components/core/slider";\n\n<Slider defaultValue={[50]} max={100} step={1} />'
    }
  ],
  a11yNotes:
    "Powered by react-aria. Properly exposes aria-valuenow and enables arrow-key bindings.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add slider",
  tags: ["forms", "input"]
};

export const social_buttonMeta: ComponentMeta = {
  name: "social-button",
  displayName: "SocialButton",
  category: "core",
  tier: "free",
  description:
    "A configured button specifically styled for social authentication providers.",
  sourceFile: "apps/docs/src/registry/core/social-button.tsx",
  primitives: ["none"],
  variants: [],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { SocialButton } from "@/components/core/social-button";\n\n<SocialButton provider="google" />'
    }
  ],
  a11yNotes:
    "Needs proper aria-label identifying the network being interacted with.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add social-button",
  tags: ["forms", "core"]
};

export const tableMeta: ComponentMeta = {
  name: "table",
  displayName: "Table",
  category: "data-display",
  tier: "free",
  description: "A responsive table component.",
  sourceFile: "apps/docs/src/registry/core/table.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "fullBleed",
      description: "Whether the table extends edge to edge.",
      tailwindClasses: ["true", "false"]
    }
  ],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/core/table";\n\n<Table>\n  <TableHeader>\n    <TableRow><TableHead>Head</TableHead></TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow><TableCell>Cell</TableCell></TableRow>\n  </TableBody>\n</Table>'
    }
  ],
  a11yNotes: "Standard semantic tabular data. Keep headers logically sound.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add table",
  tags: ["data-display", "layout"]
};

export const tabsMeta: ComponentMeta = {
  name: "tabs",
  displayName: "Tabs",
  category: "navigation",
  tier: "free",
  description:
    "A set of layered sections of content that are displayed one at a time.",
  sourceFile: "apps/docs/src/registry/core/tabs.tsx",
  primitives: ["react-aria"],

  variants: [
    {
      name: "variant",
      description: "Visual aesthetic.",
      tailwindClasses: ["default", "minimal"]
    },
    {
      name: "direction",
      description: "Layout alignment.",
      tailwindClasses: ["vertical", "horizontal"]
    }
  ],
  props: [
    {
      name: "defaultValue",
      type: "string",
      required: true,
      description: "The initial value when the component mounts"
    },
    {
      name: "children",
      type: "React.ReactNode",
      required: true,
      description: "The children property"
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "The className property"
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/core/tabs";\n\n<Tabs defaultValue="account">\n  <TabsList>\n    <TabsTrigger value="account">Account</TabsTrigger>\n  </TabsList>\n  <TabsContent value="account">Manage account</TabsContent>\n</Tabs>'
    }
  ],
  a11yNotes:
    "Crucial for accessiblity: arrow key navigation amongst TabsTriggers. Provides roving tabindex.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add tabs",
  tags: ["layout", "navigation"]
};

export const text_areaMeta: ComponentMeta = {
  name: "text-area",
  displayName: "TextArea",
  category: "forms",
  tier: "free",
  description: "A multiline input control.",
  sourceFile: "apps/docs/src/registry/core/text-area.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "state",
      description: "Validation state.",
      tailwindClasses: ["default", "error", "success"]
    }
  ],
  props: [
    {
      name: "label",
      type: "string",
      required: false,
      description: "The label property"
    },
    {
      name: "hint",
      type: "string",
      required: false,
      description: "The hint property"
    }
  ],
  subComponents: undefined,
  examples: [
    {
      title: "Basic usage",
      code: 'import { TextArea } from "@/components/core/text-area";\n\n<TextArea placeholder="Type your message here." />'
    }
  ],
  a11yNotes: "Native `<textarea>` element structure.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add text-area",
  tags: ["forms", "input"]
};

export const time_pickerMeta: ComponentMeta = {
  name: "time-picker",
  displayName: "TimePicker",
  category: "forms",
  tier: "free",
  description: "An interface to input discrete time values logically.",
  sourceFile: "apps/docs/src/registry/core/time-picker.tsx",
  primitives: ["react-aria"],
  variants: [],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { TimePicker } from "@/components/core/time-picker";\n\n<TimePicker />'
    }
  ],
  a11yNotes: "Driven by react-aria. Uses specific ARIA spinbutton roles.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add time-picker",
  tags: ["forms", "input"]
};

export const toastMeta: ComponentMeta = {
  name: "toast",
  displayName: "Toast",
  category: "feedback",
  tier: "free",
  description: "A succinct message that is displayed temporarily.",
  sourceFile: "apps/docs/src/registry/core/toast.tsx",
  primitives: ["react-aria"],
  variants: [
    {
      name: "variant",
      description: "Severity of toast.",
      tailwindClasses: ["success", "error", "info", "warning", "default"]
    }
  ],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Toast } from "@/components/core/toast";\n\n// Usage via toast() hook\ntoast("Message");'
    }
  ],
  a11yNotes: "Polite or assertive aria-live region injection internally.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add toast",
  tags: ["feedback", "notification"]
};

export const toggleMeta: ComponentMeta = {
  name: "toggle",
  displayName: "Toggle",
  category: "core",
  tier: "free",
  description: "A two-state button that can be either on or off.",
  sourceFile: "apps/docs/src/registry/core/toggle.tsx",
  primitives: ["none"],
  variants: [],
  props: [
    {
      name: "label",
      type: "string",
      required: false,
      description: "The label property"
    },
    {
      name: "size",
      type: '"sm" | "md"',
      required: false,
      description: "The size property"
    }
  ],
  subComponents: undefined,
  examples: [
    {
      title: "Basic usage",
      code: 'import { Toggle } from "@/components/core/toggle";\n\n<Toggle>On/Off</Toggle>'
    }
  ],
  a11yNotes: "Usually relies on aria-pressed to inform assistive technologies.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add toggle",
  tags: ["forms", "interactive"]
};

export const tooltipMeta: ComponentMeta = {
  name: "tooltip",
  displayName: "Tooltip",
  category: "overlay",
  tier: "free",
  description:
    "A popup that displays information related to an element when it receives focus.",
  sourceFile: "apps/docs/src/registry/core/tooltip.tsx",
  primitives: ["base-ui", "floating-ui"],
  variants: [],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/core/tooltip";\n\n<Tooltip>\n  <TooltipTrigger>Hover</TooltipTrigger>\n  <TooltipContent>Info text</TooltipContent>\n</Tooltip>'
    }
  ],
  a11yNotes: "Backed by floating-ui. Do not use for rich interaction content.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add tooltip",
  tags: ["overlay", "feedback"]
};

export const comboboxMeta: ComponentMeta = {
  name: "combobox",
  displayName: "Combobox",
  category: "core",
  tier: "free",
  description:
    "A searchable select dropdown component combining input and list selection.",
  sourceFile: "apps/docs/src/registry/core/combobox/combobox.tsx",
  primitives: ["react-aria"],
  variants: [
    {
      name: "default",
      description: "The default variant styling",
      tailwindClasses: []
    }
  ],
  props: [
    {
      name: "label",
      type: "string",
      required: false,
      description: "The label property"
    },
    {
      name: "description",
      type: "string",
      required: false,
      description: "The description property"
    },
    {
      name: "errorMessage",
      type: "string | ((validation: any) => string)",
      required: false,
      description: "The errorMessage property"
    },
    {
      name: "children",
      type: "React.ReactNode | ((item: T) => React.ReactNode)",
      required: false,
      description: "The children property"
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply"
    },
    {
      name: "value",
      type: 'AriaComboBoxProps<T>["selectedKey"]',
      required: false,
      description: "The value property"
    },
    {
      name: "defaultValue",
      type: 'AriaComboBoxProps<T>["defaultSelectedKey"]',
      required: false,
      description: "The defaultValue property"
    },
    {
      name: "onChange",
      type: 'AriaComboBoxProps<T>["onSelectionChange"]',
      required: false,
      description: "The onChange property"
    }
  ],
  subComponents: [
    {
      name: "ComboboxContent",
      props: [
        {
          name: "children",
          type: "React.ReactNode",
          required: false,
          description: "The children property"
        }
      ]
    }
  ],
  examples: [
    {
      title: "Basic usage",
      description: "Simple Combobox component example",
      code: 'import { Combobox } from "@/components/core/combobox";\n\n<Combobox />'
    }
  ],
  a11yNotes:
    "Built with React Aria for comprehensive keyboard navigation, screen reader support, and ARIA attributes. Includes proper ARIA labels and roles for assistive technology. Supports disabled states with proper accessibility semantics.",
  darkModeSupport: false,
  installCommand: "npx @tailgrids/cli@latest add combobox",
  tags: ["data-display", "interactive", "selection"]
};

export const multi_comboboxMeta: ComponentMeta = {
  name: "multi-combobox",
  displayName: "MultiCombobox",
  category: "core",
  tier: "free",
  description: "A combobox supporting multiple selected values.",
  sourceFile: "apps/docs/src/registry/core/combobox/multi-combobox.tsx",
  primitives: ["react-aria"],
  variants: [],
  props: [
    {
      name: "value",
      type: "Key[]",
      required: false,
      description: "The controlled or uncontrolled value."
    },
    {
      name: "defaultValue",
      type: "Key[]",
      required: false,
      description: "The default uncontrolled value."
    },
    {
      name: "onChange",
      type: "(keys: Key[]) => void",
      required: false,
      description: "Event handler called when the value changes."
    },
    {
      name: "onSelectionChange",
      type: "(key: Key | null) => void",
      required: false,
      description: "Event handler called when the selection changes."
    },
    {
      name: "renderTag",
      type: "(key: Key) => React.ReactNode",
      required: false,
      description: "Custom render function for tags."
    }
  ],
  subComponents: [
    {
      name: "MultiComboboxDisplay",
      props: [
        {
          name: "renderTag",
          type: "(key: Key) => React.ReactNode",
          required: false,
          description: "The renderTag property"
        }
      ]
    }
  ],
  examples: [
    {
      title: "Basic usage",
      code: 'import { MultiCombobox } from "@/components/core/combobox/multi-combobox";\n\n<MultiCombobox options={[{label: "A", value: "a"}]} />'
    }
  ],
  a11yNotes: "Built with react-aria. Uses tokens and combobox semantics.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add multi-combobox",
  tags: ["forms", "selection", "search", "multiple"]
};

export const date_pickerMeta: ComponentMeta = {
  name: "date-picker",
  displayName: "DatePicker",
  category: "core",
  tier: "free",
  description:
    "A calendar-based date selection component with single and range modes.",
  sourceFile: "apps/docs/src/registry/core/date-picker/range-date.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "default",
      description: "The default variant styling",
      tailwindClasses: []
    }
  ],
  props: [
    {
      name: "defaultStartDate",
      type: "Date",
      required: false,
      description: "The defaultStartDate property"
    },
    {
      name: "defaultEndDate",
      type: "Date",
      required: false,
      description: "The defaultEndDate property"
    },
    {
      name: "onDateChange",
      type: "(startDate: Date | null, endDate: Date | null) => void",
      required: false,
      description: "The onDateChange property"
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply"
    }
  ],
  subComponents: [
    {
      name: "RangeDatePicker",
      props: []
    },
    {
      name: "DatePicker",
      props: []
    }
  ],
  examples: [
    {
      title: "Basic usage",
      description: "Simple DatePicker component example",
      code: 'import { RangeDatePicker } from "@/components/core/date-picker";\n\n<RangeDatePicker />'
    }
  ],
  a11yNotes: "Provides standard web accessibility features with semantic HTML.",
  darkModeSupport: false,
  installCommand: "npx @tailgrids/cli@latest add date-picker",
  tags: ["input", "interactive", "selection"]
};

export const range_dateMeta: ComponentMeta = {
  name: "range-date",
  displayName: "RangeDate",
  category: "core",
  tier: "free",
  description: "A visual calendar picker tuned for selecting a date range.",
  sourceFile: "apps/docs/src/registry/core/date-picker/range-date.tsx",
  primitives: ["none"],
  variants: [],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { RangeDate } from "@/components/core/date-picker/range-date";\n\n<RangeDate />'
    }
  ],
  a11yNotes:
    "Very complex grid role management. Inherently difficult to navigate strictly by keyboard without specific conventions.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add range-date",
  tags: ["forms", "calendar"]
};

export const single_dateMeta: ComponentMeta = {
  name: "single-date",
  displayName: "SingleDate",
  category: "core",
  tier: "free",
  description: "A visual calendar picker for a single date.",
  sourceFile: "apps/docs/src/registry/core/date-picker/single-date.tsx",
  primitives: ["none"],
  variants: [],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: 'import { SingleDate } from "@/components/core/date-picker/single-date";\n\n<SingleDate />'
    }
  ],
  a11yNotes: "Grid navigation via keyboard is required.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add single-date",
  tags: ["forms", "calendar"]
};

export const spinnerMeta: ComponentMeta = {
  name: "spinner",
  displayName: "Spinner",
  category: "core",
  tier: "free",
  description: "An animated loading indicator component with multiple styles.",
  sourceFile: "apps/docs/src/registry/core/spinner/dotted.tsx",
  primitives: ["none"],
  variants: [
    {
      name: "default",
      description: "The default variant styling",
      tailwindClasses: []
    }
  ],
  props: [
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply"
    }
  ],
  subComponents: [
    {
      name: "DefaultSpinner",
      props: []
    },
    {
      name: "DottedRoundSpinner",
      props: []
    },
    {
      name: "DottedSpinner",
      props: []
    }
  ],
  examples: [
    {
      title: "Basic usage",
      description: "Simple Spinner component example",
      code: 'import { DottedSpinner } from "@/components/core/spinner";\n\n<DottedSpinner />'
    }
  ],
  a11yNotes: "Provides standard web accessibility features with semantic HTML.",
  darkModeSupport: false,
  installCommand: "npx @tailgrids/cli@latest add spinner",
  tags: ["status"]
};

export const defaultMeta: ComponentMeta = {
  name: "default",
  displayName: "Default",
  category: "core",
  tier: "free",
  description: "A default loading spinner indicator.",
  sourceFile: "apps/docs/src/registry/core/spinner/default.tsx",
  primitives: ["none"],
  variants: [],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: `import { Default } from "@/components/core/default";

<Spinner />`
    }
  ],
  a11yNotes: "Usually visually hidden unless inside aria-live.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add default",
  tags: ["feedback", "loading"]
};

export const dotted_roundMeta: ComponentMeta = {
  name: "dotted-round",
  displayName: "DottedRound",
  category: "core",
  tier: "free",
  description: "A dotted circular loading spinner indicator.",
  sourceFile: "apps/docs/src/registry/core/spinner/dotted-round.tsx",
  primitives: ["none"],
  variants: [],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: `import { DottedRound } from "@/components/core/dotted-round";

<DottedRoundSpinner />`
    }
  ],
  a11yNotes: "Inform AT users of loading states directly.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add dotted-round",
  tags: ["feedback", "loading"]
};

export const dottedMeta: ComponentMeta = {
  name: "dotted",
  displayName: "Dotted",
  category: "core",
  tier: "free",
  description: "A dotted inline loading spinner indicator.",
  sourceFile: "apps/docs/src/registry/core/spinner/dotted.tsx",
  primitives: ["none"],
  variants: [],
  props: [],
  examples: [
    {
      title: "Basic usage",
      code: `import { Dotted } from "@/components/core/dotted";

<DottedSpinner />`
    }
  ],
  a11yNotes: "Inform AT users of loading states directly.",
  darkModeSupport: true,
  installCommand: "npx @tailgrids/cli@latest add dotted",
  tags: ["feedback", "loading"]
};

export const allComponents: ComponentMeta[] = [
  accordionMeta,
  alert_dialogMeta,
  alertMeta,
  aspect_ratioMeta,
  avatarMeta,
  badgeMeta,
  breadcrumbsMeta,
  button_groupMeta,
  buttonMeta,
  cardMeta,
  carouselMeta,
  chartMeta,
  checkboxMeta,
  collapsibleMeta,
  commandMeta,
  context_menuMeta,
  dialogMeta,
  drawerMeta,
  dropdownMeta,
  fieldMeta,
  hover_cardMeta,
  input_groupMeta,
  inputMeta,
  labelMeta,
  linkMeta,
  listMeta,
  menubarMeta,
  modalMeta,
  native_selectMeta,
  navigation_menuMeta,
  otp_inputMeta,
  paginationMeta,
  popoverMeta,
  progressMeta,
  radio_inputMeta,
  resizableMeta,
  scroll_areaMeta,
  selectMeta,
  separatorMeta,
  sheetMeta,
  sidebarMeta,
  skeletonMeta,
  sliderMeta,
  social_buttonMeta,
  tableMeta,
  tabsMeta,
  text_areaMeta,
  time_pickerMeta,
  toastMeta,
  toggleMeta,
  tooltipMeta,
  comboboxMeta,
  multi_comboboxMeta,
  date_pickerMeta,
  range_dateMeta,
  single_dateMeta,
  spinnerMeta,
  defaultMeta,
  dotted_roundMeta,
  dottedMeta
];
