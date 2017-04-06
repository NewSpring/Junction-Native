//@flow

import type IHelperProperty from "../createHelpers";

export const reducer = (properties: IHelperProperty[]) =>
  properties.map(({ name, property, props }) => ({
    [property]: props[property] ? props[property] : props.theme.colors[name],
  }));

export default [
  { name: "primary", reducer },
  { name: "secondary", reducer },
  { name: "tertiary", reducer },
  { name: "dark", reducer },
  { name: "darkSecondary", reducer },
  { name: "darkTertiary", reducer },
  { name: "light", reducer },
  { name: "lightSecondary", reducer },
  { name: "lightTertiary", reducer },
];
