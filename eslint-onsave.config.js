// @ts-check
import { defineConfig } from "eslint/config"

import { eslintConfigShwakaOnsave } from "./dist/index.js"
import { noNumericRuleLevelConfig } from "./tools/no-numeric-rule-level.js"

export default defineConfig(
  ...eslintConfigShwakaOnsave,
  {
    files: [
      "**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs",
      "**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts",
    ],
  },
  noNumericRuleLevelConfig,
)
