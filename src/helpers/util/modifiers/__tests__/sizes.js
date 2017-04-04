import sizes from "../sizes";

it("should match snapshot", () => {
  expect(
    sizes.map(({ reducer, ...x }) => ({
      ...x,
      result: reducer(8),
    })),
  ).toMatchSnapshot();
});
