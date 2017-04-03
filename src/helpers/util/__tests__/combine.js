import combine from "../combine";

it("attaches methods to an input value", () => {
  const acc = {};
  combine(acc, { name: "test", style: () => 1 });
  expect(acc.test()).toEqual(1);
});

it("doesn't care what the input is", () => {
  const acc = () => {};
  combine(acc, { name: "test", style: () => 1 });
  expect(acc.test()).toEqual(1);
});
