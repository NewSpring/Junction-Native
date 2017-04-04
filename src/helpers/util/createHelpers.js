//@flow
import { curry, omit } from "ramda";
import Style from "further";

export type IHelperDescription = {
  property: string,
  style: Function,
};

export type IHelperList = {
  name: string, // the name of the helper (i.e "left", "sm")
  propertyModifier: (string) => string, // the name of the css property to modify (i.e margin => "marginLeft")
  reducer: (any) => any, // the reducer for the previous value (i.e for "sm" it would be x => x/d)
};

export type IHelperResult = {
  property: string,
  name: string,
  style: Style,
};

const noop = x => x;

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
