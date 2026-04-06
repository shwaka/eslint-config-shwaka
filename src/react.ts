import { defineConfig } from "eslint/config"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import reactYouMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect"

import { eslintConfigShwakaBasic } from "./basic.js"
import { eslintConfigShwakaImportOrder } from "./importOrder.js"
import { eslintConfigShwakaStylistic } from "./stylistic.js"

export const eslintConfigShwakaReact = defineConfig(
  ...eslintConfigShwakaBasic,
  ...eslintConfigShwakaStylistic,
  ...eslintConfigShwakaImportOrder,
  reactHooksPlugin.configs.flat.recommended,
  {
    name: "shwaka/react",
    plugins: {
      // @ts-expect-error 何故かエラーが出る
      react: reactPlugin,
      // "react-hooks": reactHooksPlugin, // v5.2.0→v7.0.1で動作しなくなった
      "react-you-might-not-need-an-effect": reactYouMightNotNeedAnEffect,
    },
    rules: {
      "react/jsx-fragments": ["error", "element"], // <> ではなく <Fragment> を使う
      "react/jsx-no-leaked-render": "off", // @typescript-eslint/strict-boolean-expressions があれば十分
      "react/jsx-key": "error",
      ...reactYouMightNotNeedAnEffect.configs.recommended.rules,
    },
    settings: {
      react: {
        version: "detect", // for eslint-plugin-react
      },
    },
  },
)
