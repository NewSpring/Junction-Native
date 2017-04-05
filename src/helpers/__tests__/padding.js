import padding from "../padding";

const props = { theme: { sizes: { base: 8 } } };

it("modifies padding at the top level", () => {
  expect(padding.resolve({ padding: 1 })).toEqual({ padding: 1 });
});

it("uses the theme by default", () => {
  expect(padding.resolve(props)).toEqual({ padding: 8 });
});

it("has position modifiers", () => {
  [
    ["left", "paddingLeft"],
    ["right", "paddingRight"],
    ["bottom", "paddingBottom"],
    ["top", "paddingTop"],
  ].forEach(([name, place]) => {
    expect(padding[name].resolve(props)).toEqual({ [place]: 8 });
    expect(padding[name].xs.resolve(props)).toEqual({ [place]: 2 });
  });
});
// XXX should we test this more?
