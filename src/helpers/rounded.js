//@flow
import { call } from "ramda";
import Style from "further";

import createHelpers from "./util/createHelpers";
import combine from "./util/combine";
import sizes from "./util/modifiers/sizes";
import lens from "./util/lenses/baseBorder";

const borderDirections = [
  {
    name: "top",
    reducer: properties => properties.map(({ props }) => ({
      borderTopLeftRadius: (
        props.borderTop ? props.borderTop : props.theme.sizes.border
      ),

      borderTopRightRadius: (
        props.borderTop ? props.borderTop : props.theme.sizes.border
      ),
    })),
  },
  {
    name: "bottom",
    reducer: properties => properties.map(({ props }) => ({
      borderBottomLeftRadius: (
        props.borderBottom ? props.borderBottom : props.theme.sizes.border
      ),

      borderBottomRightRadius: (
        props.borderBottom ? props.borderBottom : props.theme.sizes.border
      ),
    })),
  },
  {
    name: "left",
    reducer: properties => properties.map(({ props }) => ({
      borderTopLeftRadius: (
        props.borderLeft ? props.borderLeft : props.theme.sizes.border
      ),

      borderBottomLeftRadius: (
        props.borderLeft ? props.borderLeft : props.theme.sizes.border
      ),
    })),
  },
  {
    name: "right",
    reducer: properties => properties.map(({ props }) => ({
      borderTopRightRadius: (
        props.borderRight ? props.borderRight : props.theme.sizes.border
      ),

      borderBottomRightRadius: (
        props.borderRight ? props.borderRight : props.theme.sizes.border
      ),
    })),
  },
];

// const borderDirectionsReducer = properties =>
//   properties.map(({ property, props, name }) => {
//     return {
//       [`${property}${names[0]}`]: lens(property, props)[property],
//       [`${property}${names[1]}`]: lens(property, props)[property],
//     };
//   });

export default call(
  x => createHelpers(sizes, x).reduce(
    combine,
    createHelpers(borderDirections, x)
      // .map(convertToBoxModel)
      .reduce(combine, x.style),
  ),
  { property: "borderRadius", style: Style(lens("borderRadius")) },
);
