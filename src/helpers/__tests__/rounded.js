import rounded from "../rounded";

const props = { theme: { borderSize: 2 } };

it("modifies borderRadius at the top level", () => {
  expect(rounded.resolve({ borderRadius: 1 })).toEqual({ borderRadius: 1 });
});

it("uses the theme by default", () => {
  expect(rounded.resolve(props)).toEqual({ borderRadius: 2 });
  expect(rounded.sm.resolve(props)).toEqual({ borderRadius: 1 });
});

it("has position modifiers", () => {
  [
    ["left", "borderRadiusLeftTop", "borderRadiusLeftBottom"],
    ["right", "borderRadiusRightTop", "borderRadiusRightBottom"],
    ["bottom", "borderRadiusBottomLeft", "borderRadiusBottomRight"],
    ["top", "borderRadiusTopLeft", "borderRadiusTopRight"],
  ].forEach(([name, place1, place2]) => {
    expect(rounded[name].resolve(props)).toEqual({ [place1]: 2, [place2]: 2 });
  });
});
// XXX should we test this more?
