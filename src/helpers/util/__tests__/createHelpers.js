import Style from "further";
import create from "../createHelpers";

// XXX should we write a lot more interation tests for this?
it("can handle adding a new property from a previous one", () => {
  const st = Style(({ margin, theme }) => ({
    margin: margin ? margin : theme ? theme.baseSize * 2 : 8,
  }));

  const props = { theme: { baseSize: 8 } };
  const sizes = [
    { name: "left", propertyModifier: () => "marginLeft" },
    { name: "sm", reducer: prev => prev / 2 },
  ];
  const [left, sm] = create({ property: "margin", style: st }, sizes);
  expect(left.style.resolve(props)).toEqual({ marginLeft: 16 });
  expect(sm.style.resolve(props)).toEqual({ margin: 8 });
  expect(left.style.resolve({ marginLeft: 1 })).toEqual({ marginLeft: 1 });
});

it("can be curried and handle adding a new property from a previous one", () => {
  const st = Style(({ margin, theme }) => ({
    margin: margin ? margin : theme ? theme.baseSize * 2 : 8,
  }));

  const props = { theme: { baseSize: 8 } };
  const sizes = [
    { name: "left", propertyModifier: () => "marginLeft" },
    { name: "sm", reducer: prev => prev / 2 },
  ];
  const helperDef = create({ property: "margin", style: st });
  const [left, sm] = helperDef(sizes);
  expect(left.style.resolve(props)).toEqual({ marginLeft: 16 });
  expect(sm.style.resolve(props)).toEqual({ margin: 8 });
  expect(left.style.resolve({ marginLeft: 1 })).toEqual({ marginLeft: 1 });
});
