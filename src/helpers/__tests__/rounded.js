// import Style from "further";
import rounded from "../rounded";

const props = { theme: { baseSize: 2 } };

describe("rounded", () => {
  it("modifies border radius at top level", () => {
    expect(rounded.resolve(props)).toEqual({ borderRadius: 4 });
  });
  it("modifies border for a specific direction", () => {
    expect(rounded.topLeft.resolve(props)).toEqual({
      borderTopLeftRadius: 4,
    });
  });
  it("modifies border with direction and size", () => {
    expect(rounded.bottomRight.sm.resolve(props)).toEqual({
      borderBottomRightRadius: 2,
    });
    expect(rounded.bottomRight.xl.resolve(props)).toEqual({
      borderBottomRightRadius: 16,
    });
  });
  it("modifies border with size modifier only", () => {
    expect(rounded.lg.resolve(props)).toEqual({ borderRadius: 8 });
  });
});
