//@flow
import Style from "further";

export default (width: number) =>
  Style(props => {
    return props.theme.isNative
      ? { flex: width }
      : { width: `${width * 100}%` };
  });
