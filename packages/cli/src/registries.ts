import type { Registry } from "./types/registry.ts";

export const REGISTRIES: Registry[] = [
  {
    id: "accordion",
    name: "Accordion",
    description:
      "Fully accessible accordion component with multiple style variants",
    type: "component",
    exampleCount: 6,
    files: [
      {
        type: "core",
        path: "/core/accordion.tsx"
      }
    ],
    dependencies: ["class-variance-authority", "@tailgrids/icons"]
  },
  {
    id: "alert",
    name: "Alert",
    description:
      "Dismissible alert component with multiple variants, and action buttons.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/alert.tsx"
      }
    ],
    dependencies: ["class-variance-authority", "@tailgrids/icons"],
    exampleCount: 3,
    requires: ["button"]
  },
  {
    id: "alert-dialog",
    name: "Alert Dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/alert-dialog.tsx"
      }
    ],
    dependencies: ["react-aria-components"],
    exampleCount: 3,
    requires: ["button"]
  },
  {
    id: "aspect-ratio",
    name: "Aspect Ratio",
    description:
      "Aspect ratio component to maintain the aspect ratio of an element.",
    type: "component",
    exampleCount: 3,
    files: [
      {
        type: "core",
        path: "/core/aspect-ratio.tsx"
      }
    ],
    dependencies: ["class-variance-authority"]
  },
  {
    id: "avatar",
    name: "Avatar",
    description: "An image element with a fallback for representing a user.",
    type: "component",
    exampleCount: 4,
    files: [
      {
        type: "core",
        path: "/core/avatar.tsx"
      }
    ],
    dependencies: ["class-variance-authority"]
  },
  {
    id: "badge",
    name: "Badge",
    description:
      "Badge component with multiple colors, sizes, and support for prefix/suffix icons.",
    type: "component",
    exampleCount: 4,
    files: [
      {
        type: "core",
        path: "/core/badge.tsx"
      }
    ],
    dependencies: ["class-variance-authority"]
  },
  {
    id: "breadcrumbs",
    name: "Breadcrumbs",
    description:
      "Breadcrumbs component with multiple variants and support for icons.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/breadcrumbs.tsx"
      }
    ],
    dependencies: ["@tailgrids/icons"],
    exampleCount: 2
  },
  {
    id: "button",
    name: "Button",
    description:
      "Button component with multiple variants, sizes, and support for icons.",
    type: "component",
    exampleCount: 6,
    files: [
      {
        type: "core",
        path: "/core/button.tsx"
      }
    ],
    dependencies: ["class-variance-authority"]
  },
  {
    id: "button-group",
    name: "Button Group",
    description: "A component with multiple buttons grouped together.",
    type: "component",
    exampleCount: 3,
    files: [
      {
        type: "core",
        path: "/core/button-group.tsx"
      }
    ],
    dependencies: ["class-variance-authority"]
  },
  {
    id: "card",
    name: "Card",
    description:
      "A card component with ultimate flexibility and customization.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/card.tsx"
      }
    ],
    exampleCount: 7
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description: "A checkbox component with label and multiple states.",
    type: "component",
    exampleCount: 3,
    files: [
      {
        type: "core",
        path: "/core/checkbox.tsx"
      }
    ],
    dependencies: ["class-variance-authority", "@tailgrids/icons"]
  },
  {
    id: "collapsible",
    name: "Collapsible",
    description:
      "A high-performance context menu component that appears when triggered by a right-click or long-press.",
    type: "component",
    exampleCount: 6,
    files: [
      {
        type: "core",
        path: "/core/collapsible.tsx"
      }
    ],
    dependencies: ["@base-ui/react", "@tailgrids/icons"]
  },
  {
    id: "context-menu",
    name: "Context Menu",
    description: "A context menu component with multiple variants.",
    type: "component",
    exampleCount: 3,
    files: [
      {
        type: "core",
        path: "/core/context-menu.tsx"
      }
    ],
    dependencies: ["react-aria-components"]
  },
  {
    id: "combobox",
    name: "Combobox",
    description: "A combobox component with multiple variants.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/combobox/combobox.tsx"
      },
      {
        type: "core",
        path: "/core/combobox/multi-combobox.tsx"
      }
    ],
    dependencies: ["react-aria-components", "@tailgrids/icons"],
    exampleCount: 10,
    requires: ["badge"]
  },
  {
    id: "command",
    name: "Command",
    description: "A command menu component with multiple variants.",
    type: "component",
    exampleCount: 3,
    files: [
      {
        type: "core",
        path: "/core/command.tsx"
      }
    ],
    dependencies: ["react-aria-components", "@tailgrids/icons"]
  },
  {
    id: "date-picker",
    name: "Date Picker",
    description: "A component to select a date or a range of dates.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/date-picker/single-date.tsx"
      },
      {
        type: "core",
        path: "/core/date-picker/range-date.tsx"
      }
    ],
    dependencies: ["react-stately", "date-fns", "@tailgrids/icons"],
    exampleCount: 2,
    requires: ["button"]
  },
  {
    id: "dialog",
    name: "Dialog",
    description:
      "A dialog component that display a modal overlay above the main page content.",
    type: "component",
    exampleCount: 8,
    files: [
      {
        type: "core",
        path: "/core/dialog.tsx"
      }
    ],
    dependencies: ["react-aria-components", "@tailgrids/icons"]
  },
  {
    id: "drawer",
    name: "Drawer",
    description:
      "A drawer component that slides in from the edge of the screen, typically used for navigation or displaying additional content.",
    type: "component",
    exampleCount: 4,
    files: [
      {
        type: "core",
        path: "/core/drawer.tsx"
      }
    ],
    dependencies: [
      "react-aria-components",
      "@tailgrids/icons",
      "class-variance-authority"
    ]
  },
  {
    id: "dropdown",
    name: "Dropdown",
    description:
      "A dropdown component with multiple variants and support for icons.",
    type: "component",
    exampleCount: 4,
    files: [
      {
        type: "core",
        path: "/core/dropdown.tsx"
      }
    ],
    dependencies: ["react-aria-components"]
  },
  {
    id: "field",
    name: "Field",
    description:
      "A field component with multiple variants and support for icons.",
    type: "component",
    exampleCount: 5,
    files: [
      {
        type: "core",
        path: "/core/field.tsx"
      }
    ],
    dependencies: ["class-variance-authority", "react-aria-components"]
  },
  {
    id: "hover-card",
    name: "Hover Card",
    description:
      "A hover card component that displays information when the user hovers over an element.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/hover-card.tsx"
      }
    ],
    dependencies: ["@base-ui/react"],
    exampleCount: 4
  },
  {
    id: "input",
    name: "Input",
    description:
      "An input component with multiple variants and support for icons.",
    type: "component",
    exampleCount: 5,
    files: [
      {
        type: "core",
        path: "/core/input.tsx"
      }
    ],
    dependencies: ["class-variance-authority"]
  },
  {
    id: "input-group",
    name: "Input Group",
    description:
      "An input group component with multiple variants and support for icons.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/input-group.tsx"
      }
    ],
    dependencies: ["class-variance-authority"],
    exampleCount: 4,
    requires: ["input", "text-area"]
  },
  {
    id: "label",
    name: "Label",
    description: "A label component for form fields.",
    type: "component",
    exampleCount: 2,
    files: [
      {
        type: "core",
        path: "/core/label.tsx"
      }
    ],
    dependencies: ["react-aria-components"]
  },
  {
    id: "link",
    name: "Link",
    description: "A link component with multiple variants.",
    type: "component",
    exampleCount: 4,
    files: [
      {
        type: "core",
        path: "/core/link.tsx"
      }
    ],
    dependencies: ["class-variance-authority"]
  },
  {
    id: "list",
    name: "List",
    description: "A list component with multiple variants.",
    type: "component",
    exampleCount: 9,
    files: [
      {
        type: "core",
        path: "/core/list.tsx"
      }
    ],
    dependencies: ["class-variance-authority"]
  },
  {
    id: "menubar",
    name: "Menubar",
    description:
      "A responsive menu bar component that provides a horizontal row of menu triggers, each opening a dropdown menu.",
    type: "component",
    exampleCount: 4,
    files: [
      {
        type: "core",
        path: "/core/menubar.tsx"
      }
    ],
    dependencies: ["@base-ui/react", "@tailgrids/icons"]
  },
  // {
  //   id: "modal",
  //   name: "Modal",
  //   description:
  //     "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
  //   type: "component",
  //   files: [
  //     {
  //       type: "core",
  //       path: "/core/modal.tsx"
  //     }
  //   ]
  // },
  {
    id: "native-select",
    name: "Native Select",
    description: "A native select component with multiple variants.",
    type: "component",
    exampleCount: 4,
    files: [
      {
        type: "core",
        path: "/core/native-select.tsx"
      }
    ],
    dependencies: ["class-variance-authority", "@tailgrids/icons"]
  },
  {
    id: "otp-input",
    name: "OTP Input",
    description: "A component for entering one-time passwords.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/otp-input.tsx"
      }
    ],
    exampleCount: 5
  },
  {
    id: "pagination",
    name: "Pagination",
    description: "A component for navigating between pages.",
    type: "component",
    exampleCount: 5,
    files: [
      {
        type: "core",
        path: "/core/pagination.tsx"
      }
    ],
    dependencies: ["class-variance-authority", "@tailgrids/icons"],
    requires: ["button"]
  },
  {
    id: "popover",
    name: "Popover",
    description: "A popover component with multiple variants.",
    type: "component",
    exampleCount: 5,
    files: [
      {
        type: "core",
        path: "/core/popover.tsx"
      }
    ],
    dependencies: ["@floating-ui/react"]
  },
  {
    id: "progress",
    name: "Progress",
    description: "A progress bar component with multiple variants.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/progress.tsx"
      }
    ],
    exampleCount: 3
  },
  {
    id: "radio-input",
    name: "Radio Input",
    description: "A radio button component with label and multiple states.",
    type: "component",
    exampleCount: 7,
    files: [
      {
        type: "core",
        path: "/core/radio-input.tsx"
      }
    ],
    dependencies: ["class-variance-authority"]
  },
  {
    id: "resizable",
    name: "Resizable",
    description:
      "Accessible resizable panel groups and layouts with keyboard support.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/resizable.tsx"
      }
    ],
    dependencies: ["react-resizable-panels"],
    exampleCount: 3
  },
  {
    id: "scroll-area",
    name: "Scroll Area",
    description: "A scroll area component to add scrollbars to an element.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/scroll-area.tsx"
      }
    ],
    dependencies: ["class-variance-authority", "@base-ui/react"],
    exampleCount: 3
  },
  {
    id: "select",
    name: "Select",
    description: "A select component with multiple variants.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/select.tsx"
      }
    ],
    dependencies: ["react-aria-components", "@tailgrids/icons"],
    exampleCount: 9,
    requires: ["button"]
  },
  {
    id: "separator",
    name: "Separator",
    description: "A separator component to separate content.",
    type: "component",
    exampleCount: 1,
    files: [
      {
        type: "core",
        path: "/core/separator.tsx"
      }
    ],
    dependencies: ["class-variance-authority", "react-aria-components"]
  },
  {
    id: "sheet",
    name: "Sheet",
    description:
      "A sheet component that slides in from the edge of the screen, typically used for navigation or displaying additional content.",
    type: "component",
    exampleCount: 4,
    files: [
      {
        type: "core",
        path: "/core/sheet.tsx"
      }
    ],
    dependencies: [
      "react-aria-components",
      "@tailgrids/icons",
      "class-variance-authority"
    ]
  },
  {
    id: "skeleton",
    name: "Skeleton",
    description: "A component to indicate a loading state.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/skeleton.tsx"
      }
    ],
    exampleCount: 9
  },
  {
    id: "slider",
    name: "Slider",
    description: "A slider component to select a value from a range.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/slider.tsx"
      }
    ],
    dependencies: ["react-aria-components", "react-stately"],
    exampleCount: 5
  },
  {
    id: "social-button",
    name: "Social Button",
    description: "A button component for social media actions.",
    type: "component",
    exampleCount: 3,
    files: [
      {
        type: "core",
        path: "/core/social-button.tsx"
      }
    ],
    requires: ["button"]
  },
  {
    id: "spinner",
    name: "Spinner",
    description: "A spinner component to indicate a loading state.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/spinner/index.tsx"
      },
      {
        type: "core",
        path: "/core/spinner/default.tsx"
      },
      {
        type: "core",
        path: "/core/spinner/dotted.tsx"
      },
      {
        type: "core",
        path: "/core/spinner/dotted-round.tsx"
      }
    ],
    exampleCount: 4
  },
  {
    id: "table",
    name: "Table",
    description: "A table component with multiple variants.",
    type: "component",
    exampleCount: 4,
    files: [
      {
        type: "core",
        path: "/core/table.tsx"
      }
    ],
    dependencies: ["class-variance-authority"]
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "A tabs component with multiple variants.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/tabs.tsx"
      }
    ],
    dependencies: ["class-variance-authority"],
    exampleCount: 5,
    requires: ["badge"]
  },
  {
    id: "text-area",
    name: "Text Area",
    description: "A text area component with multiple variants.",
    type: "component",
    exampleCount: 5,
    files: [
      {
        type: "core",
        path: "/core/text-area.tsx"
      }
    ],
    dependencies: ["class-variance-authority"]
  },
  {
    id: "time-picker",
    name: "Time Picker",
    description: "A component to select a time.",
    type: "component",
    exampleCount: 3,
    files: [
      {
        type: "core",
        path: "/core/time-picker.tsx"
      }
    ],
    dependencies: ["react-aria-components"]
  },
  {
    id: "toast",
    name: "Toast",
    description: "A toast component for displaying notifications.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/toast.tsx"
      }
    ],
    dependencies: ["class-variance-authority", "@tailgrids/icons"],
    exampleCount: 5,
    requires: ["avatar", "button", "link"]
  },
  {
    id: "toggle",
    name: "Toggle",
    description: "A toggle switch component.",
    type: "component",
    files: [
      {
        type: "core",
        path: "/core/toggle.tsx"
      }
    ],
    exampleCount: 3
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "A tooltip component.",
    type: "component",
    exampleCount: 3,
    files: [
      {
        type: "core",
        path: "/core/tooltip.tsx"
      }
    ],
    dependencies: ["@floating-ui/react"]
  }
];
