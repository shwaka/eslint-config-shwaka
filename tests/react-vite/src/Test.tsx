/* eslint-disable unused-imports/no-unused-vars */

import { useCallback, useState } from "react"

import { Fragment } from "react/jsx-runtime"

// export was added to avoid react-refresh/only-export-components
export function FragmentShorthandNotAllowed(): JSX.Element {
  return (
    // eslint-disable-next-line react/jsx-fragments
    <>
      <div>foo</div>
    </>
  )
}

function ExplicitFragmentAllowed(): JSX.Element {
  return (
    <Fragment>
      <div>foo</div>
      <div>bar</div>
    </Fragment>
  )
}

function HookInIf(): JSX.Element {
  // ↓ constant condition にならないように parseInt を使用した
  if (parseInt("1", 10) < 2) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0)
  }
  return (
    <div>foo</div>
  )
}

function ExhaustiveDeps(): JSX.Element {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount(count + 1) // 本当は setCount((c) => c + 1) にするべきだけど
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (<div>foo</div>)
}

function StrictBooleanExpression(): JSX.Element {
  const count: number = 1
  return (
    <div>
      {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, react/jsx-no-leaked-render
        count && <span>bar</span>
      }
    </div>
  )
}

function NoLeakedRender(): JSX.Element {
  const isFoo: boolean = true
  return (
    <div>
      {
        // eslint-disable-next-line react/jsx-no-leaked-render
        isFoo && <span>bar</span>
      }
    </div>
  )
}

function IndentInConditionalJSX({ isFoo }: { isFoo: boolean }): JSX.Element {
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
