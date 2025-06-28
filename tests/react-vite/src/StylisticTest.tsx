/* eslint-disable unused-imports/no-unused-vars */

export function IndentInConditionalJSX({ isFoo }: { isFoo: boolean }): JSX.Element {
  // This should be allowed
  return (
    isFoo
      ? (
        <span>
          foo
        </span>
      )
      : (
        <span>
          not foo
        </span>
      )
  )
}

function MaxPropsPerLine(): JSX.Element {
  // Writing multiple props in the same line should be allowed
  return (
    <div
      className="foo" id="bar"
      style={{ width: 100 }}
    >
      test
    </div>
  )
}
