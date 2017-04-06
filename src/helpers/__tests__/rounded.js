import rounded from "../rounded";

const props = { theme: { sizes: { border: 2 } } };

it("modifies borderRadius at the top level", () => {
  expect(rounded.resolve({ borderRadius: 1 })).toEqual({ borderRadius: 1 });
});

it("uses the theme by default", () => {
  expect(rounded.resolve(props)).toEqual({ borderRadius: 2 });
  expect(rounded.sm.resolve(props)).toEqual({ borderRadius: 1 });
});

it("has position modifiers", () => {
  [
    ["left", "borderTopLeftRadius", "borderBottomLeftRadius"],
    ["right", "borderTopRightRadius", "borderBottomRightRadius"],
    ["bottom", "borderBottomLeftRadius", "borderBottomRightRadius"],
    ["top", "borderTopLeftRadius", "borderTopRightRadius"],
  ].forEach(([name, place1, place2]) => {
    expect(rounded[name].resolve(props)).toEqual({ [place1]: 2, [place2]: 2 });
  });
});
// XXX should we test this more?
