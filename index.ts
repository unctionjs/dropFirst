/* eslint-disable no-magic-numbers */
import greaterThan from "@unction/greaterthan";
import append from "@unction/append";
import reduceWithValueKey from "@unction/reducewithvaluekey";
import fresh from "@unction/fresh";

export default function dropFirst<A> (count: number) {
  return function dropFirstCount (orderedList: OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string) {
    return reduceWithValueKey((accumulated: OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string) => (value: A) => (index: number): OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string => {
      if (greaterThan(index)(count - 1)) {
        return append(value)(accumulated);
      }

      return accumulated;
    })(fresh(orderedList))(orderedList);
  };
}
