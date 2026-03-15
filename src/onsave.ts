import tseslint from "typescript-eslint"
import { eslintConfigShwakaStylistic } from "./stylistic"
import { eslintConfigShwakaImportOrder } from "./importOrder"

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
