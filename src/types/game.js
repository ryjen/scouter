// @flow

import type { DocumentReference } from "firebase/firestore"

export type Game = {
    key: String,
    name: string,
    maxThings: number,
    maxPlayers: number,
    things: Array<DocumentReference>,
    players: Array<DocumentReference>,
}
