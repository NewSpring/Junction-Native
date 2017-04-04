import directions from "../directions";

it("should match the snapshot", () => {
  expect(directions).toMatchSnapshot();
});
