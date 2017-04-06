// @flow
import Style from "further";

import createHelpers from "./util/createHelpers";
import colors from "./util/modifiers/colors";
import combine from "./util/combine";

export default createHelpers(colors, { property: "color" }).reduce(
  combine,
  Style.empty(),
);
