export { eslintConfigShwakaBasic } from "./basic"
export { eslintConfigShwakaStylistic } from "./stylistic"
export { eslintConfigShwakaOnsave } from "./onsave"
export { eslintConfigShwakaReact } from "./react"

import { eslintConfigShwakaReact } from "./react" // 下で使うのでimportも必要

export const eslintConfigShwaka = eslintConfigShwakaReact

export default eslintConfigShwaka
