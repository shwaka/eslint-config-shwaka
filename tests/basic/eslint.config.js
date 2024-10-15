// @ts-check
import tseslint from "typescript-eslint"
import configShwaka from "eslint-config-shwaka"

export default tseslint.config(
  {
    extends: [...configShwaka],
    files: ['**/*.{ts,tsx}']
  },
)
