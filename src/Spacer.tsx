import * as React from "react";
import { View } from "react-native";

export default function Spacer(props: {
  space: number;
  flex: number;
  row: boolean;
}) {
  return (
    <View
      style={{
        height: (!props.row && props.space) || 10,
        width: (props.row && props.space) || 10,
        flex: (props.flex && props.flex) || 0,
      }}
    />
  );
}
