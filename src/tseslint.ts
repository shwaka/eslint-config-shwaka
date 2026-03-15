import tseslint from "typescript-eslint"
import { tsFiles, jsFiles } from "./files.js"

export const eslintConfigShwakaTseslint = tseslint.config(
  ...tseslint.configs.recommended,
  {
    name: "shwaka/tseslint-base",
    files: tsFiles.concat(jsFiles),
    rules: {
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-unused-vars": "off", // provided by "unused-imports"
      // ↓元々はno-unused-expressionsに関する設定は何もしていなかったが，
      // eslint v9 で「オプションが未定義」というようなエラーが出たので，
      // とりあえず明示的に無効化することにした．
      // 有効化したいときは allowShortCircuit などのオプションを指定する必要があるっぽい？
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
  {
    name: "shwaka/tseslint-ts",
    files: tsFiles,
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname, // See note in https://typescript-eslint.io/getting-started/typed-linting/
      },
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": [
        2,
        { allowExpressions: true }
      ],
      "@typescript-eslint/no-empty-function": ["warn", {
        allow: []
      }],
      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
          allowString: false,
          allowNumber: false,
        }
      ],
      "@typescript-eslint/restrict-plus-operands": [
        "error",
        {
          allowBoolean: false,
          allowNullish: false,
          allowNumberAndString: false,
          allowRegExp: false,
          allowAny: false,
        }
      ],
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "separate-type-imports",
          prefer: "type-imports",
          disallowTypeAnnotations: true,
        },
      ],
    },
  },
  {
    name: "shwaka/tseslint-js",
    files: jsFiles,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: null,
      },
    },
  },
)
