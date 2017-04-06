//@flow
import { call } from "ramda";
import Style from "further";

import combine from "./util/combine";
import createHelpers from "./util/createHelpers";
import lens from "./util/lenses/baseSize";
import sizes from "./util/modifiers/sizes";
import directions from "./util/modifiers/directions";

export default call(
  // create margin.sm, md, lg, etc
  x =>
    createHelpers(sizes, x).reduce(
      combine,
      // create margin.left, right, etc
      createHelpers(directions, x)
        // // create margin.left.sm, etc
        .map(y => ({
          ...y,
          style: createHelpers(sizes, y).reduce(combine, y.style),
        }))
        .reduce(combine, x.style),
    ),
  // define that margin is the property to create
  { property: "margin", style: Style(lens("padding")) },
);
