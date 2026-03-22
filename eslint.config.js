// @ts-check
import tseslint from "typescript-eslint"
import { eslintConfigShwakaReact } from "./dist/index.js"
import { noNumericRuleLevel } from "./no-numeric-rule-level.js"

export default tseslint.config(
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
