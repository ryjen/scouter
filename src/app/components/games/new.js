import React from "react"
import {
    Container,
    Content,
    Item,
    Form,
    Icon,
    Input,
    Label,
    Button,
    Footer,
    Text,
    Toast,
    Left,
    Right,
    Root,
} from "native-base"
import Collections from "collections"
import Styles from "components/games/styles"
import Strings from "strings"
import NavHeader from "components/nav-header"
import { Default } from "styles"

const NewGameDialog = props => {
    const nameText = React.createRef()

    const save = () => {
        const game = {
            name: nameText.current,
        }

        Collections.games()
            .add(game)
            .then(() => {
                props.navigation.goBack()
            })
            .catch(err => {
                Toast.show({
                    text: Strings.formatString(
                        Strings.errorAdding,
                        Strings.game,
                        err.message
                    ),
                    type: "danger",
                    duration: 3000,
                    buttonText: Strings.ok,
                })
            })
    }
    return (
        <Container style={Styles.container}>
            <NavHeader
                title={props.title || Strings.newGame}
                icon={"close"}
                onPress={() => props.navigation.goBack()}
                menu={{
                    icon: "content-save",
                    onPress: () => save(),
                }}
            />
            <Content padder>
                <Root>
                    <Form>
                        <Item floatingLabel last>
                            <Label>{Strings.name}</Label>
                            <Input ref={nameText} />
                        </Item>
                    </Form>
                </Root>
            </Content>

            <Footer>
                <Left>
                    <Button
                        light
                        transparent
                        style={Styles.button}
                        onPress={() => props.navigation.goBack()}>
                        <Icon name={"close"} type={Default.iconType} />
                        <Text>{Strings.cancel}</Text>
                    </Button>
                </Left>
                <Right>
                    <Button
                        light
                        transparent
                        style={Styles.button}
                        onPress={() => save()}>
                        <Icon name={"content-save"} type={Default.iconType} />
                        <Text>{Strings.save}</Text>
                    </Button>
                </Right>
            </Footer>
        </Container>
    )
}

export default NewGameDialog
