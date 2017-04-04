//@flow
import { omit } from "ramda";

import type IHelperResult from "./createHelpers";
import processBoxProperty from "./proccessBoxProperty";

export default (y: IHelperResult): IHelperResult => ({
  ...y,
  style: y.style.map(style => ({
    ...omit(y.property),
    ...processBoxProperty(y.name, style[y.property], y.property),
  })),
});
