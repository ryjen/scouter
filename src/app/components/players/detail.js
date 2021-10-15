import React from "react"
import { Container, Content, H1 } from "native-base"
import Strings from "strings"
import AppStyles from "styles"
import NavHeader from "components/nav-header"

const PlayerDetailScreen = props => {
    const player = props.navigation.getParam("player")

    return (
        <Container>
            <NavHeader
                title={props.title || Strings.player}
                icon={"chevron-left"}
                onPress={() => props.navigation.goBack()}
            />
            <Content style={AppStyles.content}>
                <H1>{player.name}</H1>
            </Content>
        </Container>
    )
}

export default PlayerDetailScreen
