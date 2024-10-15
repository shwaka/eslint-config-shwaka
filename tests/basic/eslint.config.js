// @ts-check
import tseslint from "typescript-eslint"
import {eslintConfigShwakaBasic} from "eslint-config-shwaka"

export default tseslint.config(
  {
    extends: [...eslintConfigShwakaBasic],
    files: ['**/*.{ts,tsx}'],
    linterOptions: {
      reportUnusedDisableDirectives: "error"
    }
  },
)
