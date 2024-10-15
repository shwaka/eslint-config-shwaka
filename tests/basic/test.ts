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

// These are allowed in basic config
const lineWithSemi = 5;
