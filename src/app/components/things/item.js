// @flow
import React from "react"
import {
    Body,
    Thumbnail,
    H1,
    Left,
    ListItem,
    Right,
    Separator,
} from "native-base"
import { Text } from "react-native"
import type { Player } from "types/player"

type Props = {
    value: Player | String,
    onPress?: () => void,
}

const ThingListItem = (props: Props) => {
    if (props.value instanceof String) {
        return (
            <Separator bordered>
                <Text>{props.value}</Text>
            </Separator>
        )
    }

    const thing = props.value

    return (
        <ListItem avatar onPress={props.onPress}>
            <Left>
                <Thumbnail source={thing.imageUrl || ""} />
            </Left>
            <Body />
            <Right />
        </ListItem>
    )
}

export default ThingListItem
