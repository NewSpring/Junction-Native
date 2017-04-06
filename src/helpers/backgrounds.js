//@flow

import { takeLast, call } from "ramda";
import Style from "further";

import combine from "./util/combine";
import createHelpers from "./util/createHelpers";
import type IHelperProperty from "./util/createHelpers";
import colors from "./util/modifiers/colors";

export const fillReducer = (properties: IHelperProperty[]) =>
  properties
    .map(({ property, value }) => ({ [property]: value }))
    .concat([{ backgroundSize: "cover" }]);

export const fill = [
  { name: "fill", reducer: fillReducer },
  { name: "cover", reducer: fillReducer },
];

export const positionReducer = (axis: string) =>
  (properties: IHelperProperty[]) =>
    properties.map(({ property, value }) => ({ [property]: value })).concat([
      {
        [`backgroundPosition${axis.toUpperCase()}`]: takeLast(1, properties)[
          0
        ].name,
      },
    ]);
export const positions = [
  { name: "right", reducer: positionReducer("x") },
  { name: "left", reducer: positionReducer("X") },
  { name: "top", reducer: positionReducer("Y") },
  { name: "bottom", reducer: positionReducer("Y") },
];

export default call(
  x =>
    createHelpers(colors, {
      property: "backgroundColor",
    })
      .concat(createHelpers(positions, x))
      .concat(createHelpers(fill, x))
      .reduce(combine, x.style),
  {
    style: Style.of({
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "100%",
    }),
  },
);
