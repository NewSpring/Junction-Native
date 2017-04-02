import React from "react";
import Style from "@jongold/further";
import { View } from "react-native";
import { Text } from "./src";

const containerStyles = Style.of({
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
});

export default class App extends React.Component {
  render() {
    return (
      <View style={containerStyles.resolve()}>
        <Text>This is a Junction Text element</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
