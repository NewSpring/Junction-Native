//@flow
import { curry, toPairs } from "ramda";
import Style from "further";

export type IHelperDescription = {
  property: void | string,
  style: void | Function,
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
  {
    property = "",
    style = Style.empty(),
  }: IHelperDescription,
): IHelperResult[] => list.map(({ name, reducer }) => ({
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
