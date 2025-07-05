// eslintConfigShwakaStylistic does NOT extend eslintConfigShwakaBasic
// /* eslint-disable unused-imports/no-unused-vars */

// eslint-disable-next-line @stylistic/semi
const lineWithSemi = 5;

function quotes() {
  // eslint-disable-next-line @stylistic/quotes
  const stringWithSingleQuotes = 'foo'
  // eslint-disable-next-line @stylistic/quotes
  const stringWithBackQuotes = `foo`
  // The following should be allowed
  const stringContainingTemplateLiteral = `foo${3}`
  const stringContainingDoubleQuotes = '{ "foo": "bar" }'
  const stringContainingNewlines = `[
  1,
  2,
  3
]`
}
