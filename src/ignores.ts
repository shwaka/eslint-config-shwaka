import { globalIgnores } from "eslint/config"

// 何らかの理由で下記のディレクトリもlint対象にしたくなった場合は，
// 利用側のdefineConfig内に
//   globalIgnores(["!**/dist/"])
// などと書く．
export const eslintConfigShwakaIgnores = globalIgnores(
  [
    "**/dist/",
    "**/build/",
    "**/coverage/",
  ],
  "shwaka/ignores",
)
