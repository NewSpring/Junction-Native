import proccess from "../proccessBoxProperty";

it("handles a top or bottom case", () => {
  const result1 = proccess("top", 1, "sample");
  const result2 = proccess("bottom", 1, "sample");
  const value = {
    sampleLeft: 1,
    sampleRight: 1,
  };
  expect(result1).toEqual(value);
  expect(result2).toEqual(value);
});

it("handles a left or right case", () => {
  const result1 = proccess("right", 1, "sample");
  const result2 = proccess("left", 1, "sample");
  const value = {
    sampleTop: 1,
    sampleBottom: 1,
  };
  expect(result1).toEqual(value);
  expect(result2).toEqual(value);
});

it("handles a null case", () => {
  const result1 = proccess(null, 1, "sample");
  const value = {
    sampleLeft: 1,
    sampleRight: 1,
    sampleTop: 1,
    sampleBottom: 1,
  };
  expect(result1).toEqual(value);
});
