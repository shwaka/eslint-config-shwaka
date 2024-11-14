/* eslint-disable unused-imports/no-unused-vars */

// eslint-disable-next-line no-var
var variableDeclaredWithVar = 3

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function functionWithoutReturnType() {
  return
}

// eslint-disable-next-line quotes
const stringWithSingleQuotes = 'foo'

function wrongIndent(): void {
  // eslint-disable-next-line indent
    return
}

function falsyValue(): void {
  const falsy = 0
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (falsy) {
    return
  }
  return
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function functionWithExplicitAny(_: any): void {
  return
}

// @ts-expect-error こっち (implicit any) は，eslint ではなく tsc がエラーを出す．
function functionWithImplicitAny(_): void {
  return
}

function noImplicitCoercion(): void {
  // eslint-disable-next-line no-implicit-coercion
  const foo: number = +"123"
}

function restrictPlusOperands(): void {
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  const foo: string = "1" + 2
}
