import React, { useEffect } from "react"
import SplashScreen from "react-native-splash-screen"
import { View } from "react-native"
import { Container, H1 } from "native-base"
import Styles from "components/home/styles"
import NavHeader from "components/nav-header"
import Strings from "strings"

const HomeScreen = props => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])

    const welcome = "Welcome to Scouter!"

    return (
        <Container>
            <NavHeader
                title={props.title || Strings.appName}
                icon={"menu"}
                onPress={() => props.navigation.toggleDrawer()}
            />
            <View style={Styles.content}>
                <H1 style={Styles.welcome}>{welcome}</H1>
            </View>
        </Container>
    )
}

HomeScreen.navigationOptions = {
    title: "Home",
}

export default HomeScreen
