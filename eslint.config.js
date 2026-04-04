import react from 'eslint-plugin-react';
import globals from 'globals';

import eslintConfig from '@brybrant/eslint-config';

export default eslintConfig({
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
  rules: Object.assign({}, react.configs.recommended.rules, {
    'react/react-in-jsx-scope': 0,
  }),
  settings: {
    react: {
      version: 'detect',
    },
  },
});
