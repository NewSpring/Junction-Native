//@flow
import composePositionAndSize from "./util/combinePositionAndSize";
import lens from "./util/lenses/baseSize";

export default composePositionAndSize({ name: "margin", lens });
