import * as React from "react";
import { StyleProp, ViewStyle, View } from "react-native";

export default function FlexView(props: {
  start?: boolean;
  end?: boolean;
  stretch?: boolean;
  evenly?: boolean;
  between?: boolean;
  row?: boolean;
  margin?: number;
  padding?: number;
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element[] | JSX.Element;
}) {
  const viewStyle: ViewStyle = {
    display: "flex",
    flex: 1,
    padding: props.padding || 5,
    marginHorizontal: props.margin,
    flexDirection: (props.row && "row") || "column",
    justifyContent:
      (props.end && "flex-end") ||
      (props.start && "flex-start") ||
      (props.evenly && "space-evenly") ||
      (props.between && "space-between") ||
      "center",
    alignItems: (props.stretch && "stretch") || "center",
  };
  return <View style={[props.style, viewStyle]}>{props.children}</View>;
}
