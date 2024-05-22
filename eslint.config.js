import js from '@eslint/js';
import eslintPluginReact from 'eslint-plugin-react/configs/recommended.js';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,
  eslintPluginReact,
  eslintPluginPrettier,
  {
    'prettier/prettier': [
      {
        'endOfLine': 'auto',
      },
    ],
  },
];