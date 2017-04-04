//@flow
import { curry, omit } from "ramda";
import Style from "further";

type IHelperDescription = {
  property: string,
  style: Function,
};

type IHelperList = {
  name: string, // the name of the helper (i.e "left", "sm")
  propertyModifier: (string) => string, // the name of the css property to modify (i.e margin => "marginLeft")
  reducer: (any) => any, // the reducer for the previous value (i.e for "sm" it would be x => x/d)
};

type IHelperResult = {
  name: string,
  style: Style,
}[];

const noop = x => x;

export default curry(({
  property,
  style,
}: IHelperDescription, list: IHelperList[]): IHelperResult =>
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
          [place]: props[place] ? props[place] : reducer(prev[property]),
        }))),
      property: place,
      name,
    })));
