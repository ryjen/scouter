// @flow

import type { Stamp } from "types/stamp"
import type { GeoPoint } from "firebase/firestore"

export type Location = {
    point: GeoPoint,
    name: String,
}

export type Clues = {
    location: Location,
    color: String,
    label: String,
    text: String,
    shape: String,
    rhyme: String,
    landmark: String,
}

export type Thing = {
    key: String,
    clues: Clues,
    imageUrl: String,
    created: Stamp,
}
