//@flow
import { call } from "ramda";
import Style from "further";

import combine from "./util/combine";
import createHelpers from "./util/createHelpers";
import lens from "./util/lenses/baseSize";
import upperCaseFirstLetter from "./util/upperCaseFirstLetter";

/*
 * util/modifiers/sizes.js
 */
// expect(margin.sm.resolve(props)).toEqual({ margin: 8 });
const sizeReducer = amount => properties => properties.map(
  // console.log(properties, amount),
  ({ property, value }) => ({
    [property]: value * amount,
  }),
);

const sizes = [
  {
    name: "sm",
    reducer: sizeReducer(0.5),
  },
  {
    name: "md",
    reducer: sizeReducer(1),
  },
  {
    name: "lg",
    reducer: sizeReducer(2),
  },
];

/*
 * end util/modifiers/directions.js
 * /

/*
 * util/modifiers/directions.js
 *
 */
// generic direction reducer
const reducer = properties => properties.map(
  ({ property, props, name }) => (console.log(property, name, props), {
    [`${property}${upperCaseFirstLetter(name)}`]: lens(property)(props),
  }),
);

const directions = [
  { name: "left", reducer },
  { name: "top", reducer },
  { name: "bottom", reducer },
  { name: "right", reducer },
  { name: "sides", reducer },
  { name: "ends", reducer },
];

/*
 * end uti/modifiers.js
 */

export default call(
  // create margin.sm, md, lg, etc
  x => createHelpers(sizes, x).reduce(
    combine,
    // create margin.left, right, etc
    createHelpers(directions, x)
      // // create margin.left.sm, etc
      .map(y => ({
        ...y,
        style: createHelpers(sizes, y).reduce(combine, y.style),
      }))
      .reduce(combine, x.style),
  ),
  // define that margin is the property to create
  { property: "margin", style: Style(lens("margin")) },
);

// import combine from "./util/combine";
// import sizes from "./util/modifiers/sizes";
// import directions from "./util/modifiers/directions";
// import lens from "./util/lenses/baseSize";

// problem to solve
// use props (i.e padding={16}) or theme props.theme.sizes.base // 8
// padding => { padding: 16 }
// padding-left => { paddingLeft: 16 }
// padding-double => { padding: 32 }
// padding-double-left => { paddingLeft: 32 }
// padding-vertical => { paddingTop: 16, paddingBottom: 16 }
// padding-double-vertical => { paddingTop: 32, paddingBottom: 32 }

// propertyName: props[propertyName] || reducer(lens(theme))
// padding: props.padding ? props.padding : props.theme.sizes.base

// have a top level style object
// const st = Style(props => ({
//   padding: props.padding ? props.padding : props.theme.sizes.base
// }));

// // left
// st.left = Style(props => ({
//   paddingLeft: props.paddingLeft ? props.paddingLeft : props.theme.sizes.base
// }))

// // double
// st.large = Style(props => ({
//   padding: props.padding ? props.padding : props.theme.sizes.base * 2
// }))

// // half
// st.sm = Style(props => ({
//   padding: props.padding ? props.padding : props.theme.sizes.base * .25
// }));

// // double left
// st.left.double = Style(props => ({
//   paddingLeft: props.paddingLeft ? props.paddingLeft : props.theme.sizes.base * 2
// }))

// // vertical
// st.vertical = Style(props => ({
//   paddingTop: props.padding ? props.padding : props.theme.sizes.base,
//   paddingBottom: props.padding ? props.padding : props.theme.sizes.base,
// }));

// // double vertical
// st.double.vertical = Style(props => ({
//   paddingTop: props.padding ? props.padding : props.theme.sizes.base * 2,
//   paddingBottom: props.padding ? props.padding : props.theme.sizes.base * 2,
// }))

// modifiers of fontWeight
// const weights = [
//   { name: "bold", reducer: () => ({ fontWeight: "500" }) },
//   { name: "thin", reducer: () => ({ fontWeight: "100" }) },
//   { name: "normal", reducer: () => ({ fontWeight: "normal" }) },
// ];

// // modifiers of textAlign
// const alignments = [
//   // { name: "left", reducer: (property, value) => ({ [`${property}Left`]: value }) },
//   { name: "left", reducer: () => ({ textAlign: "left" }) },
//   { name: "right" },
//   { name: "center" },
// ];

// // modifiers of fontStyle
// const styles = [
//   { name: "normal", reducer: () => [({ fontStyle: "normal" })] },
//   { name: "italic" },
//   { name: "uppercase" },
//   { name: "lowercase" },
//   { name: "underline" },
// ];

// export default styles
//   .concat(alignments)
//   .concat(weights)
//   .map(createHelper)
//   .reduce(combine, Style.empty());

// const width = value => Style.of({ width: value });

// const colorReducer = properties => properties.map((
//   { property, name, props },
// ) => ({
//   [property]: props.color ? props.color : props.theme.colors[name],
// }));

// const colors = [
//   {
//     name: "brand",
//     reducer: colorReducer,
//   },
//   { name: "dark", reducer: colorReducer },
// ];

// background.color.custom = color => Style.of({ backgroundColor: color });

// border.top
// { borderRadiusTopLeft: 1, borderRadiusTopRight: 1 }
// border.top.left
// { borderRadiusTopLeft: 1 }
// border.bottom.right
// { borderRadiusBottomRight: 1 }
//
// const borderDirections = [
//   {
//     name: "top",
//     reducer: properties => properties.map(({ props }) => ({
//       borderRadiusTopLeft: (
//         props.borderTop ? props.borderTop : props.theme.sizes.border
//       ),

//       borderRadiusTopRight: (
//         props.borderTop ? props.borderTop : props.theme.sizes.border
//       ),
//     })),
//   },
// ];
