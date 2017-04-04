//@flow
import { curry, omit } from "ramda";
import Style from "further";

export type IHelperDescription = {
  property: string, // "padding"
  style: Function, // typeof Style. can be Style.empty()
};

export type IHelperList = {
  name: string, // the name of the helper (i.e "left", "sm")
  propertyModifier: (string) => string, // the name of the css property to modify (i.e margin => "marginLeft")
  reducer: (any) => any, // the reducer for the previous value (i.e for "sm" it would be x => x/d)
};

export type IHelperResult = {
  property: string, // the `css` style property name (marginLeft, borderTopRadius, etc)
  name: string, // what the helper will be called with (padding.LEFT, margin.TOP)
  style: Style, // the style function to be called
};

const noop = x => x;

/*
  returns an array of objects with the information needed to add the helpers to the
  top level style
*/
export default curry(({
  property,
  style,
}: IHelperDescription, list: IHelperList[]): IHelperResult[] =>
  list
    .map(({ name, propertyModifier = noop, reducer }) => ({
      place: propertyModifier(property, name),
      reducer,
      name,
    }))
    .map(({ place, name, reducer = noop }) => ({
      style: style.chain(prev =>
        Style(props => ({
          ...omit([property], prev),
          [place]: props[place]
            ? reducer(props[place])
            : reducer(prev[property]),
        }))),
      property: place,
      name,
    })));
