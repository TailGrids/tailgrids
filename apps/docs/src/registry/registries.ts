import type { Registry } from '@/types/registry';

export const REGISTRIES: Registry[] = [
  {
    id: 'accordion',
    name: 'Accordion',
    description:
      'Fully accessible accordion component with multiple style variants',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/accordion.tsx',
      },
    ],
    dependencies: ['class-variance-authority'],
  },
  {
    id: 'alert',
    name: 'Alert',
    description:
      'Dismissible alert component with multiple variants, and action buttons.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/alert.tsx',
      },
    ],
    dependencies: ['class-variance-authority'],
    requires: ['button'],
  },
  {
    id: 'avatar',
    name: 'Avatar',
    description: 'An image element with a fallback for representing a user.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/avatar/index.tsx',
      },
    ],
    dependencies: ['class-variance-authority'],
  },
  {
    id: 'avatar-group',
    name: 'Avatar Group',
    description: 'A component to group multiple avatars together.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/avatar/avatar-group.tsx',
      },
    ],
    requires: ['avatar'],
  },
  {
    id: 'badge',
    name: 'Badge',
    description:
      'Badge component with multiple colors, sizes, and support for prefix/suffix icons.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/badge.tsx',
      },
    ],
    dependencies: ['class-variance-authority'],
  },
  {
    id: 'breadcrumbs',
    name: 'Breadcrumbs',
    description:
      'Breadcrumbs component with multiple variants and support for icons.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/breadcrumbs.tsx',
      },
    ],
  },
  {
    id: 'button',
    name: 'Button',
    description:
      'Button component with multiple variants, sizes, and support for icons.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/button.tsx',
      },
    ],
    dependencies: ['class-variance-authority'],
  },
  {
    id: 'button-group',
    name: 'Button Group',
    description: 'A component with multiple buttons grouped together.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/button-group.tsx',
      },
    ],
    dependencies: ['class-variance-authority'],
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    description: 'A checkbox component with label and multiple states.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/checkbox.tsx',
      },
    ],
    dependencies: ['class-variance-authority', '@tailgrids/icons'],
  },
  {
    id: 'date-picker',
    name: 'Date Picker',
    description: 'A component to select a date or a range of dates.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/date-picker/single-date.tsx',
      },
      {
        type: 'ui',
        path: '/core/date-picker/range-date.tsx',
      },
    ],
    dependencies: ['react-stately', 'date-fns'],
  },
  {
    id: 'dropdown',
    name: 'Dropdown',
    description:
      'A dropdown component with multiple variants and support for icons.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/dropdown.tsx',
      },
    ],
    dependencies: ['react-aria-components'],
  },
  {
    id: 'input',
    name: 'Input',
    description:
      'An input component with multiple variants and support for icons.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/input.tsx',
      },
    ],
    dependencies: ['class-variance-authority'],
  },
  {
    id: 'link',
    name: 'Link',
    description: 'A link component with multiple variants.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/link.tsx',
      },
    ],
    dependencies: ['class-variance-authority'],
  },
  {
    id: 'list',
    name: 'List',
    description: 'A list component with multiple variants.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/list.tsx',
      },
    ],
    dependencies: ['class-variance-authority'],
  },
  {
    id: 'otp-input',
    name: 'OTP Input',
    description: 'A component for entering one-time passwords.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/otp-input.tsx',
      },
    ],
  },
  {
    id: 'pagination',
    name: 'Pagination',
    description: 'A component for navigating between pages.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/pagination.tsx',
      },
    ],
    dependencies: ['class-variance-authority'],
  },
  {
    id: 'popover',
    name: 'Popover',
    description: 'A popover component with multiple variants.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/popover.tsx',
      },
    ],
    dependencies: ['@floating-ui/react'],
  },
  {
    id: 'progress',
    name: 'Progress',
    description: 'A progress bar component with multiple variants.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/progress.tsx',
      },
    ],
  },
  {
    id: 'radio-input',
    name: 'Radio Input',
    description: 'A radio button component with label and multiple states.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/radio-input.tsx',
      },
    ],
    dependencies: ['class-variance-authority'],
  },
  {
    id: 'skeleton',
    name: 'Skeleton',
    description: 'A component to indicate a loading state.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/skeleton.tsx',
      },
    ],
  },
  {
    id: 'social-button',
    name: 'Social Button',
    description: 'A button component for social media actions.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/social-button.tsx',
      },
    ],
    requires: ['button'],
  },
  {
    id: 'spinner',
    name: 'Spinner',
    description: 'A spinner component to indicate a loading state.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/spinner/index.tsx',
      },
      {
        type: 'ui',
        path: '/core/spinner/default.svg',
      },
      {
        type: 'ui',
        path: '/core/spinner/dotted.svg',
      },
      {
        type: 'ui',
        path: '/core/spinner/dotted-round.svg',
      },
    ],
  },
  {
    id: 'table',
    name: 'Table',
    description: 'A table component with multiple variants.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/table.tsx',
      },
    ],
    dependencies: ['class-variance-authority'],
  },
  {
    id: 'tabs',
    name: 'Tabs',
    description: 'A tabs component with multiple variants.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/tabs.tsx',
      },
    ],
    dependencies: ['class-variance-authority'],
    requires: ['badge'],
  },
  {
    id: 'text-area',
    name: 'Text Area',
    description: 'A text area component with multiple variants.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/text-area.tsx',
      },
    ],
    dependencies: ['class-variance-authority'],
  },
  {
    id: 'time-picker',
    name: 'Time Picker',
    description: 'A component to select a time.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/time-picker.tsx',
      },
    ],
    dependencies: ['react-aria-components'],
  },
  {
    id: 'toast',
    name: 'Toast',
    description: 'A toast component for displaying notifications.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/toast.tsx',
      },
    ],
    dependencies: ['class-variance-authority'],
    requires: ['avatar'],
  },
  {
    id: 'toggle',
    name: 'Toggle',
    description: 'A toggle switch component.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/toggle.tsx',
      },
    ],
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    description: 'A tooltip component.',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/core/tooltip.tsx',
      },
    ],
    dependencies: ['@floating-ui/react'],
  },
];
