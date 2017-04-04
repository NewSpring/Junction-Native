//@flow
import { call } from "ramda";
import Style from "further";

import createHelpers from "./util/createHelpers";
import combine from "./util/combine";
import sizes from "./util/modifiers/sizes";
import directions from "./util/modifiers/directions";
import lens from "./util/lenses/baseSize";

export default call(
  x =>
    createHelpers(x, sizes).reduce(
      combine,
      createHelpers(x, directions)
        .map(y => ({
          ...y,
          style: createHelpers(y, sizes).reduce(combine, y.style),
        }))
        .reduce(combine, x.style),
    ),
  { property: "margin", style: Style(lens("margin")) },
);
