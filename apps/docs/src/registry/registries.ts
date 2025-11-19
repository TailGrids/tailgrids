import type { Registry } from '@/types/registry';

export const REGISTRIES: Registry[] = [
  {
    id: 'button',
    name: 'Button',
    description: 'A customizable button component',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/components/button.tsx',
      },
    ],
  },
  {
    id: 'dropdown',
    name: 'Dropdown',
    description: 'Interactive dropdown menu',
    type: 'component',
    files: [
      {
        type: 'ui',
        path: '/components/dropdown.tsx',
      },
    ],
    dependencies: ['@floating-ui/react'],
    requires: ['button'],
  },
  {
    id: 'pricing-section',
    name: 'Pricing Section',
    description: 'Fully featured pricing block',
    type: 'block',
    files: [
      {
        type: 'block',
        path: '/blocks/pricing/index.tsx',
      },
    ],
    dependencies: ['@heroicons/react'],
    requires: ['button', 'dropdown'],
  },
];
