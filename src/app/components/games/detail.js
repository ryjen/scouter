import React from "react"
import { Container, Content, H1, Label, Input, Form, Item } from "native-base"
import Strings from "strings"
import AppStyles from "styles"
import NavHeader from "components/nav-header"

const GameDetailScreen = props => {
    const game = props.navigation.getParam("game")

    return (
        <Container>
            <NavHeader
                title={props.title || Strings.game}
                icon={"chevron-left"}
                onPress={() => props.navigation.goBack()}
            />
            <Content style={AppStyles.content}>
                <H1>{game.name}</H1>
                <Form>
                    <Item inlineLabel>
                        <Label>{Strings.maxThings}</Label>
                        <Input
                            disabled={true}
                            placeholder={game.maxThings.toString()}
                        />
                    </Item>
                </Form>
            </Content>
        </Container>
    )
}

export default GameDetailScreen
