//@flow

export default (
  key: string,
  value: any,
  property: string,
): { [string]: any } => {
  switch (key) {
    case "top":
    case "bottom":
    case "sides":
      return {
        [`${property}Left`]: value,
        [`${property}Right`]: value,
      };
    case "left":
    case "right":
    case "ends":
      return {
        [`${property}Top`]: value,
        [`${property}Bottom`]: value,
      };
    default:
      return {
        [`${property}Top`]: value,
        [`${property}Bottom`]: value,
        [`${property}Left`]: value,
        [`${property}Right`]: value,
      };
  }
};
