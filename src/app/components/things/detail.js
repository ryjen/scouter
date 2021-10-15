import React from "react"
import { Container, Content } from "native-base"
import Strings from "strings"
import AppStyles from "styles"
import NavHeader from "components/nav-header"

const ThingDetailScreen = props => {
    const thing = props.navigation.getParam("thing")

    return (
        <Container>
            <NavHeader
                title={props.title || Strings.thing}
                icon={"chevron-left"}
                onPress={() => props.navigation.goBack()}
            />
            <Content style={AppStyles.content} />
        </Container>
    )
}

export default ThingDetailScreen
