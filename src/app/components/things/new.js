import React from "react"
import {
    Container,
    Content,
    Button,
    Footer,
    Text,
    Toast,
    Root,
    Left,
    Right,
    Icon,
} from "native-base"
import Collections from "collections"
import Styles from "components/games/styles"
import Strings from "strings"
import NavHeader from "components/nav-header"
import { Default } from "styles"

const NewThingDialog = props => {
    const save = () => {
        const thing = {}

        Collections.things()
            .add(thing)
            .then(() => {
                props.navigation.goBack()
            })
            .catch(err => {
                Toast.show({
                    text: Strings.formatString(
                        Strings.errorAdding,
                        Strings.thing,
                        err.message
                    ),
                    duration: 3000,
                    type: "danger",
                    buttonText: Strings.ok,
                })
            })
    }
    return (
        <Container style={Styles.container}>
            <NavHeader
                title={props.title || Strings.newThing}
                icon={"close"}
                onPress={() => props.navigation.goBack()}
                menu={{
                    icon: "content-save",
                    onPress: () => save(),
                }}
            />

            <Content padder>
                <Root />
            </Content>

            <Footer>
                <Left>
                    <Button
                        light
                        transparent
                        onPress={() => props.navigation.goBack()}>
                        <Icon name={"close"} type={Default.iconType} />
                        <Text>{Strings.cancel}</Text>
                    </Button>
                </Left>
                <Right>
                    <Button light transparent onPress={() => save()}>
                        <Icon name={"content-save"} type={Default.iconType} />
                        <Text>{Strings.save}</Text>
                    </Button>
                </Right>
            </Footer>
        </Container>
    )
}

export default NewThingDialog
