/* eslint-disable no-magic-numbers */
import greaterThan from "@unction/greaterthan";
import append from "@unction/append";
import reduceWithValueKey from "@unction/reducewithvaluekey";
import fresh from "@unction/fresh";
export default function dropFirst (count) {
  return function dropFirstCount (orderedList) {
    return reduceWithValueKey((accumulated) => (value) => (index) => {
      if (greaterThan(index)(count - 1)) {
        return append(value)(accumulated);
      }

      return accumulated;
    })(fresh(orderedList))(orderedList);
  };
}
