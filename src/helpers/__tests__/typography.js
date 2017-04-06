import { fontStyle, fontWeight, textAlign } from "../typography";

it("can set the font style to normal", () => {
  expect(fontStyle.normal.resolve()).toEqual({ fontStyle: "normal" });
});

it("can set the font style to italic", () => {
  expect(fontStyle.italic.resolve()).toEqual({ fontStyle: "italic" });
});

it("can set the font style to oblique", () => {
  expect(fontStyle.oblique.resolve()).toEqual({ fontStyle: "oblique" });
});

it("can set fontWeight rules", () => {
  [
    ["bold", "700"],
    ["thin", "100"],
    ["heavy", "900"],
    ["extrabold", "800"],
    ["none", "normal"],
  ].forEach(([name, weight]) => {
    expect(fontWeight[name].resolve()).toEqual({ fontWeight: weight });
  });
});

it("can set text to center align", () => {
  expect(textAlign.center.resolve()).toEqual({ textAlign: "center" });
});

it("can set text to left align", () => {
  expect(textAlign.left.resolve()).toEqual({ textAlign: "left" });
});

it("can set text to right align", () => {
  expect(textAlign.right.resolve()).toEqual({ textAlign: "right" });
});
