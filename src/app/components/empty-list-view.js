// @flow

import React from "react"
import { StyleSheet, View } from "react-native"
import { H2, Icon } from "native-base"
import type { SyncInfo } from "types/sync"
import { Default } from "styles"

type Props = {
    icon: String,
    size?: number,
    type?: String,
    message: String,
    sync?: SyncInfo,
    style?: View.propTypes.style,
}

const EmptyListView = (props: Props) => {
    if (props.sync?.loading) {
        return null
    }
    return (
        <View style={[styles.container, props.style]}>
            <Icon
                name={props.icon}
                size={props.size || Default.touchSize}
                type={props.type || Default.iconType}
            />
            <H2 style={styles.message}>{props.message}</H2>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        paddingTop: 100,
        width: "100%",
    },
    message: {},
})

export default EmptyListView
