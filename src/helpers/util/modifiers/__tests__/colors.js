import colors, { reducer } from "../colors";

it("has a reducer which pulls from props", () => {
  const result = reducer([
    { name: "blue", property: "test", props: { test: "1" } },
  ])[0];
  expect(result).toEqual({ test: "1" });
});

it("has a reducer which pulls from the theme", () => {
  const result = reducer([
    {
      name: "blue",
      property: "test",
      props: { theme: { colors: { blue: "1" } } },
    },
  ])[0];
  expect(result).toEqual({ test: "1" });
});

it("has 9 colors", () => {
  expect(colors).toMatchSnapshot();
});
