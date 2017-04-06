import visible from "../visible";

it("has a visible helper", () => {
  expect(visible.resolve()).toEqual({
    visibility: "visible",
    height: "inherit",
    maxHeight: "inherit",
    margin: "inherit",
    paddingTop: "inherit",
    paddingBottom: "inherit",
    opacity: 1,
  });
});
