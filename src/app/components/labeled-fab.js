// @flow

import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Fab, Icon } from "native-base"
import { Colors, Default } from "styles"

type ItemProps = {
    icon: String,
    label: String,
    onPress: () => {},
    type?: String,
}

type Props = {
    direction?: String,
    containerStyle?: View.propTypes.style | Array<View.propTypes.style>,
    position?: String,
    style?: View.propTypes.style,
    icon: String,
    iconType?: String,
    buttons: Array<ItemProps>,
}

const LabeledFloatingActionButton = (props: Props) => {
    const [active, setActive] = useState(false)

    return (
        <Fab
            active={active}
            direction={props.direction}
            position={props.position}
            style={props.style}
            containerStyle={props.containerStyle}
            onPress={() => setActive(!active)}>
            <Icon type={props.iconType || Default.iconType} name={props.icon} />
            {props.buttons.map((item, key) => {
                return (
                    <TouchableOpacity key={key} onPress={item.onPress}>
                        {active && (
                            <Text style={styles.label}>{item.label}</Text>
                        )}
                        <Icon
                            type={item.type || Default.iconType}
                            name={item.icon}
                        />
                    </TouchableOpacity>
                )
            })}
        </Fab>
    )
}

const styles = StyleSheet.create({
    label: {
        backgroundColor: Colors.lightGrey,
        borderRadius: 8,
        padding: 8,
        position: "absolute",
        right: 50,
        top: 2,
    },
})

export default LabeledFloatingActionButton
