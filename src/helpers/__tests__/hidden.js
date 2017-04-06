import hidden from "../hidden";

it("has a hidden helper", () => {
  expect(hidden.resolve()).toEqual({
    visibility: "hidden",
    height: 0,
    maxHeight: 0,
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    opacity: 0,
  });
});
