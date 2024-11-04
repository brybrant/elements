import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint2';
import reactPlugin from '@vitejs/plugin-react';
import stylelintPlugin from 'vite-plugin-stylelint';
import svgoPlugin from 'vite-plugin-svgo';

import * as configs from '@brybrant/configs';

export default defineConfig(({ mode }) => {
  const development = mode === 'development';

  return {
    base: '/elements/',
    build: {
      minify: development ? true : 'terser',
      terserOptions: {
        compress: {
          booleans_as_integers: true,
          drop_console: true,
          module: true,
          passes: 2,
        },
        mangle: {
          module: true,
        },
        format: {
          comments: false,
        },
      },
    },
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
      svgoPlugin(configs.svgoConfig),
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
  };
});
