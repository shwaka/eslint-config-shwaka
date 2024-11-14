// @ts-check
import js from '@eslint/js'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'
import importPlugin from 'eslint-plugin-import'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import stylisticTs from '@stylistic/eslint-plugin-ts'

export const eslintConfigShwakaBasic = tseslint.config(
  js.configs.recommended,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    name: "shwaka/base",
    plugins: {
      "unused-imports": unusedImports,
      "import": importPlugin,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname, // See note in https://typescript-eslint.io/getting-started/typed-linting/
      },
    },
    rules: {
      "indent": [
        "error",
        2,
        {"SwitchCase": 1},
      ],
      "linebreak-style": [
        "error",
        "unix"
      ],
      "quotes": [
        "error",
        "double",
        { "avoidEscape": true }
      ],
      "no-implicit-coercion": "error",
      // "semi": ["error", "never"], // use @stylistic/ts
      "@typescript-eslint/explicit-function-return-type": [
        2,
        { "allowExpressions": true }
      ],
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-unused-vars": "off", // provided by "unused-imports"
      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
          "allowString": false,
          "allowNumber": false,
        }
      ],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
      ],
      "sort-imports": 0,
      "import/order": [2, { "alphabetize": { "order": "asc" } }],
      "import/named": 0, // Language not found in 'prism-react-renderer'
      "import/no-unresolved": 0, // ちゃんと設定できてないせいか大量に出てきてしまう
    }
  }
)

export const eslintConfigShwakaStylistic = tseslint.config(
  ...eslintConfigShwakaBasic,
  {
    name: "shwaka/stylistic",
    plugins: {
      // @ts-ignore
      "@stylistic/ts": stylisticTs,
    },
    rules: {
      "@stylistic/ts/semi": ["error", "never"],
      "@stylistic/ts/member-delimiter-style": [
        "error",
        {
          "multiline": {
            "delimiter": "none",
          },
          "singleline": {
            "delimiter": "comma",
            "requireLast": false,
          }
        }
      ],
    },
  },
)

export const eslintConfigShwakaReact = tseslint.config(
  ...eslintConfigShwakaBasic,
  ...eslintConfigShwakaStylistic,
  {
    name: "shwaka/react",
    plugins: {
      // @ts-ignore
      "react": reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      "react/jsx-fragments": ["error", "element"], // <> ではなく <Fragment> を使う
      "react/jsx-no-leaked-render": ["error", {
        "validStrategies": ["ternary"]
      }],
      ...reactHooksPlugin.configs.recommended.rules,
    },
    settings: {
      react: {
        version: "detect", // for eslint-plugin-react
      },
    },
  },
)

export const eslintConfigShwaka = eslintConfigShwakaReact

export default eslintConfigShwaka

// 以下は flat config に対応する前のもの
/** @type {import("eslint").Linter.Config} */
// module.exports = {...} とすると型チェックが何故か働かないので，変数定義を挟む
// const config = {
//   "env": {
//     "browser": true,
//     "es2021": true
//   },
//   "extends": [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:react-hooks/recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:import/errors"
//   ],
//   "parser": "@typescript-eslint/parser",
//   "parserOptions": {
//     "ecmaFeatures": {
//       "jsx": true
//     },
//     // @ts-expect-error type上では何故か12までしか許容されない(けど実行時は大丈夫っぽい？)
//     "ecmaVersion": 13,
//     "sourceType": "module",
//     "project": ["./tsconfig.json"], // added for @typescript-eslint/strict-boolean-expressions
//   },
//   "plugins": [
//     "react",
//     "react-hooks",
//     "@typescript-eslint",
//     "unused-imports"
//   ],
// }
//
// module.exports = config
