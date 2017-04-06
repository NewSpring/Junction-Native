import margin from "../margin";

const props = { theme: { sizes: { base: 8 } } };

it("modifies margin at the top level", () => {
  expect(margin.resolve({ margin: 1 })).toEqual({ margin: 1 });
});

it("uses the theme by default", () => {
  expect(margin.resolve(props)).toEqual({ margin: 8 });
  expect(margin.sm.resolve(props)).toEqual({ margin: 4 });
});

it("has position modifiers", () => {
  [
    ["left", "marginLeft"],
    ["right", "marginRight"],
    ["bottom", "marginBottom"],
    ["top", "marginTop"],
  ].forEach(([name, place]) => {
    expect(margin[name].resolve(props)).toEqual({ [place]: 8 });
    // console.log(margin);
    // expect(margin[name].xs.resolve(props)).toEqual({ [place]: 4 });
    expect(margin[name].sm.resolve(props)).toEqual({ [place]: 4 });
  });

  expect(margin.ends.resolve(props)).toEqual({
    marginBottom: 8,
    marginTop: 8,
  });
});
// XXX should we test this more?
