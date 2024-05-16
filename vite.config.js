import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/elements/',
  define: {
    __GITHUB__: JSON.stringify('https://github.com/brybrant/elements'),
  },
  plugins: [
    svgr({
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
    react(),
    eslintPlugin({
      eslintOptions: {
        cache: true,
        cacheStrategy: 'content',
      },
      formatter: 'stylish',
    }),
  ],
  server: {
    host: '127.0.0.1',
    port: 3000,
    strictPort: true,
  },
});
