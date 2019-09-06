/* eslint-disable no-magic-numbers */
import dropFirst from "./index";

test("works", () => {
  expect(dropFirst(2)(["a", "b", "c"])).toEqual(["c"]);
});

test("works", () => {
  expect(dropFirst(1)(["a", "b", "c"])).toEqual(["b", "c"]);
});

test("works", () => {
  expect(dropFirst(2)("abc")).toEqual("c");
});

test("works", () => {
  expect(dropFirst(1)("abc")).toEqual("bc");
});
