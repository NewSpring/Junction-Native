//@flow
import { curry, toPairs } from "ramda";
import Style from "further";

export type IHelperDescription = {
  property: void | string, // "padding"
  style: void | Function, // typeof Style. can be Style.empty()
};

export type IHelperProperty = {
  property: string, // "padding"
  props: Object, // props from the component
  name: string, // what the helper will be called (padding.LEFT, margin.TOP)
};

export type IHelperList = {
  name: string, // the name of the helper (i.e "left", "sm")
  reducer: (IHelperProperty[]) => Object[], // an array of props, properties, and values to which return an array of new css properties
};

export type IHelperResult = {
  property: string, // the `css` style property name (marginLeft, borderTopRadius, etc)
  name: string, // what the helper will be called with (padding.LEFT, margin.TOP)
  style: Style, // the style function to be called
};

/*
  returns an array of objects with the information needed to add the helpers to the
  top level style
*/
export default curry((list: IHelperList[], {
  property = "",
  style = Style.empty(),
}: IHelperDescription): IHelperResult[] =>
  list.map(({ name, reducer }) => ({
    style: style.chain(style =>
      Style(props =>
        reducer(
          toPairs(style).map(([key, value]) => ({
            property: key,
            value,
            name,
            props,
          })),
        ).reduce((prev, next) => ({ ...prev, ...next }), {}))),
    property,
    name,
  })));
