import * as React from "react";
import { Text, TextStyle } from "react-native";

export default function TextField(props: {
  children?: any;
  center: boolean;
  right: boolean;
  justify: boolean;
  bold: boolean;
  fontSize: number;
  color: string;
  style: TextStyle;
}) {
  const textStyle: TextStyle = {
    textAlign:
      (props.center && "center") ||
      (props.right && "right") ||
      (props.justify && "justify") ||
      "left",
    fontSize: (props.fontSize && props.fontSize) || 12,
    fontWeight: (props.bold && "bold") || "normal",
    color:
      (props.color && props.color) ||
      (props.style && props.style.color) ||
      "grey",
    ...props.style,
  };
  return <Text style={[textStyle, props.style]}>{props.children}</Text>;
}
