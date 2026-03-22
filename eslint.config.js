// @ts-check
import { defineConfig } from "eslint/config"

import { eslintConfigShwakaReact } from "./dist/index.js"
import { noNumericRuleLevel } from "./no-numeric-rule-level.js"

export default defineConfig(
  ...eslintConfigShwakaReact,
  {
    files: ["**/*.js", "**/*.ts"],
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
