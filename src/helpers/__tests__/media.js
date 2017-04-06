import Style from "further";

import media from "../media";
import margin from "../margin";
import breakpoints from "../util/modifiers/breakpoints";

it("nests items under a breakpoint", () => {
  breakpoints.forEach(({ name }) => {
    expect(media[name](Style.of({ color: "blue" })).resolve()).toEqual({
      [name]: {
        color: "blue",
      },
    });
  });
});

it("accepts as many styles as wanted", () => {
  expect(
    media
      .desk(Style.of({ color: "blue" }), Style.of({ display: "none" }))
      .resolve(),
  ).toEqual({
    desk: {
      color: "blue",
      display: "none",
    },
  });
});

it("doesn't break other styles", () => {
  const st = Style.empty().from([
    margin.left,
    media.desk(margin.left.lg, margin.top.lg),
  ]);

  expect(st.resolve({ margin: 1 })).toEqual({
    marginLeft: 1,
    desk: {
      marginLeft: 2,
      marginTop: 2,
    },
  });
});
