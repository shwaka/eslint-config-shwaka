`.eslintrc` を複数のプロジェクトで使い回したいので作ってみた．

## 使い方
### package.json
```json
{
  "scripts": {
    "eslint": "eslint src --ext .ts,.tsx",
    "eslint:fix": "eslint src --ext .ts,.tsx --fix"
  },
  "devDependencies": {
    "eslint": "<version>",
    "eslint-config-shwaka": "github:shwaka/eslint-config-shwaka#<commitHash>"
  }
}
```

commit hash を使うよりは tag をつけた方が良いかも？(要検証)

### .eslintrc.js
```js
module.exports = {
  "extends": "eslint-config-shwaka"
}
```

## 参考ページ
- [ESLintのShareable Configsを利用して複数プロジェクトで設定を共有する - なっく日報](https://yukidarake.hateblo.jp/entry/2015/09/15/210521)
- [node.js - npm install from Git in a specific version - Stack Overflow](https://stackoverflow.com/questions/14187956/npm-install-from-git-in-a-specific-version)
