import sizes from "../sizes";

it("should have all size names", () => {
  expect(sizes.map(x => x.name)).toEqual([
    "none",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
  ]);
});

it("should scale sizes properly", () => {
  const testProperties = [{ property: "a", value: 16 }];
  expect(sizes.map(x => x.reducer(testProperties))).toMatchSnapshot();
});

it("should allow multiple properties", () => {
  const testProperties = [
    { property: "a", value: 16 },
    { property: "b", value: 4 },
  ];
  expect(sizes.map(x => x.reducer(testProperties))).toMatchSnapshot();
});
