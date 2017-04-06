import display from "../display";

it("should have all the display options", () => {
  const displays = ["none", "block", "inline-block", "inline", "table", "flex"];

  displays.forEach(key => {
    expect(display[key].resolve()).toEqual({
      display: key,
    });
  });
});
