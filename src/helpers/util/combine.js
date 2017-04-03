//@flow

export default (
  acc: Function,
  { name, style }: { name: string, style: Function },
): Function => {
  acc[name] = style;
  return acc;
};
