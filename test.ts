/* eslint-disable no-magic-numbers */
import dropFirst from "./index.ts";

test(() => {
  expect(dropFirst(2)(["a", "b", "c"])).toEqual(["c"]);
});

test(() => {
  expect(dropFirst(1)(["a", "b", "c"])).toEqual(["b", "c"]);
});

test(() => {
  expect(dropFirst(2)("abc")).toEqual("c");
});

test(() => {
  expect(dropFirst(1)("abc")).toEqual("bc");
});
