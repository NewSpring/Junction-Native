import position from "../position";

it("has a relative resolver", () => {
  expect(position.relative.resolve()).toEqual({ position: "relative" });
});

it("has a fixed resolver", () => {
  expect(position.fixed.resolve()).toEqual({ position: "fixed" });
});

it("has an absolute resolver", () => {
  expect(position.absolute.resolve()).toEqual({ position: "absolute" });
});
