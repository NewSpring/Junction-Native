//@flow
import Style from "further";

import combine from "./util/combine";
import createHelpers from "./util/createHelpers";
import type IHelperProperty from "./util/createHelpers";

export const reducer = (properties: IHelperProperty[]) => properties.map((
  { name },
) => ({
  position: name,
}));

export const positions = [
  { name: "absolute", reducer },
  { name: "relative", reducer },
  { name: "fixed", reducer },
];

export const directionReducer = (properties: IHelperProperty[]) =>
  properties.map(({ name, property, value }) => ({
    [name]: 0,
    [property]: value,
  }));

export const directions = [
  { name: "top", reducer: directionReducer },
  { name: "left", reducer: directionReducer },
  { name: "right", reducer: directionReducer },
  { name: "bottom", reducer: directionReducer },
  {
    name: "ends",
    reducer: (properties: IHelperProperty[]) => properties.map((
      { property, value },
    ) => ({
      top: 0,
      bottom: 0,
      [property]: value,
    })),
  },
  {
    name: "sides",
    reducer: (properties: IHelperProperty[]) => properties.map((
      { property, value },
    ) => ({
      left: 0,
      right: 0,
      [property]: value,
    })),
  },
];

export default createHelpers(positions, {})
  .map(x => ({
    ...x,
    style: createHelpers(directions, x).reduce(combine, x.style),
  }))
  .reduce(combine, Style.empty());
