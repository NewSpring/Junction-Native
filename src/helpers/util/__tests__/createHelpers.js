import Style from "further";
import create from "../createHelpers";

// XXX should we write a lot more interation tests for this?
it("can handle adding a new property from a previous one", () => {
  const st = Style(({ margin, theme }) => ({
    margin: margin ? margin : theme ? theme.baseSize * 2 : 8,
  }));

  const props = { theme: { baseSize: 8 } };
  const sizes = [
    {
      name: "left",
      reducer: properties =>
        properties.map(({ property, name, value, props }) => ({
          [`${property}${name}`]: props.marginLeft ? props.marginLeft : value,
        })),
    },
    {
      name: "sm",
      reducer: properties =>
        properties.map(({ property, value }) => ({
          [property]: value / 2,
        })),
    },
  ];
  const [left, sm] = create(sizes, { property: "margin", style: st });
  expect(left.style.resolve(props)).toEqual({ marginleft: 16 });
  expect(sm.style.resolve(props)).toEqual({ margin: 8 });
  expect(left.style.resolve({ marginLeft: 1 })).toEqual({ marginleft: 1 });
});

it("can be curried and handle adding a new property from a previous one", () => {
  const st = Style(({ margin, theme }) => ({
    margin: margin ? margin : theme ? theme.baseSize * 2 : 8,
  }));

  const props = { theme: { baseSize: 8 } };
  const sizes = [
    {
      name: "left",
      reducer: properties =>
        properties.map(({ property, name, value, props }) => ({
          [`${property}${name}`]: props.marginLeft ? props.marginLeft : value,
        })),
    },
    {
      name: "sm",
      reducer: properties =>
        properties.map(({ property, value }) => ({
          [property]: value / 2,
        })),
    },
  ];
  const sizeHelpers = create(sizes);
  const [left, sm] = sizeHelpers({ property: "margin", style: st });
  expect(left.style.resolve(props)).toEqual({ marginleft: 16 });
  expect(sm.style.resolve(props)).toEqual({ margin: 8 });
  expect(left.style.resolve({ marginLeft: 1 })).toEqual({ marginleft: 1 });
});
