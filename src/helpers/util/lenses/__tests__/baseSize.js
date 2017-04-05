import baseSize from "../baseSize";

const data1 = { theme: { sizes: { base: 2 } } };

it("doubles the base size on the theme", () => {
  const { margin } = baseSize("margin", data1);
  expect(margin).toEqual(2);
});

it("allows overriding with the named value", () => {
  const { margin } = baseSize("margin", { margin: 1 });
  expect(margin).toEqual(1);
});

it("is curryable", () => {
  const func = baseSize("margin");
  const { margin } = func({ margin: 1 });
  expect(margin).toEqual(1);
});
