import Style from "further";

import createSizeHelpers, { sizes } from "../createSizeHelpers";

it("has a default scale", () => {
  expect(sizes).toMatchSnapshot();
});

it("modifies a passed Style instance at the given place", () => {
  const st = Style.of({ margin: 10 });
  const mappedSizes = createSizeHelpers({ place: "margin", style: st });

  const [none, xs, sm, md, lg, xl] = mappedSizes;

  const check = ({ style, name }, result, str) => {
    expect(style.resolve()).toEqual({ margin: result });
    expect(name).toEqual(str);
  };

  check(none, 0, "none");
  check(xs, 10 / 4, "xs");
  check(sm, 5, "sm");
  check(md, 10, "md");
  check(lg, 20, "lg");
  check(xl, 40, "xl");
});

it("allows a custom size map (type independent)", () => {
  const st = Style.of({ margin: 10 });
  const customList = [["pancake", x => x + "pancake"]];
  const mappedSizes = createSizeHelpers(
    { place: "margin", style: st },
    customList,
  );

  const [pancake] = mappedSizes;

  const check = ({ style, name }, result, str) => {
    expect(style.resolve()).toEqual({ margin: result });
    expect(name).toEqual(str);
  };

  check(pancake, "10pancake", "pancake");
});
