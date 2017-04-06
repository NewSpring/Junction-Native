import scrollable from "../scrollable";

it("allows for scrolling on web", () => {
  expect(scrollable.resolve()).toEqual({
    overflowY: "scroll",
    WebkitOverflowScrolling: "touch",
  });
});
