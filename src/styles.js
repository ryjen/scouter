// @flow

import { StyleSheet } from "react-native"

const white = "#FFFFFF"
const lightGrey = "#ECEFF1"

export const Default = {
    iconType: "MaterialCommunityIcons",
    touchSize: 42,
}

export const Colors = {
    white: white,
    lightGrey: lightGrey,
}

const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 12,
    },
})

export default AppStyles
