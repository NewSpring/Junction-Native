import colors from "../colors";

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
    expect(colors[key].resolve(theme)).toEqual({ color: loc[key] });
  });
});
