import lowercase from "../lowerCaseFirstLetter";

it("lowercases the first letter", () => {
  expect(lowercase("Test")).toEqual("test");
});

it("handles single letter words", () => {
  expect(lowercase("I")).toEqual("i");
});

it("doesn't change an already lowercased value", () => {
  expect(lowercase("test")).toEqual("test");
});
