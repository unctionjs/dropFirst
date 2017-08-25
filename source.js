/* eslint-disable no-magic-numbers */
import greaterThan from "@unction/greaterthan"
import append from "@unction/append"
import reduceWithValueKey from "@unction/reducewithvaluekey"

export default function dropFirst (count: number): mixed {
  return function dropFirstCount (array: ArrayType): ArrayType {
    return reduceWithValueKey(
      (accumulated: ArrayType): Function =>
        (value: ValueType): Function =>
          (index: number): ArrayType => {
            if (greaterThan(index)(count - 1)) {
              return append(value)(accumulated)
            }

            return accumulated
          }
    )(
      []
    )(
      array
    )
  }
}
