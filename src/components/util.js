// Functions used in components, but not needed for export

import Style from "@jongold/further";

export const mergePropStyle = props =>
  props.style instanceof Style ? props.style.resolve(props) : props.style;
