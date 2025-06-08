// @ts-check
import tseslint from "typescript-eslint"
import { eslintConfigShwakaImport } from "eslint-config-shwaka"

export default tseslint.config(
  ...eslintConfigShwakaImport,
  {
    files: ['**/*.{ts,tsx}'],
    linterOptions: {
      reportUnusedDisableDirectives: "error"
    }
  },
)
