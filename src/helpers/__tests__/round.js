import round from "../round";

it("has a round helper", () => {
  expect(round.resolve()).toEqual({
    borderRadius: "50%",
    content: '""',
  });
});
