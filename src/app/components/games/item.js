// @flow
import React from "react"
import { Body, Button, H1, Left, ListItem, Right, Separator } from "native-base"
import { Text } from "react-native"
import type { Game } from "types/game"
import Styles from "components/games/styles"

type Props = {
    value: Game | String,
    onPress?: () => void,
}

const GameListItem = (props: Props) => {
    if (props.value instanceof String) {
        return (
            <Separator bordered>
                <Text>{props.value}</Text>
            </Separator>
        )
    }

    const game = props.value

    const things = game.things || []

    const foundThings = things.filter(thing => {
        return thing.found !== undefined
    })

    const completed = foundThings.length / game.maxThings

    const turnsLeft = game.maxThings - things.length

    const subtitle = `${foundThings.length} of ${
        game.maxThings
    } things scouted, ${turnsLeft} turns left`

    return (
        <ListItem avatar onPress={props.onPress}>
            <Left>
                <Button style={Styles.avatar}>
                    <Text style={Styles.avatarText}>
                        {completed.toString()}%
                    </Text>
                </Button>
            </Left>
            <Body>
                <H1>{game.name}</H1>
                <Text>{subtitle}</Text>
            </Body>
            <Right />
        </ListItem>
    )
}

export default GameListItem
