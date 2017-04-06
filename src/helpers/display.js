// @flow

import Style from "further";

import createHelpers from "./util/createHelpers";
import type IHelperProperty from "./util/createHelpers";
import combine from "./util/combine";

export const reducer = (properties: IHelperProperty[]) =>
  properties.map(({ name, property }) => ({
    [property]: name,
  }));

export const displays = [
  { name: "none", reducer },
  { name: "block", reducer },
  { name: "inline-block", reducer },
  { name: "inline", reducer },
  { name: "table", reducer },
  { name: "flex", reducer },
];

export default createHelpers(displays, { property: "display" }).reduce(
  combine,
  Style.empty(),
);
