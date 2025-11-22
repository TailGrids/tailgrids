import fs from 'fs-extra';
import path from 'path';
import { transform } from '@svgr/core';
import { transformSync } from '@babel/core';

// Utility: Convert "arrow-left" → "ArrowLeft"
function pascalCase(str: string): string {
  return str.replace(/(^\w|-\w)/g, (c) => c.replace('-', '').toUpperCase());
}

const SRC_DIR = path.join(process.cwd(), './src/icons');
const OUT_DIR = 'dist/icons';
const TMP_DIR = 'tmp/icons';

async function buildIcons() {
  await preprocessSVGs();

  await fs.remove('dist');
  await fs.ensureDir(OUT_DIR);

  const files = await fs.readdir(TMP_DIR);
  const exports: string[] = [];

  for (const file of files) {
    if (!file.endsWith('.svg')) continue;

    const svgPath = path.join(TMP_DIR, file);
    const svgCode = await fs.readFile(svgPath, 'utf8');

    const name = pascalCase(file.replace('.svg', ''));

    const componentCode = await transform(
      svgCode,
      {
        jsxRuntime: 'classic',
        plugins: ['@svgr/plugin-jsx'],
        prettier: false,
        svgo: false,
        template: ({ componentName, jsx, exports }, { tpl }) => tpl`
          import * as React from 'react';

          const ${componentName} = ({ size = 24, ...props }) =>
            React.cloneElement(${jsx}, { width: size, height: size, ...props });

          ${exports}
        `,
      },
      { componentName: name }
    );

    const jsCode =
      transformSync(componentCode, {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'classic' }],
        ],
        filename: `${name}.js`,
      })?.code || componentCode;

    const jsPath = path.join(OUT_DIR, `${name}.js`);
    await fs.writeFile(jsPath, jsCode, 'utf8');

    const dtsPath = path.join(OUT_DIR, `${name}.d.ts`);
    const dtsContent = `
import * as React from 'react';

declare const ${name}: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }>;
export default ${name};
`.trimStart();

    await fs.writeFile(dtsPath, dtsContent, 'utf8');

    exports.push(name);
  }

  const indexJs = exports
    .map((n) => `export { default as ${n} } from './icons/${n}.js';`)
    .join('\n');

  await fs.writeFile('dist/index.js', indexJs, 'utf8');

  const indexDts = exports
    .map(
      (n) =>
        `export const ${n}: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }>;`
    )
    .join('\n');

  await fs.writeFile('dist/index.d.ts', indexDts, 'utf8');

  await fs.remove('tmp');
  console.log(`Built ${exports.length} icons`);
}

buildIcons();

async function preprocessSVGs() {
  await fs.remove(TMP_DIR);
  await fs.ensureDir(TMP_DIR);

  const files = await fs.readdir(SRC_DIR);

  for (const file of files) {
    if (!file.endsWith('.svg')) continue;

    const svgPath = path.join(SRC_DIR, file);
    let svgCode = await fs.readFile(svgPath, 'utf8');

    svgCode = svgCode
      .replace(/fill="(?!none")[^"]*"/gi, 'fill="currentColor"')
      .replace(/fill='(?!none')[^']*'/gi, "fill='currentColor'");

    svgCode = svgCode
      .replace(/stroke="(?!none")[^"]*"/gi, 'stroke="currentColor"')
      .replace(/stroke='(?!none')[^']*'/gi, "stroke='currentColor'");

    const outPath = path.join(TMP_DIR, file);
    await fs.writeFile(outPath, svgCode, 'utf8');
  }
}
