// @ts-check
import tseslint from "typescript-eslint"
import { eslintConfigShwakaReact } from "./index.js"

export default tseslint.config(
  ...eslintConfigShwakaReact,
  {
    files: ["**/*.js", "**/*.ts"],
  },
)
