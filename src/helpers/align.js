//@flow

import Style from "further";

import createHelpers from "./util/createHelpers";
import type IHelperProperty from "./util/createHelpers";
import combine from "./util/combine";

export const reducer = (properties: IHelperProperty[]) =>
  properties.map(({ name, property }) => ({
    [property]: name,
  }));

export const vertical = [
  { name: "middle", reducer },
  { name: "top", reducer },
  { name: "bottom", reducer },
];

export const horizontal = [
  { name: "left", reducer },
  { name: "right", reducer },
  { name: "center", reducer },
];

export default createHelpers(vertical, { property: "verticalAlign" })
  .concat(createHelpers(horizontal, { property: "textAlign" }))
  .reduce(combine, Style.empty());
