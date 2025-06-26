/* eslint-disable unused-imports/no-unused-vars */

// eslint-disable-next-line @stylistic/semi
const lineWithSemi = 5;

interface MultilineCommaDelimiterNotAllowedInterface {
  // eslint-disable-next-line @stylistic/member-delimiter-style
  foo: number,
  bar: string
}

interface MultilineSemicolonDelimiterNotAllowedInterface {
  // eslint-disable-next-line @stylistic/member-delimiter-style
  foo: number;
  bar: string
}

type MultilineCommaDelimiterNotAllowedType = {
  // eslint-disable-next-line @stylistic/member-delimiter-style
  foo: number,
  bar: string
}

type MultilineSemicolonDelimiterNotAllowedType = {
  // eslint-disable-next-line @stylistic/member-delimiter-style
  foo: number;
  bar: string
}

// eslint-disable-next-line @stylistic/member-delimiter-style
type Hoge = { foo: number; bar: string }

interface MultilineNoDelimiterInterface {
  foo: number
  bar: string
}
type MultilineNoDelmiterType = {
  foo: number
  bar: string
}
type SingleLineCommaDelimiterAllowedType = { foo: number, bar: string }

function correctIndent(): void {
  const foo: number = 1
  if (foo === 2) {
    console.log(3)
  }
  switch (foo) {
    case 1:
      return
    case 2:
      return
  }
  return
}

function wrongIndent(): void {
  const foo: number = 1
  if (foo === 2) {
    // eslint-disable-next-line @stylistic/indent
  console.log(3)
  }
  switch (foo) {
    // eslint-disable-next-line @stylistic/indent
  case 1:
      return
    // eslint-disable-next-line @stylistic/indent
  case 2:
      return
  }
  // eslint-disable-next-line @stylistic/indent
    return
}

function quotes(): void {
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

type NumFunc = (arg: number) => number

function arrowParens(): void {
  const foo: NumFunc = (arg) => (arg * 2)
  // eslint-disable-next-line @stylistic/arrow-parens
  const bar: NumFunc = arg => (arg * 2)
  // eslint-disable-next-line @stylistic/arrow-parens
  const baz: NumFunc = arg => {
    return arg * 2
  }
}

function braceStyle(isFoo: boolean): void {
  if (isFoo) {
    console.log("foo")
  } else {
    console.log("not foo")
  }
  if (isFoo) {
    console.log("foo")
    // eslint-disable-next-line @stylistic/brace-style
  }
  else {
    console.log("not foo")
  }
}

function operatorLinebreak(): void {
  const foo =
    1 + 2 + 3 + 4 + 5
  const bar
  // eslint-disable-next-line @stylistic/operator-linebreak
    = 1 + 2 + 3 + 4 + 5
}
