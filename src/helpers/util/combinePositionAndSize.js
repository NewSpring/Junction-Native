//@flow
import Style from "further";

import createSizeHelpers from "./createSizeHelpers";
import createPositionalHelpers from "./createPositionalHelpers";
import combine from "./combine";

export default (
  { name, lens }: { name: string, lens: (string) => (Function) => Object },
): Function =>
  createSizeHelpers({
    place: name,
    style: Style(lens(name)),
  }).reduce(
    combine,
    createPositionalHelpers({ name, lens })
      .map(x => ({
        ...x,
        style: createSizeHelpers(x).reduce(combine, x.style),
      }))
      .reduce(combine, Style(lens(name))),
  );
