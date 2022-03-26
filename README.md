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
    "eslint-config-shwaka": "git+https://github.com/shwaka/eslint-config-shwaka#v0.1"
    // or "git+https://github.com/shwaka/eslint-config-shwaka#bb563c9abb6d890060c1b96b4d20c7e0cfb59b60"
  }
}
```

- `github:shwaka/eslint-config-shwaka#v0.1` だとsshが使われるので，GitHub Actions とかで失敗する
- `git+https://github.com/shwaka/eslint-config-shwaka#v0.1` ならhttpsなので大丈夫

### .eslintrc.js
```js
module.exports = {
  "extends": "eslint-config-shwaka"
}
```

## 参考ページ
- [ESLintのShareable Configsを利用して複数プロジェクトで設定を共有する - なっく日報](https://yukidarake.hateblo.jp/entry/2015/09/15/210521)
- [node.js - npm install from Git in a specific version - Stack Overflow](https://stackoverflow.com/questions/14187956/npm-install-from-git-in-a-specific-version)
