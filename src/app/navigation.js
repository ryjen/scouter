import React from "react"
import {
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator,
} from "react-navigation"
import { fromBottom, fromRight, fromTop } from "react-navigation-transitions"
import HomeScreen from "components/home"
import GameListScreen from "components/games"
import NewGameDialog from "components/games/new"
import GameDetailScreen from "components/games/detail"
import PlayerListScreen from "components/players"
import PlayerDetailScreen from "components/players/detail"
import ThingListScreen from "components/things"
import ThingDetailScreen from "components/things/detail"
import NewThingDialog from "components/things/new"

const dialogRoutes = ["newGame", "newThing"]

const handleTransitions = ({ scenes }) => {
    const prevScene = scenes[scenes.length - 2]
    const nextScene = scenes[scenes.length - 1]

    if (prevScene) {
        // Custom transitions go there
        if (dialogRoutes.indexOf(nextScene.route.routeName) !== -1) {
            return fromBottom()
        } else if (dialogRoutes.indexOf(prevScene.route.routeName) !== -1) {
            return fromTop()
        }
    }
    return fromRight()
}

const DrawerNavigator = createDrawerNavigator(
    {
        home: { screen: HomeScreen },
        games: { screen: GameListScreen },
        players: { screen: PlayerListScreen },
        things: { screen: ThingListScreen },
    },
    {
        initialRouteName: "home",
    }
)

const AppNavigator = createStackNavigator(
    {
        drawer: DrawerNavigator,
        newGame: NewGameDialog,
        gameDetails: GameDetailScreen,
        playerDetails: PlayerDetailScreen,
        thingDetails: ThingDetailScreen,
        newThing: NewThingDialog,
    },
    {
        initialRouteName: "drawer",
        headerMode: "none",
        transitionConfig: nav => handleTransitions(nav),
    }
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
