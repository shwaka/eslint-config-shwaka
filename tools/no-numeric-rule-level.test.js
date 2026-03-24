// @ts-check

import { RuleTester } from "eslint"

import { noNumericRuleLevel } from "./no-numeric-rule-level"

const ruleTester = new RuleTester()

ruleTester.run("no-numeric-rule-level", noNumericRuleLevel, {
  valid: [
    // 文字列はOK
    {
      code: `
        export default [{
          rules: {
            "no-console": "error",
          },
        }]
      `,
    },
    // 配列形式でも文字列ならOK
    {
      code: `
        export default [{
          rules: {
            "eqeqeq": ["error", "always"],
          },
        }]
      `,
    },
    // rules 以外は無視
    {
      code: `
        const obj = {
          something: {
            "no-console": 2,
          },
        }
      `,
    },
    // 数値でも 0/1/2 以外は無視（仕様に依存）
    {
      code: `
        export default [{
          rules: {
            "no-console": 3,
          },
        }]
      `,
    },
  ],

  invalid: [
    // 単体 number
    {
      code: `
        export default [{
          rules: {
            "no-console": 2,
          },
        }]
      `,
      output: `
        export default [{
          rules: {
            "no-console": "error",
          },
        }]
      `,
      errors: [{ messageId: "unexpectedNumeric" }],
    },

    // 配列の先頭
    {
      code: `
        export default [{
          rules: {
            "eqeqeq": [2, "always"],
          },
        }]
      `,
      output: `
        export default [{
          rules: {
            "eqeqeq": ["error", "always"],
          },
        }]
      `,
      errors: [{ messageId: "unexpectedNumeric" }],
    },

    // warn / off も確認
    {
      code: `
        export default [{
          rules: {
            "no-console": 1,
            "no-debugger": 0,
          },
        }]
      `,
      output: `
        export default [{
          rules: {
            "no-console": "warn",
            "no-debugger": "off",
          },
        }]
      `,
      errors: [
        { messageId: "unexpectedNumeric" },
        { messageId: "unexpectedNumeric" },
      ],
    },
  ],
})
