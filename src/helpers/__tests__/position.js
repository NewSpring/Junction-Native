import position from "../position";

it("has a relative resolver", () => {
  expect(position.relative.resolve()).toEqual({ position: "relative" });
  expect(position.relative.left.resolve()).toEqual({
    position: "relative",
    left: 0,
  });
  expect(position.relative.ends.resolve()).toEqual({
    position: "relative",
    top: 0,
    bottom: 0,
  });
});

it("has a fixed resolver", () => {
  expect(position.fixed.resolve()).toEqual({ position: "fixed" });
  expect(position.fixed.left.resolve()).toEqual({
    position: "fixed",
    left: 0,
  });
  expect(position.fixed.ends.resolve()).toEqual({
    position: "fixed",
    top: 0,
    bottom: 0,
  });
});

it("has an absolute resolver", () => {
  expect(position.absolute.resolve()).toEqual({ position: "absolute" });
  expect(position.absolute.left.resolve()).toEqual({
    position: "absolute",
    left: 0,
  });
  expect(position.absolute.right.resolve()).toEqual({
    position: "absolute",
    right: 0,
  });
  expect(position.absolute.top.resolve()).toEqual({
    position: "absolute",
    top: 0,
  });
  expect(position.absolute.bottom.resolve()).toEqual({
    position: "absolute",
    bottom: 0,
  });
  expect(position.absolute.ends.resolve()).toEqual({
    position: "absolute",
    top: 0,
    bottom: 0,
  });
  expect(position.absolute.sides.resolve()).toEqual({
    position: "absolute",
    left: 0,
    right: 0,
  });
});
