import React, { cloneElement, createContext } from "react";
import { Text } from "react-native";
import FlexView from "./FlexView";

export const Child = (props: { item: any }) => <Text>{props.item.name}</Text>;

export default function FlatListRow(props: {
  item: object;
  children: JSX.Element[] | undefined;
}) {
  return (
    <FlexView start stretch style={{ flex: 0, minHeight: 70 }}>
      {props.children &&
        React.Children.map(props.children, (child) =>
          cloneElement(child, { item: props.item })
        )}
    </FlexView>
  );
}
