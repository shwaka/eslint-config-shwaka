// eslint-disable-next-line unused-imports/no-unused-vars
function unusedArg(
  // eslint-disable-next-line unused-imports/no-unused-vars
  unusedArg: unknown
): void {
  return
}

// eslint-disable-next-line unused-imports/no-unused-vars
function unusedArgIgnored(
  _unusedArg: unknown
): void {
  return
}

// eslint-disable-next-line unused-imports/no-unused-vars
function unusedVariable(): void {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const unused: number = 1
}

// eslint-disable-next-line unused-imports/no-unused-vars
function unusedVariableIgnored(): void {
  const _unused: number = 1
}

// eslint-disable-next-line unused-imports/no-unused-vars
function unusedError(): void {
  try {
    return
    // eslint-disable-next-line unused-imports/no-unused-vars
  } catch (e: unknown) {
    return
  }
}

// eslint-disable-next-line unused-imports/no-unused-vars
function unusedErrorIgnored(): void {
  try {
    return
  } catch (_e: unknown) {
    return
  }
}
