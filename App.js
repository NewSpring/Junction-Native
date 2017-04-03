import React from "react";
import Style from "@jongold/further";
import { View } from "react-native";
import {
  Text,
  BlockQuote,
  Small,
  P,
  Heading,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from "./src";

const Typography = props => (
  <View>
    <H1>H1</H1>
    <H2>H2</H2>
    <H3>H3</H3>
    <H4>H4</H4>
    <H5>H5</H5>
    <H6>H6</H6>
    <Text>This is a `Text`</Text>
    <P>This is a `P`</P>
    <BlockQuote>This is a `BlockQuote`</BlockQuote>
    <Small>This is a `Small`</Small>
  </View>
);

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
        <H2>Welcome to Junction</H2>
        <Text>Changes you make will automatically reload.</Text>
        <Text style={{ marginBottom: 20 }}>
          Shake your phone to open the developer menu.
        </Text>
        <Typography />
      </View>
    );
  }
}
