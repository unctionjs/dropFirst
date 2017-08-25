/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import dropFirst from "./source.js"

test(({same, end}) => {
  same(
    dropFirst(2)(["a", "b", "c"]),
    ["c"]
  )

  end()
})

test(({same, end}) => {
  same(
    dropFirst(1)(["a", "b", "c"]),
    ["b", "c"]
  )

  end()
})
