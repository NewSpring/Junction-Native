import background from "../backgrounds";

const theme = {
  theme: {
    colors: {
      primary: "green",
      secondary: "lightGreen",
      tertiary: "darkGreen",
      dark: "black",
      darkSecondary: "gray",
      darkTertiary: "lightGray",
      light: "white",
      lightSecondary: "light",
      lightTertiary: "veryLightGray",
    },
  },
};

it("has all nine colors", () => {
  const loc = theme.theme.colors;
  Object.keys(loc).map(key => {
    expect(background[key].resolve(theme)).toEqual({
      backgroundColor: loc[key],
    });
  });
});

it("has a fill / cover helper", () => {
  expect(background.fill.resolve()).toEqual({
    ...background.resolve(),
    backgroundSize: "cover",
  });
  expect(background.cover.resolve()).toEqual({
    ...background.resolve(),
    backgroundSize: "cover",
  });
});

it("has position helpers", () => {
  expect(background.right.resolve()).toEqual({
    backgroundPositionX: "right",
    ...background.resolve(),
  });
  expect(background.left.resolve()).toEqual({
    backgroundPositionX: "left",
    ...background.resolve(),
  });
  expect(background.top.resolve()).toEqual({
    backgroundPositionY: "top",
    ...background.resolve(),
  });
  expect(background.bottom.resolve()).toEqual({
    backgroundPositionY: "bottom",
    ...background.resolve(),
  });
});
