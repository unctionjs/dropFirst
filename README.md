# @unction/dropFirst

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> number => OrderedEnumerableType<A> => OrderedEnumerableType<A>

Returns all but the first N of a list of ordered values.

``` javascript
dropFirst(2)([1, 2, 3]) // [3]
dropFirst(1)([1, 2, 3]) // [2, 3]
dropFirst(2)("abc") // "c"
dropFirst(1)("abc") // "bc"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/dropFirst.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/dropFirst.svg?maxAge=2592000&style=flat-square
