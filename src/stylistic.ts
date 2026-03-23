import stylistic from "@stylistic/eslint-plugin"
import { defineConfig } from "eslint/config"
import tseslint from "typescript-eslint"

export const eslintConfigShwakaStylistic = defineConfig(
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
