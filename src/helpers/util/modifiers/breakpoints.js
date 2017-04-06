const reducer = properties =>
  properties.map(({ property, name, props }) => ({
    [property]: props.theme.breakpoints[name].max,
  }));

export default [
  { name: "palm", reducer },
  { name: "palmWide", reducer },
  { name: "lap", reducer },
  { name: "lapWide", reducer },
  { name: "desk", reducer },
];
