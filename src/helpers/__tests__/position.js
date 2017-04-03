import position from "../position";

it("sets the position to absolute", () => {
  expect(position["absolute"].resolve()).toEqual({ position: "absolute" });
});

it("sets the position to relative", () => {
  expect(position["relative"].resolve()).toEqual({ position: "relative" });
});
