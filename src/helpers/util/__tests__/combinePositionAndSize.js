import Style from "further";
import { curry } from "ramda";

import create from "../combinePositionAndSize";

it("creates a tree of Style instances built from a name and a lens", () => {
  const name = "margin";
  const lens = curry((st, props) => ({ [st]: props[st] }));

  const tree = create({ name, lens });

  const check = (st, result, modified) => {
    expect(st instanceof Style).toBe(true);
    expect(st.resolve(result)).toEqual(modified ? modified : result);
  };

  check(tree, { margin: 1 });
  check(tree.right, { marginRight: 2 });
  check(tree.left.sm, { marginLeft: 8 }, { marginLeft: 4 });
  check(tree.xl, { margin: 8 }, { margin: 32 });
  // and so on
});
