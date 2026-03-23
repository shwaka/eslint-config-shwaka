import { defineConfig } from "eslint/config"
import importPlugin from "eslint-plugin-import"
import tseslint from "typescript-eslint"

export const eslintConfigShwakaImportOrder = defineConfig(
  tseslint.configs.base,
  {
    name: "shwaka/import-order",
    plugins: {
      import: importPlugin
    },
    rules: {
      "import/order": ["error", {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before"
          }
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        },
      }],
    },
  },
)
