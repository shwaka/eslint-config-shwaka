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

function JsxMaxPropsPerLine(): JSX.Element {
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

function JsxTagSpacing(): JSX.Element {
  const foo = <div />
  // eslint-disable-next-line @stylistic/jsx-tag-spacing
  const bar = <div/>
  const baz = (
    // eslint-disable-next-line @stylistic/jsx-tag-spacing
    <div className="my-div"/>
  )
  return (<div>foo</div>)
}
