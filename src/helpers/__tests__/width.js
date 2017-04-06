import width from "../width";

it("sets flex value for native", () => {
  const props = { theme: { isNative: true } };
  expect(width(1 / 2).resolve(props)).toEqual({
    flex: 0.5,
  });
});

it("sets width value for web", () => {
  expect(width(1 / 2).resolve({ theme: {} })).toEqual({
    width: "50%",
  });
});
