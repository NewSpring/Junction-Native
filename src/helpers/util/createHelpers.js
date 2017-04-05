//@flow
import { curry, omit, toPairs } from "ramda";
import Style from "further";

import combine from "./combine";

export type IHelperDescription = {
  property: string,
  style: Function,
};

export type IHelperProperty = {
  property: string,
  props: Object,
  name: string,
};

export type IHelperList = {
  name: string, // the name of the helper (i.e "left", "sm")
  reducer: (IHelperProperty[]) => Object[],
};

export type IHelperResult = {
  property: string,
  name: string,
  style: Style,
};

export default curry((
  list: IHelperList[],
  { property, style }: IHelperDescription,
): IHelperResult[] =>
  list.map(({ place, name, reducer = noop }) => ({
    style: style.chain(style => Style(props => reducer(
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
