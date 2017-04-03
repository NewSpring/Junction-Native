import Style from "further";
import { curry } from "ramda";

import create, { positions } from "../createPositionalHelpers";

it("exports default positions", () => {
  expect(positions).toMatchSnapshot();
});

it("transforms a name and a lens into an array of Styles and meta data", () => {
  const lens = curry((name, { margin }) => ({ [name]: margin + 1 }));

  const [left, right, top, bottom] = create({ name: "margin", lens });

  const check = ({ style, name, place }, str1, str2) => {
    expect(style instanceof Style).toBe(true);
    expect(style.resolve({ margin: 2 })).toEqual({ [str2]: 3 });
    expect(name).toEqual(str1);
    expect(place).toEqual(str2);
  };

  check(left, "left", "marginLeft");
  check(right, "right", "marginRight");
  check(top, "top", "marginTop");
  check(bottom, "bottom", "marginBottom");
});

it("allows for custom position arguments", () => {
  const lens = curry((name, { margin }) => ({ [name]: margin + 1 }));

  const [pancake] = create({ name: "margin", lens }, ["pancake"]);

  const check = ({ style, name, place }, str1, str2) => {
    expect(style.resolve({ margin: 2 })).toEqual({ [str2]: 3 });
    expect(name).toEqual(str1);
    expect(place).toEqual(str2);
  };

  check(pancake, "pancake", "marginPancake");
});
