//@flow
import cap from "./util/upperCaseFirstLetter";
import Style from "further";
import lens from "./util/lenses/baseSize";

const getRadius = props => lens("radius", props).radius;

const directions = [
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight",
  "top",
  "bottom",
  "left",
  "right",
  "horizontal",
  "vertical",
];

const sizes = {
  none: () => 0,
  xs: x => x / 4,
  sm: x => x / 2,
  md: x => x,
  lg: x => x * 2,
  xl: x => x * 4,
};
const sizeKeys = Object.keys(sizes);

const rounded = Style(props => ({
  borderRadius: getRadius(props),
}));

directions.map(direction => {
  const directionKey = `border${cap(direction)}Radius`;
  rounded[direction] = Style(props => ({ [directionKey]: getRadius(props) }));
  sizeKeys.map(
    sizeKey =>
      rounded[direction][sizeKey] = Style(props => ({
        [directionKey]: sizes[sizeKey](getRadius(props)),
      })),
  );
});

sizeKeys.map(sizeKey => {
  rounded[sizeKey] = Style(props => ({
    borderRadius: sizes[sizeKey](getRadius(props)),
  }));
});

export default rounded;
