import js from "@eslint/js"
import eslint from "@eslint/js"
import importPlugin from "eslint-plugin-import"
import unusedImports from "eslint-plugin-unused-imports"
import tseslint from "typescript-eslint"
import { eslintConfigShwakaTseslint } from "./tseslint"

export const eslintConfigShwakaBasic = tseslint.config(
  js.configs.recommended,
  eslint.configs.recommended,
  ...eslintConfigShwakaTseslint,
  {
    name: "shwaka/basic",
    plugins: {
      "unused-imports": unusedImports,
      import: importPlugin,
    },
    rules: {
      "no-implicit-coercion": "error",
      "no-restricted-globals": [
        "error",
        ...["open", "close", "location"].map((name) => (
          { name, message: `Use window.${name} instead.` }
        )),
        // event と fdescribe は
        // 公式ドキュメント (https://eslint.org/docs/latest/rules/no-restricted-globals)
        // からコピペ
        { name: "event", message: "Use local parameter instead." },
        { name: "fdescribe", message: "Use describe instead." },
        // isFinite と isNaN は
        // https://zenn.dev/noshiro_piko/articles/take-full-advantage-of-typescript-eslint#%E4%B8%80%E9%83%A8%E3%81%AE%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%90%E3%83%AB%E5%A4%89%E6%95%B0%E3%81%AE%E4%BD%BF%E7%94%A8%E3%82%92%E7%A6%81%E6%AD%A2
        // からコピペ
        { name: "isFinite", message: "Use Number.isFinite instead." },
        { name: "isNaN", message: "Use Number.isNaN instead." },
      ],
      // "semi": ["error", "never"], // use @stylistic/ts
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" }
      ],
      "sort-imports": 0,
      "import/named": 0, // Language not found in 'prism-react-renderer'
      "import/no-unresolved": 0, // ちゃんと設定できてないせいか大量に出てきてしまう
    }
  }
)
