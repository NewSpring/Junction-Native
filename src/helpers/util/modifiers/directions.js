import cap from "../upperCaseFirstLetter";

const propertyModifier = (property: string, modifier: string): string =>
  `${property}${cap(modifier)}`;

export default [
  { name: "top" },
  { name: "left" },
  { name: "bottom" },
  { name: "right" },
  { name: "ends" },
  { name: "sides" },
].map(x => ({ ...x, propertyModifier }));
