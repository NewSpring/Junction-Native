import cap from "../upperCaseFirstLetter";
import lens from "../lenses/baseSize";

// generic direction reducer
const reducer = properties =>
  properties.map(({ property, props, name }) => ({
    [`${property}${cap(name)}`]: lens(property, props)[property],
  }));

// direction reducer for sides/ends (two results)
const doubleReducer = properties =>
  properties.map(({ property, props, name }) => {
    const names = name === "ends" ? ["Top", "Bottom"] : ["Left", "Right"];
    return {
      [`${property}${names[0]}`]: lens(property, props)[property],
      [`${property}${names[1]}`]: lens(property, props)[property],
    };
  });

export default [
  { name: "left", reducer },
  { name: "top", reducer },
  { name: "bottom", reducer },
  { name: "right", reducer },
  { name: "sides", reducer: doubleReducer },
  { name: "ends", reducer: doubleReducer },
];
