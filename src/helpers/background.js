import Style from "further";
import { call, merge } from "ramda";

// helpers: color & colorHelpers: custom, brand
import { helpers, colorHelpers } from "./util/modifiers/bgColors.js";
import combine from "./util/combine";
import createHelpers from "./util/createHelpers";
import lens from "./util/lenses/brandColor";

// overwrite the helper's `style` key when the name is custom
// const overwriteCustomKey = y =>
//   y.name === "custom"
//     ? merge(y, {
//         style: color => Style(props => ({ backgroundColor: color })),
//       })
//     : y;

export default call(
  x =>
    createHelpers(x, helpers)
      .map(y => {
        return {
          ...y,
          style: createHelpers(x, colorHelpers)
            // .map(overwriteCustomKey)
            .reduce(combine, y.style),
        };
      })
      .reduce(combine, x.style),
  {
    property: "backgroundColor",
    style: Style(lens("background")),
  },
);
