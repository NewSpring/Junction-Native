import align from "../align";

it("should have all the vertical align options", () => {
  const vertical = ["middle", "top", "bottom"];

  vertical.forEach(key => {
    expect(align[key].resolve()).toEqual({
      verticalAlign: key,
    });
  });
});

it("should have all the horizontal align options", () => {
  const horizontal = ["left", "center", "right"];

  horizontal.forEach(key => {
    expect(align[key].resolve()).toEqual({
      textAlign: key,
    });
  });
});
