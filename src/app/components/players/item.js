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

const PlayerListItem = (props: Props) => {
    if (props.value instanceof String) {
        return (
            <Separator bordered>
                <Text>{props.value}</Text>
            </Separator>
        )
    }

    const player = props.value

    return (
        <ListItem avatar onPress={props.onPress}>
            <Left>
                <Thumbnail source={player.imageUrl} />
            </Left>
            <Body>
                <H1>{player.name}</H1>
            </Body>
            <Right />
        </ListItem>
    )
}

export default PlayerListItem
