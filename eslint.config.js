import react from 'eslint-plugin-react';
import globals from 'globals';

import { eslintConfig } from '@brybrant/configs';

export default eslintConfig(react.configs.flat.recommended, {
  files: ['**/*.jsx'],
  languageOptions: {
    globals: {
      ...globals.browser,
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    react,
  },
  rules: {
    'react/react-in-jsx-scope': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
});
