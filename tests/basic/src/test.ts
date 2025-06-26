/* eslint-disable unused-imports/no-unused-vars */

// eslint-disable-next-line no-var
var variableDeclaredWithVar = 3

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function functionWithoutReturnType() {
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

function noEmptyFunction(): void {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const foo = (): void => {}
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

function switchExhaustiveness(value: "foo" | "bar"): void {
  // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
  switch (value) {
    case "foo":
      console.log("The value is foo.")
  }
}

function noFloatingPromises(asyncFunc: () => Promise<void>): void {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  asyncFunc()
}

function noRestrictedGlobals(): void {
  // eslint-disable-next-line no-restricted-globals
  close()
  window.close() // OK
  // eslint-disable-next-line no-restricted-globals
  open()
  window.open() // OK
  // eslint-disable-next-line no-restricted-globals
  console.log(location)
  console.log(window.location) // OK
  // eslint-disable-next-line no-restricted-globals
  console.log(event)
  // eslint-disable-next-line no-restricted-globals
  isNaN(NaN)
  Number.isNaN(NaN) // OK
  // eslint-disable-next-line no-restricted-globals
  isFinite(1)
  Number.isFinite(1) // OK
}
