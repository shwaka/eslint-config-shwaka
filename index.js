// @ts-check
import js from '@eslint/js'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'
import importPlugin from 'eslint-plugin-import'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import stylisticTs from '@stylistic/eslint-plugin-ts'

const importOrderOptions = {
  "groups": ["builtin", "external", "internal"],
  "pathGroups": [
    {
      "pattern": "react",
      "group": "external",
      "position": "before"
    }
  ],
  "pathGroupsExcludedImportTypes": ["react"],
  "newlines-between": "always",
  "alphabetize": {
    "order": "asc",
    "caseInsensitive": true
  },
}

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
      "no-restricted-globals": [
        "error",
        ...["open", "close", "location"].map((name) => (
          { name, message: `Use window.${name} instead.`}
        )),
        // event と fdescribe は
        // 公式ドキュメント (https://eslint.org/docs/latest/rules/no-restricted-globals)
        // からコピペ
        { name: "event", message: "Use local parameter instead." },
        { name: "fdescribe", message: "Use describe instead." },
        // isFinite と isNaN は
        // https://zenn.dev/noshiro_piko/articles/take-full-advantage-of-typescript-eslint#%E4%B8%80%E9%83%A8%E3%81%AE%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%90%E3%83%AB%E5%A4%89%E6%95%B0%E3%81%AE%E4%BD%BF%E7%94%A8%E3%82%92%E7%A6%81%E6%AD%A2
        // からコピペ
        { "name": "isFinite", "message": "Use Number.isFinite instead." },
        { "name": "isNaN", "message": "Use Number.isNaN instead." },
      ],
      // "semi": ["error", "never"], // use @stylistic/ts
      "@typescript-eslint/explicit-function-return-type": [
        2,
        { "allowExpressions": true }
      ],
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-unused-vars": "off", // provided by "unused-imports"
      // ↓元々はno-unused-expressionsに関する設定は何もしていなかったが，
      // eslint v9 で「オプションが未定義」というようなエラーが出たので，
      // とりあえず明示的に無効化することにした．
      // 有効化したいときは allowShortCircuit などのオプションを指定する必要があるっぽい？
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-empty-function": ["warn", {
        allow: []
      }],
      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
          "allowString": false,
          "allowNumber": false,
        }
      ],
      "@typescript-eslint/restrict-plus-operands": [
        "error",
        {
          "allowBoolean": false,
          "allowNullish": false,
          "allowNumberAndString": false,
          "allowRegExp": false,
          "allowAny": false,
        }
      ],
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
      ],
      "sort-imports": 0,
      "import/order": ["error", importOrderOptions],
      "import/named": 0, // Language not found in 'prism-react-renderer'
      "import/no-unresolved": 0, // ちゃんと設定できてないせいか大量に出てきてしまう
    }
  }
)

export const eslintConfigShwakaImport = tseslint.config(
  tseslint.configs.base,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
    plugins: {
      "import": importPlugin
    },
    rules: {
      "import/order": ["error", importOrderOptions],
    }
  },
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
