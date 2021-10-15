import React from "react"
import { Container } from "native-base"
import Collections from "collections"
import { useCollection } from "hooks/collections"
import EmptyListView from "components/empty-list-view"
import Strings from "strings"
import { FlatList } from "react-native"
import PlayerListItem from "components/players/item"
import AppStyles from "styles"
import NavHeader from "components/nav-header"

const PlayerListScreen = props => {
    const [players, sync] = useCollection(Collections.players)

    return (
        <Container>
            <NavHeader
                title={props.title || Strings.player}
                icon={"menu"}
                onPress={() => props.navigation.toggleDrawer()}
            />
            <FlatList
                style={AppStyles.content}
                data={players}
                extraData={sync.loading}
                refreshing={sync.refreshing}
                onRefresh={sync.onRefresh}
                ListEmptyComponent={
                    <EmptyListView
                        icon="users"
                        message={Strings.noPlayers}
                        sync={sync}
                    />
                }
                renderItem={row => (
                    <PlayerListItem
                        value={row.item}
                        onPress={() =>
                            props.navigation.navigate("playerDetails", {
                                player: row.item,
                            })
                        }
                    />
                )}
            />
        </Container>
    )
}

PlayerListScreen.navigationOptions = {
    title: Strings.players,
}

export default PlayerListScreen
