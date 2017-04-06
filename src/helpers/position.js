//@flow
import Style from "further";

import combine from "./util/combine";
import createHelpers from "./util/createHelpers";

const fromValue = (name: string): { name: string, reducer: Function } => ({
  reducer: () => [{ position: name }],
  name,
});

export default createHelpers(["relative", "absolute", "fixed"].map(fromValue), {
  property: "position",
  style: Style.empty(),
}).reduce(combine, Style.empty());
