//@flow
import { curry } from "ramda";

// generic camelCase lens for setting a base size of something
export default curry((name: string, props: Object): { [string]: number } => ({
  [name]: props[name] ? props[name] : props.theme.sizes.border,
}));
