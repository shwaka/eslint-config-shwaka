/* eslint-disable unused-imports/no-unused-vars */

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
