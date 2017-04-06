//@flow
import { merge } from "ramda";
import Style from "further";

import breakpoints from "./util/modifiers/breakpoints";

const breakpoint = (location: string) =>
  (...styles) => Style.from(styles).map(x => ({ [location]: x }));

export default breakpoints
  .map(({ name }) => ({
    [name]: breakpoint(name),
  }))
  .reduce(merge, {});
