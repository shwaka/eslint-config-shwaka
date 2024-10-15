/* eslint-disable unused-imports/no-unused-vars */

// eslint-disable-next-line @stylistic/ts/semi
const lineWithSemi = 5;

interface MultilineCommaDelimiterNotAllowedInterface {
  // eslint-disable-next-line @stylistic/ts/member-delimiter-style
  foo: number,
  bar: string
}

interface MultilineSemicolonDelimiterNotAllowedInterface {
  // eslint-disable-next-line @stylistic/ts/member-delimiter-style
  foo: number;
  bar: string
}

type MultilineCommaDelimiterNotAllowedType = {
  // eslint-disable-next-line @stylistic/ts/member-delimiter-style
  foo: number,
  bar: string
}

type MultilineSemicolonDelimiterNotAllowedType = {
  // eslint-disable-next-line @stylistic/ts/member-delimiter-style
  foo: number;
  bar: string
}

// eslint-disable-next-line @stylistic/ts/member-delimiter-style
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
