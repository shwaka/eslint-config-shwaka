import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { eslintConfigShwakaReact } from 'eslint-config-shwaka'

export default tseslint.config(
  ...eslintConfigShwakaReact,
  { ignores: ['dist'] },
  {
    // ↓これがあると Cannot redefine plugin "@typescript-eslint" って出る
    // extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    linterOptions: {
      reportUnusedDisableDirectives: "error"
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      // ↓これがあると Cannot redefine plugin "react-hooks" って出る
      // 'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
