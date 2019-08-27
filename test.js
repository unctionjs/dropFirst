/* eslint-disable no-magic-numbers */
import {test} from "tap";

import dropFirst from "./";

test(({same, end}) => {
  same(
    dropFirst(2)(["a", "b", "c"]),
    ["c"]
  );

  end();
});

test(({same, end}) => {
  same(
    dropFirst(1)(["a", "b", "c"]),
    ["b", "c"]
  );

  end();
});

test(({same, end}) => {
  same(
    dropFirst(2)("abc"),
    "c"
  );

  end();
});

test(({same, end}) => {
  same(
    dropFirst(1)("abc"),
    "bc"
  );

  end();
});
