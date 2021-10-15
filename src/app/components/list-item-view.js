// @flow

import * as React from "react"
import { ListItem, Separator } from "native-base"
import { Text } from "react-native"

type ListType =
    | "icon"
    | "avatar"
    | "thumbnail"
    | "itemDivider"
    | "itemHeader"
    | "selected"
    | "noIndent"

type Props<T> = {
    value: T | React.Node | String,
    onPress?: () => void,
    children?: React.Node,
    listType?: ListType,
}

const ListItemView = <T>(props: Props<T>) => {
    if (props.value instanceof React.Node) {
        return props.value
    }

    if (props.value instanceof String) {
        return (
            <Separator bordered>
                <Text>{props.value}</Text>
            </Separator>
        )
    }

    const listProps = {}

    if (props.listType) {
        listProps[props.listType] = true
    }

    return (
        <ListItem {...listProps} onPress={props.onPress}>
            {props.children}
        </ListItem>
    )
}

export default ListItemView
