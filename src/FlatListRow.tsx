import React, { cloneElement, createContext } from "react";
import { StyleProp, Text, ViewStyle } from "react-native";
import FlexView from "./FlexView";

export const Child = (props: { item: any }) => <Text>{props.item.name}</Text>;

export default function FlatListRow(props: {
  item: object;
  children: JSX.Element[] | undefined;
  style:StyleProp<ViewStyle>
}) {
  return (
    <FlexView start stretch style={props.style}>
      {props.children &&
        React.Children.map(props.children, (child) =>
          cloneElement(child, { item: props.item })
        )}
    </FlexView>
  );
}
