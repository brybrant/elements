import viteConfig from '@brybrant/vite-config';

import reactPlugin from '@vitejs/plugin-react';

export default viteConfig({
  base: '/elements/',
  cssmodules: true,
  plugins: [reactPlugin()],
});
