//@flow

type ISizeList = [string, (number) => number][];
export const sizes: ISizeList = [
  ["none", () => 0],
  ["xs", x => x / 4],
  ["sm", x => x / 2],
  ["md", x => x],
  ["lg", x => x * 2],
  ["xl", x => x * 4],
];

export default (
  { place, style }: { place: string, style: Function },
  sizeList: ISizeList = sizes,
): { style: Function, name: string }[] =>
  sizeList.map(([size, modifier]) => ({
    style: style.map(x => ({ ...x, [place]: modifier(x[place]) })),
    name: size,
  }));
