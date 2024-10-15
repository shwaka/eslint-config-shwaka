/* eslint-disable unused-imports/no-unused-vars */

import { useState } from "react"
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
