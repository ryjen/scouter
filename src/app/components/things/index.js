import React from "react"
import { FlatList } from "react-native"
import { useCollection } from "hooks/collections"
import Collections from "collections"
import EmptyListView from "components/empty-list-view"
import ThingListItem from "components/things/item"
import AppStyles from "styles"
import Strings from "strings"
import LabeledFloatingActionButton from "components/labeled-fab"
import { Container } from "native-base"
import NavHeader from "components/nav-header"

const ThingListScreen = props => {
    const [things, sync] = useCollection(Collections.things)

    return (
        <Container style={[AppStyles.container, props.style]}>
            <NavHeader
                title={props.title || Strings.things}
                icon={"menu"}
                onPress={() => props.navigation.toggleDrawer()}
            />
            <FlatList
                style={AppStyles.content}
                data={things}
                extraData={sync.loading}
                refreshing={sync.refreshing}
                onRefresh={sync.onRefresh}
                ListEmptyComponent={
                    <EmptyListView
                        icon="eye"
                        message={Strings.noThings}
                        sync={sync}
                    />
                }
                renderItem={row => (
                    <ThingListItem
                        value={row.item}
                        onPress={() =>
                            props.navigation.navigate("thingDetails", {
                                thing: row.item,
                            })
                        }
                    />
                )}
            />
            <LabeledFloatingActionButton
                icon="eye"
                buttons={[
                    {
                        icon: "plus",
                        label: "Scout",
                        onPress: () => props.navigation.navigate("newThing"),
                    },
                ]}
            />
        </Container>
    )
}

ThingListScreen.navigationOptions = {
    title: Strings.things,
}

export default ThingListScreen
