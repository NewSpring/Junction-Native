//@flow

/*
  takes a Style() object (acc) and appends a new style to it as a key
  e.g. adding `.left` to `padding` to make `padding.left` callable
*/
export default (
  acc: Function,
  { name, style }: { name: string, style: Function },
): Function => {
  acc[name] = style;
  return acc;
};
