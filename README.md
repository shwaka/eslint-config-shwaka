`.eslintrc` を複数のプロジェクトで使い回したいので作ってみた．

## 使い方
### package.json
```js
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
- `package.json` 内でバージョンを更新したのに反映されない場合は，`package-lock.json` を削除してから `npm i` すれば良い (けど，もっと良い方法がありそう)

### .eslintrc.js
```js
module.exports = {
  "extends": "eslint-config-shwaka"
}
```

### pushせずに使う
```bash
# このリポジトリへのリンクを ~/.nvm/versions/node/vX.Y.Z/lib/node_modules/eslint-config-shwaka に作成
cd /path/to/eslint-config-shwaka
npm link
# ユーザー側の node_modules 内にリンクを作成する
cd /path/to/your/project
npm link eslint-config-shwaka
```

`npm install` すれば link 状態は解除される．

## 更新方法
単に git で tag をつけて push すれば良いだけ:
```bash
git tag v99.9
git push --tags
```

## テスト
[ESLint の設定を ESLint でテストする](https://studist.tech/test-eslint-config-by-eslint-8d03870a23d9) を参考にして `tests/` を作った．
下記のコマンドで実行できる．

```bash
cd tests/<test_name>/
npm ci
npm run eslint
```

なお，いずれも `eslint-config-shwaka` をローカルファイルからインストールしているので，
`npm install` する際は `npm install --install-links` とした方が良い．

## 参考ページ
- [ESLintのShareable Configsを利用して複数プロジェクトで設定を共有する - なっく日報](https://yukidarake.hateblo.jp/entry/2015/09/15/210521)
- [node.js - npm install from Git in a specific version - Stack Overflow](https://stackoverflow.com/questions/14187956/npm-install-from-git-in-a-specific-version)
- [ESLint を使い倒す（おすすめルール紹介）](https://zenn.dev/noshiro_piko/articles/take-full-advantage-of-typescript-eslint) いくつかのルールをここから採用

## 標準的でなさそうなルールについて
[スタイルガイド（コーディング規約） - TypeScript Deep Dive 日本語版](https://typescript-jp.gitbook.io/deep-dive/styleguide) が推奨しているものと違う部分について，その選択をした理由をメモしておく．

### 引用符
> エスケープしない限り、シングルクォート(')を使用することをお勧めします。

と書かれているけど，ダブルクォートを使用することにした．

- 他の言語だとシングルクォートは文字列以外の用途のこともあるけど，ダブルクォートは必ず文字列に使われる．
- 特に json ではダブルクォートしか使えないのが大きい

### セミコロン
> セミコロンを使用してください。

と書かれているけど，セミコロンは書かないことにした．
セミコロンが必要な言語を普段書かないので，毎回セミコロンを書くのは苦痛．

## その他コメント
### React.Fragment
`<>` ではなく `<Fragment>` を使うことにした．
その判断に至った理由:

- [Fragments – React](https://reactjs.org/docs/fragments.html#keyed-fragments) `key` プロパティが使えるのは `<Fragment>` の方だけ．
- [<> or <React.Fragment> ?](https://www.reddit.com/r/reactjs/comments/9yy3f4/or_reactfragment/) の議論を見るとどっちでも良さそう
