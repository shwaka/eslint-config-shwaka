// @ts-check
import tseslint from "typescript-eslint"
import { eslintConfigShwakaStylistic } from "eslint-config-shwaka"

export default tseslint.config(
  ...eslintConfigShwakaStylistic,
  {
    files: ['**/*.{ts,tsx}'],
    linterOptions: {
      reportUnusedDisableDirectives: "error"
    }
  },
)
