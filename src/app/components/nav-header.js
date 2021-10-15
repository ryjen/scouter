// @flow

import { Body, Button, Header, Icon, Left, Right, Title } from "native-base"
import React from "react"
import { Default } from "styles"

export type Action = {
    icon: string,
    iconType?: string,
    onPress?: () => void,
}

type Props<T: Action> = {
    title: String,
    menu?: Action | [Action],
}

const renderAction = item => {
    return (
        <Button transparent onPress={item.onPress}>
            <Icon name={item.icon} type={item.iconType || Default.iconType} />
        </Button>
    )
}

const NavHeader = <T>(props: Props<T>) => {
    let navButton = null
    let menuActions = null

    if (props.onPress) {
        navButton = (
            <Button transparent onPress={props.onPress}>
                <Icon
                    name={props.icon}
                    type={props.iconType || Default.iconType}
                />
            </Button>
        )
    }

    if (props.menu) {
        if (props.menu instanceof Array) {
            menuActions = props.menu.map(item => {
                return renderAction(item)
            })
        } else {
            menuActions = renderAction(props.menu)
        }
    }

    return (
        <Header>
            <Left>{navButton}</Left>
            <Body>
                <Title>{props.title || Strings.appName}</Title>
            </Body>
            <Right>{menuActions}</Right>
        </Header>
    )
}

export default NavHeader
