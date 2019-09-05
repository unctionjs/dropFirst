/* eslint-disable no-magic-numbers */
import greaterThan from "@unction/greaterthan";
import append from "@unction/append";
import reduceWithValueKey from "@unction/reducewithvaluekey";
import fresh from "@unction/fresh";
import {OrderedEnumerableType} from "./types";

export default function dropFirst<A> (count: number) {
  return function dropFirstCount (orderedList: OrderedEnumerableType<A>) {
    return reduceWithValueKey((accumulated: OrderedEnumerableType<A>) => (value: A) => (index: number): OrderedEnumerableType<A> => {
      if (greaterThan(index)(count - 1)) {
        return append(value)(accumulated);
      }

      return accumulated;
    })(fresh(orderedList))(orderedList);
  };
}
