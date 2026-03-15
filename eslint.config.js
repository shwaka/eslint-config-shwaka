// @ts-check
import tseslint from "typescript-eslint"
import { eslintConfigShwakaReact } from "./dist/index.js"

export default tseslint.config(
  ...eslintConfigShwakaReact,
  {
    files: ["**/*.js", "**/*.ts"],
  },
)
