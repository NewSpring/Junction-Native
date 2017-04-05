const sizeReducer = amount =>
  properties =>
    properties.map(({ property, value }) => ({
      [property]: value * amount,
    }));

export default [
  { name: "none", reducer: sizeReducer(0) },
  { name: "xs", reducer: sizeReducer(0.25) },
  { name: "sm", reducer: sizeReducer(0.5) },
  { name: "md", reducer: sizeReducer(1) },
  { name: "lg", reducer: sizeReducer(2) },
  { name: "xl", reducer: sizeReducer(4) },
];
