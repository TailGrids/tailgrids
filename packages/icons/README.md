# @tailgrids/icons

Beautiful React icon components for Tailgrids - A comprehensive collection of 180+ high-quality SVG icons built with TypeScript and React.

## Installation

Install the package using your preferred package manager:

### npm

```bash
npm i @tailgrids/icons
```

### yarn

```bash
yarn add @tailgrids/icons
```

### pnpm

```bash
pnpm add @tailgrids/icons
```

## Usage

Import the icons you need and use them as React components:

### Basic Usage

```jsx
import { ArrowLeftSquare, FourK } from '@tailgrids/icons';

function App() {
  return (
    <div>
      <ArrowLeftSquare />
      <FourK />
    </div>
  );
}
```

### With Custom Props

```jsx
import { ArrowLeftSquare, FourK } from '@tailgrids/icons';

function App() {
  return (
    <div>
      {/* Custom size */}
      <ArrowLeftSquare size={35} />

      {/* With className for styling */}
      <FourK
        size={24}
        className="hover:scale-110 transition-transform cursor-pointer"
      />
    </div>
  );
}
```

## Props

All icon components accept the following props:

| Prop        | Type               | Default     | Description                            |
| ----------- | ------------------ | ----------- | -------------------------------------- |
| `size`      | `number \| string` | `24`        | Icon size (width and height in pixels) |
| `className` | `string`           | `undefined` | Additional CSS classes for styling     |
| `...props`  | `SVGProps`         | -           | All standard SVG element props         |

All icons also inherit standard SVG props through `React.SVGProps<SVGSVGElement>`, giving you full control over SVG attributes.

## Available Icons

The package includes 170+ icons. Here are some examples:

- `ArrowLeftSquare` - Square arrow pointing left
- `FourK` - 4K display icon
- `Heart` - Heart shape
- `StarFat` - Filled star
- `Check` - Check mark
- `Xmark2x` - Close/X mark
- `SearchPlus` - Magnifying glass with plus
- `UserMultiple4` - Multiple users
- `Bell1` - Notification bell
- `Camera1` - Camera icon

And many more! Check the source code or package exports for the complete list.

## TypeScript Support

This package is built with TypeScript and includes full type definitions out of the box.

## Peer Dependencies

- React >= 18.0.0
- React DOM >= 18.0.0

## Browser Support

Works in all modern browsers that support ES6+ and SVG.

## Author

**Tailgrids**

---

## Links

- [📖 Documentation](https://tailgrids.com/docs)
- [💬 Support](https://tailgrids.com/support)
