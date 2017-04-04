//@flow
import Style from "further";

import combine from "./util/combine";
import createHelpers from "./util/createHelpers";

const fromValue = (name: string): { name: string, reducer: Function } => ({
  reducer: () => name,
  name,
});

export default createHelpers(
  {
    property: "position",
    style: Style.empty(),
  },
  ["relative", "absolute", "fixed"].map(fromValue),
).reduce(combine, Style.empty());
