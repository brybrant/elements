import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint2';
import stylelintPlugin from 'vite-plugin-stylelint';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  base: '/elements/',
  define: {
    __GITHUB__: JSON.stringify('https://github.com/brybrant/elements'),
  },
  plugins: [
    // https://stylelint.io/user-guide/configure/
    // https://stylelint.io/awesome-stylelint/
    stylelintPlugin({
      lintInWorker: true,
      // rules: {},
      config: {
        cache: true,
        extends: [
          'stylelint-config-standard-scss',
          'stylelint-config-prettier-scss',
          'stylelint-config-hudochenkov/order',
        ],
        fix: false,
        plugins: [
          'stylelint-high-performance-animation',
        ],
        rules: {
          'hue-degree-notation': 'number',
          'selector-pseudo-element-colon-notation': 'single',
          'value-keyword-case': ['lower', {
            camelCaseSvgKeywords: true
          }],
          'plugin/no-low-performance-animation-properties': true
        },
      },
    }),
    svgrPlugin({
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        // https://svgo.dev/docs/plugins/
        svgoConfig: {
          plugins: [
            'removeDoctype',
            'removeXMLProcInst',
            'removeXMLNS',
            'removeComments',
            'removeMetadata',
            'removeEditorsNSData',
            'removeDimensions',
            'cleanupAttrs',
            'mergeStyles',
            'inlineStyles',
            'minifyStyles',
            'removeUselessDefs',
            'cleanupNumericValues',
            'convertColors',
            'removeUnknownsAndDefaults',
            'removeNonInheritableGroupAttrs',
            'removeUselessStrokeAndFill',
            'removeHiddenElems',
            'removeEmptyText',
            'convertShapeToPath',
            'convertEllipseToCircle',
            'moveElemsAttrsToGroup',
            'moveGroupAttrsToElems',
            'collapseGroups',
            'convertPathData',
            'convertTransform',
            'removeEmptyAttrs',
            'removeEmptyContainers',
            'removeUnusedNS',
            'reusePaths',
            'mergePaths',
            'cleanupListOfValues',
            'sortAttrs',
            'sortDefsChildren',
            'removeTitle',
            'removeDesc',
            'removeXlink',
          ],
        }
      },
    }),
    reactPlugin(),
    eslintPlugin(),
  ],
  server: {
    host: '127.0.0.1',
    port: 3000,
    strictPort: true,
  },
});
