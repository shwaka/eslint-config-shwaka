// @ts-check
import { defineConfig } from "eslint/config"

import { eslintConfigShwakaReact } from "./dist/index.js"
import { noNumericRuleLevelConfig } from "./tools/no-numeric-rule-level.js"

export default defineConfig(
  ...eslintConfigShwakaReact,
  {
    files: ["**/*.js", "**/*.ts"],
  },
  noNumericRuleLevelConfig,
)
