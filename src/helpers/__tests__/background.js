import bg from "../background";

const props = { theme: { brandColor: "green" } };
describe("background", () => {
  it("should exist", () => {
    expect(bg).toBeDefined();
  });
  it("should not do anything by itself", () => {
    expect(bg.resolve(props)).toEqual({});
  });
  it("should have color helper", () => {
    expect(bg.color).toBeDefined();
  });
  it("should allow brand color usage", () => {
    expect(bg.color.brand.resolve(props)).toEqual({
      backgroundColor: "green",
    });
  });
  it("should allow custom color", () => {
    //  XXX what color formats should I allow?
    // console.log(bg);
    expect(bg.color.custom("blue").resolve(props)).toEqual({
      backgroundColor: "blue",
    });
  });

  xit("should have an image helper", () => {
    expect(bg.image).toBeDefined();
  });
  xit("should allow setting of image url", () => {
    // expect(bg.image.fill)
  });
  xit("should allow setting of image position", () => {});
});
