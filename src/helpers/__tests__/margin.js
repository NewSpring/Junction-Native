import margin from "../margin";

const props = { theme: { baseSize: 8 } };

it("modifies margin at the top level", () => {
  expect(margin.resolve({ margin: 1 })).toEqual({ margin: 1 });
});

it("uses the theme by default", () => {
  expect(margin.resolve(props)).toEqual({ margin: 16 });
  expect(margin.sm.resolve(props)).toEqual({ margin: 8 });
});

it("has position modifiers", () => {
  [
    ["left", "marginLeft"],
    ["right", "marginRight"],
    ["bottom", "marginBottom"],
    ["top", "marginTop"],
  ].forEach(([name, place]) => {
    expect(margin[name].resolve(props)).toEqual({ [place]: 16 });
    expect(margin[name].xs.resolve(props)).toEqual({ [place]: 4 });
  });
});
// XXX should we test this more?
