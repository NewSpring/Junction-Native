//@flow
import Style from "further";

import upperCaseFirstLetter from "./upperCaseFirstLetter";
import lowerCaseFirstLetter from "./lowerCaseFirstLetter";

type IHelperDescriptor = {
  style: Function,
  name: string,
  place: string,
};
export const positions = ["left", "right", "top", "bottom"];

export default (
  { name, lens }: { name: string, lens: Function },
  positionList: string[] = positions,
): IHelperDescriptor[] =>
  positionList.map(upperCaseFirstLetter).map(x => [x, name.concat(x)]).map(([
    place,
    styleName,
  ]) => ({
    style: Style(lens(styleName)),
    name: lowerCaseFirstLetter(place),
    place: styleName,
  }));
