import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint2';
import reactPlugin from '@vitejs/plugin-react';
import stylelintPlugin from 'vite-plugin-stylelint';
import svgrPlugin from 'vite-plugin-svgr';

import * as configs from '@brybrant/configs';

export default defineConfig({
  base: '/elements/',
  css: {
    modules: {
      getJSON: configs.cssModulesExportJSON,
    },
    postcss: configs.postCSSConfig,
  },
  plugins: [
    stylelintPlugin({
      lintInWorker: true,
      config: configs.stylelintConfig,
    }),
    svgrPlugin({
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: configs.svgoConfig,
      },
    }),
    reactPlugin(),
    eslintPlugin({
      lintInWorker: true,
    }),
  ],
  server: {
    host: '127.0.0.1',
    port: 3000,
    strictPort: true,
  },
});
