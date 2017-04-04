import sizes from "../sizes";

it("should match the snapshot", () => {
  expect(sizes).toMatchSnapshot();
});
