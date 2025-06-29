// @ts-check
import tseslint from "typescript-eslint"
import { eslintConfigShwakaOnsave } from "eslint-config-shwaka"

export default tseslint.config(
  ...eslintConfigShwakaOnsave,
  {
    files: ['**/*.{ts,tsx}'],
    linterOptions: {
      reportUnusedDisableDirectives: "error"
    }
  },
)
