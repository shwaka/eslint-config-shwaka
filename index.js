// @ts-check
import js from "@eslint/js"
import eslint from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"
import importPlugin from "eslint-plugin-import"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import unusedImports from "eslint-plugin-unused-imports"
import tseslint from "typescript-eslint"

const tsFiles = ["ts", "tsx", "mts", "cts"].map((ext) => `**/*.${ext}`)
const jsFiles = ["js", "jsx", "mjs", "cjs"].map((ext) => `**/*.${ext}`)

const eslintConfigShwakaImportOrder = tseslint.config(
  tseslint.configs.base,
  {
    name: "shwaka/import-order",
    plugins: {
      import: importPlugin
    },
    rules: {
      "import/order": ["error", {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before"
          }
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        },
      }],
    },
  },
)

const eslintConfigShwakaTseslint = tseslint.config(
  ...tseslint.configs.recommended,
  {
    name: "shwaka/tseslint-base",
    files: tsFiles.concat(jsFiles),
    rules: {
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-unused-vars": "off", // provided by "unused-imports"
      // ↓元々はno-unused-expressionsに関する設定は何もしていなかったが，
      // eslint v9 で「オプションが未定義」というようなエラーが出たので，
      // とりあえず明示的に無効化することにした．
      // 有効化したいときは allowShortCircuit などのオプションを指定する必要があるっぽい？
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
  {
    name: "shwaka/tseslint-ts",
    files: tsFiles,
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname, // See note in https://typescript-eslint.io/getting-started/typed-linting/
      },
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": [
        2,
        { allowExpressions: true }
      ],
      "@typescript-eslint/no-empty-function": ["warn", {
        allow: []
      }],
      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
          allowString: false,
          allowNumber: false,
        }
      ],
      "@typescript-eslint/restrict-plus-operands": [
        "error",
        {
          allowBoolean: false,
          allowNullish: false,
          allowNumberAndString: false,
          allowRegExp: false,
          allowAny: false,
        }
      ],
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/no-floating-promises": "error",
    },
  },
  {
    name: "shwaka/tseslint-js",
    files: jsFiles,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: null,
      },
    },
  },
)

export const eslintConfigShwakaBasic = tseslint.config(
  js.configs.recommended,
  eslint.configs.recommended,
  ...eslintConfigShwakaTseslint,
  {
    name: "shwaka/basic",
    plugins: {
      "unused-imports": unusedImports,
      import: importPlugin,
    },
    rules: {
      "no-implicit-coercion": "error",
      "no-restricted-globals": [
        "error",
        ...["open", "close", "location"].map((name) => (
          { name, message: `Use window.${name} instead.` }
        )),
        // event と fdescribe は
        // 公式ドキュメント (https://eslint.org/docs/latest/rules/no-restricted-globals)
        // からコピペ
        { name: "event", message: "Use local parameter instead." },
        { name: "fdescribe", message: "Use describe instead." },
        // isFinite と isNaN は
        // https://zenn.dev/noshiro_piko/articles/take-full-advantage-of-typescript-eslint#%E4%B8%80%E9%83%A8%E3%81%AE%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%90%E3%83%AB%E5%A4%89%E6%95%B0%E3%81%AE%E4%BD%BF%E7%94%A8%E3%82%92%E7%A6%81%E6%AD%A2
        // からコピペ
        { name: "isFinite", message: "Use Number.isFinite instead." },
        { name: "isNaN", message: "Use Number.isNaN instead." },
      ],
      // "semi": ["error", "never"], // use @stylistic/ts
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" }
      ],
      "sort-imports": 0,
      "import/named": 0, // Language not found in 'prism-react-renderer'
      "import/no-unresolved": 0, // ちゃんと設定できてないせいか大量に出てきてしまう
    }
  }
)

export const eslintConfigShwakaStylistic = tseslint.config(
  tseslint.configs.base,
  stylistic.configs.customize({
    indent: 2,
    quotes: "double",
    semi: false,
    jsx: true,
    arrowParens: true,
    braceStyle: "1tbs",
    quoteProps: "as-needed",
  }),
  {
    name: "shwaka/stylistic",
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/indent": [
        "error",
        2,
        {
          SwitchCase: 1,
          offsetTernaryExpressions: false, // true in stylistic.configs.customize
        },
      ],
      "@stylistic/linebreak-style": [
        // not contained in stylistic.configs.customize
        "error",
        "unix"
      ],
      "@stylistic/quotes": [
        "error",
        "double",
        {
          avoidEscape: true, // false in stylistic.configs.customize
        }
      ],
      // "@stylistic/member-delimiter-style": [
      //   // same as in stylistic.configs.customize
      //   "error",
      //   {
      //     "multiline": {
      //       "delimiter": "none",
      //     },
      //     "singleline": {
      //       "delimiter": "comma",
      //       "requireLast": false,
      //     }
      //   }
      // ],
      "@stylistic/jsx-one-expression-per-line": "off", // "error" in stylistic.configs.customize
      "@stylistic/jsx-max-props-per-line": "off",
      "@stylistic/operator-linebreak": [
        "error",
        "after", // "before" in stylistic.configs.customize
        { overrides: {
          "?": "before",
          ":": "before",
          // See tests/stylistic/ why | and & are "before"
          "|": "before",
          "&": "before",
        } },
      ],
      "@stylistic/max-statements-per-line": "off", // 暫定的に
      "@stylistic/comma-dangle": ["error", "only-multiline"],
      "@stylistic/no-extra-parens": "off", // 視認性のために追加したい場合がある
    },
  },
)

export const eslintConfigShwakaOnsave = tseslint.config(
  tseslint.configs.base,
  ...eslintConfigShwakaStylistic,
  ...eslintConfigShwakaImportOrder,
  {
    linterOptions: {
      // eslint v9 からこれが勝手にオンになってて，しかもautofixされちゃうっぽい．
      // onsaveでは大半のruleが無効になっているので，eslint-disable-next-lineが沢山消されてしまう．
      reportUnusedDisableDirectives: "off",
    },
  },
)

export const eslintConfigShwakaReact = tseslint.config(
  ...eslintConfigShwakaBasic,
  ...eslintConfigShwakaStylistic,
  ...eslintConfigShwakaImportOrder,
  {
    name: "shwaka/react",
    plugins: {
      // @ts-expect-error 何故かエラーが出る
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      "react/jsx-fragments": ["error", "element"], // <> ではなく <Fragment> を使う
      "react/jsx-no-leaked-render": "off", // @typescript-eslint/strict-boolean-expressions があれば十分
      "react/jsx-key": "error",
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
