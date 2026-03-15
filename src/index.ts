export { eslintConfigShwakaBasic } from "./basic.js"
export { eslintConfigShwakaStylistic } from "./stylistic.js"
export { eslintConfigShwakaOnsave } from "./onsave.js"
export { eslintConfigShwakaReact } from "./react.js"

import { eslintConfigShwakaReact } from "./react.js" // 下で使うのでimportも必要

export const eslintConfigShwaka = eslintConfigShwakaReact

export default eslintConfigShwaka
