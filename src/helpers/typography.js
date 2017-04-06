//@flow
import Style from "further";

import combine from "./util/combine";
import createHelpers from "./util/createHelpers";
import weights from "./util/modifiers/weights";

const fromValue = (name: string): { name: string, reducer: Function } => ({
  reducer: () => name,
  name,
});

const fontStyle = createHelpers(
  {
    property: "fontStyle",
    style: Style.empty(),
  },
  ["normal", "italic", "oblique"].map(fromValue),
).reduce(combine, Style.empty());

const fontWeight = createHelpers(
  { property: "fontWeight", style: Style.empty() },
  weights,
).reduce(combine, Style.empty());

const textAlign = createHelpers(
  {
    property: "textAlign",
    style: Style.empty(),
  },
  ["auto", "left", "right", "center", "justify"].map(fromValue),
).reduce(combine, Style.empty());

export { fontStyle, fontWeight, textAlign };
