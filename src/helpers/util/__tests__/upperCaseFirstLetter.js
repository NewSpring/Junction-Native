import uppercase from "../upperCaseFirstLetter";

it("uppercases the first letter", () => {
  expect(uppercase("test")).toEqual("Test");
});

it("handles single letter words", () => {
  expect(uppercase("i")).toEqual("I");
});

it("doesn't change an already uppercased value", () => {
  expect(uppercase("Test")).toEqual("Test");
});
