//@flow
import { call } from "ramda";
import Style from "further";

import createHelpers from "./util/createHelpers";
import combine from "./util/combine";
import convertToBoxModel from "./util/convertToBoxModel";
import sizes from "./util/modifiers/sizes";
import directions from "./util/modifiers/directions";
import lens from "./util/lenses/baseBorder";

export default call(
  x =>
    createHelpers(sizes, x).reduce(
      combine,
      createHelpers(directions, x)
        // .map(convertToBoxModel)
        .reduce(combine, x.style),
    ),
  { property: "borderRadius", style: Style(lens("borderRadius")) },
);
