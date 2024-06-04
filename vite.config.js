import * as path from 'node:path';
import * as fs from 'node:fs';

import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint2';
import reactPlugin from '@vitejs/plugin-react';
import stylelintPlugin from 'vite-plugin-stylelint';
import svgrPlugin from 'vite-plugin-svgr';

import stylelintConfig from './stylelint.config';
import svgoConfig from './svgo.config';

export default defineConfig({
  base: '/elements/',
  css: {
    modules: {
      getJSON: (cssFileName, json) => {
        const module = path.basename(cssFileName, '.scss');

        fs.mkdir('./modules', {recursive: true}, (error) => {
          if (error) throw error;

          fs.writeFileSync(`./modules/${module}.json`, JSON.stringify(json));
        });
      },
    },
  },
  plugins: [
    stylelintPlugin({
      lintInWorker: true,
      config: stylelintConfig,
    }),
    svgrPlugin({
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: svgoConfig,
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
