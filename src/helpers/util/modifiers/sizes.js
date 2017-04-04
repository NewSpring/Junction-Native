export default [
  { name: "none", reducer: () => 0 },
  { name: "xs", reducer: x => x / 4 },
  { name: "sm", reducer: x => x / 2 },
  { name: "md", reducer: x => x },
  { name: "lg", reducer: x => x * 2 },
  { name: "xl", reducer: x => x * 4 },
];
