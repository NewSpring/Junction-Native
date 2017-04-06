//@flow
import { compose, call, evolve, negate } from "ramda";
import Style from "further";

import combine from "./util/combine";
import createHelpers from "./util/createHelpers";
import lens from "./util/lenses/baseSize";
import sizes from "./util/modifiers/sizes";
import directions from "./util/modifiers/directions";

const reverse = compose(negate, Math.abs);
const negative = evolve({
  margin: reverse,
  marginLeft: reverse,
  marginRight: reverse,
  marginTop: reverse,
  marginBottom: reverse,
});

export default call(
  // create marginBack.sm, md, lg, etc
  x =>
    createHelpers(sizes, x).reduce(
      combine,
      // create marginBack.left, right, etc
      createHelpers(directions, x)
        // // create marginBack.left.sm, etc
        .map(y => ({
          ...y,
          style: createHelpers(sizes, {
            ...y,
            style: y.style.map(negative),
          }).reduce(combine, y.style.map(negative)),
        }))
        .reduce(combine, x.style.map(negative)),
    ),
  // define that margin is the map(negative)property to create
  {
    property: "margin",
    style: Style(props => ({
      margin: props.marginBack
        ? props.marginBack
        : lens("margin")(props).margin,
    })).map(negative),
  },
);
