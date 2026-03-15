import tseslint from "typescript-eslint"

import { eslintConfigShwakaImportOrder } from "./importOrder.js"
import { eslintConfigShwakaStylistic } from "./stylistic.js"

export const eslintConfigShwakaOnsave = tseslint.config(
  tseslint.configs.base,
  ...eslintConfigShwakaStylistic,
  ...eslintConfigShwakaImportOrder,
  {
    linterOptions: {
      // eslint v9 からこれが勝手にオンになってて，しかもautofixされちゃうっぽい．
      // onsaveでは大半のruleが無効になっているので，eslint-disable-next-lineが沢山消されてしまう．
      reportUnusedDisableDirectives: "off",
    },
  },
)
