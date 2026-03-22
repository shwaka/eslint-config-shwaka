// @ts-check
import { defineConfig } from "eslint/config"

import { eslintConfigShwakaOnsave } from "./dist/index.js"
import { noNumericRuleLevel } from "./no-numeric-rule-level.js"

export default defineConfig(
  ...eslintConfigShwakaOnsave,
  {
    files: [
      "**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs",
      "**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts",
    ],
  },
  {
    plugins: {
      local: {
        rules: {
          "no-numeric-rule-level": noNumericRuleLevel,
        },
      },
    },
    rules: {
      "local/no-numeric-rule-level": "error",
    },
  },
)
