// @flow

import firebase, { CollectionReference } from "firebase"
import "firebase/firestore"

const collection = (path: string) => {
    return firebase.firestore().collection(path)
}

export type Collection = () => CollectionReference

const Collections = {
    games: () => collection("games"),
    players: () => collection("players"),
    things: () => collection("things"),
}

export default Collections
