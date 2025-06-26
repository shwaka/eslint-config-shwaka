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
}

function wrongIndent(): void {
  const foo: number = 1
  if (foo === 2) {
    // eslint-disable-next-line indent
  console.log(3)
  }
  switch (foo) {
    // eslint-disable-next-line indent
  case 1:
      return
    // eslint-disable-next-line indent
  case 2:
      return
  }
}
