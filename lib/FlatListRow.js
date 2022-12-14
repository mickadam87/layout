import React, { cloneElement } from "react";
import { Text } from "react-native";
import FlexView from "./FlexView";
export const Child = (props) => <Text>{props.item.name}</Text>;
export default function FlatListRow(props) {
    return (<FlexView start stretch style={{ flex: 0, minHeight: 70 }}>
      {props.children &&
            React.Children.map(props.children, (child) => cloneElement(child, { item: props.item }))}
    </FlexView>);
}
//# sourceMappingURL=FlatListRow.js.map