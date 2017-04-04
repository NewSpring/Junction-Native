import Style from "further";

import convert from "../convertToBoxModel";

it("cleans an object and creates a new one", () => {
  const neu = convert({
    name: "left",
    property: "borderRadiusLeft",
    style: Style.of({ borderRadiusLeft: 1 }),
  });
  expect(neu.style.resolve()).toEqual({
    borderRadiusLeftTop: 1,
    borderRadiusLeftBottom: 1,
  });
});
