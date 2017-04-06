//@flow
import { call } from "ramda";
import Style from "further";

import combine from "./util/combine";
import createHelpers from "./util/createHelpers";
import breakpoints from "./util/modifiers/breakpoints";

export default call(
  x => createHelpers(breakpoints, x).reduce(combine, x.style),
  { property: "maxWidth", style: Style.empty() },
);
