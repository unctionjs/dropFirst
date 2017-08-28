/* eslint-disable no-magic-numbers */
import greaterThan from "@unction/greaterthan"
import append from "@unction/append"
import reduceWithValueKey from "@unction/reducewithvaluekey"
import fresh from "@unction/fresh"

export default function dropFirst (count: number): mixed {
  return function dropFirstCount (orderedList: ArrayType | string): ArrayType | string {
    return reduceWithValueKey(
      (accumulated: ArrayType | string): Function =>
        (value: ValueType): Function =>
          (index: number): ArrayType | string => {
            if (greaterThan(index)(count - 1)) {
              return append(value)(accumulated)
            }

            return accumulated
          }
    )(
      fresh(orderedList)
    )(
      orderedList
    )
  }
}
