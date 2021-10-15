import React from "react"
import { FlatList } from "react-native"
import { useCollection } from "hooks/collections"
import Collections from "collections"
import EmptyListView from "components/empty-list-view"
import GameListItem from "components/games/item"
import AppStyles from "styles"
import Strings from "strings"
import LabeledFloatingActionButton from "components/labeled-fab"
import { Container } from "native-base"
import NavHeader from "components/nav-header"

const GameListScreen = props => {
    const [games, sync] = useCollection(Collections.games)

    return (
        <Container style={[AppStyles.container, props.style]}>
            <NavHeader
                title={props.title || Strings.games}
                icon={"menu"}
                onPress={() => props.navigation.toggleDrawer()}
            />
            <FlatList
                style={AppStyles.content}
                data={games}
                extraData={sync.loading}
                refreshing={sync.refreshing}
                onRefresh={sync.onRefresh}
                ListEmptyComponent={
                    <EmptyListView
                        icon="eye"
                        message={Strings.noGames}
                        sync={sync}
                    />
                }
                renderItem={row => (
                    <GameListItem
                        value={row.item}
                        onPress={() =>
                            props.navigation.navigate("gameDetails", {
                                game: row.item,
                            })
                        }
                    />
                )}
            />
            <LabeledFloatingActionButton
                icon="eye"
                buttons={[
                    {
                        icon: "sort",
                        label: Strings.sort,
                    },
                    {
                        icon: "plus",
                        label: Strings.startGame,
                        onPress: () => props.navigation.navigate("newGame"),
                    },
                ]}
            />
        </Container>
    )
}

GameListScreen.navigationOptions = {
    title: Strings.games,
}

export default GameListScreen
