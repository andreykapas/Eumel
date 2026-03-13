import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.js'],
    plugins: { js, prettier },
    extends: ['js/recommended'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  prettierConfig,
]);
