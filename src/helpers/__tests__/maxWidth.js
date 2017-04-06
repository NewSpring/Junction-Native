import maxWidth from "../maxWidth";

const props = {
  theme: {
    breakpoints: {
      palm: {
        max: 480,
      },
      palmWide: {
        max: 768,
      },
      lap: {
        max: 1024,
      },
      lapWide: {
        max: 1280,
      },
      desk: {
        max: 1680,
      },
    },
  },
};

it("has widths mapped to breakpoints", () => {
  const loc = props.theme.breakpoints;

  Object.keys(loc).forEach(x => {
    expect(maxWidth[x].resolve(props)).toEqual({
      maxWidth: loc[x].max,
    });
  });
});
