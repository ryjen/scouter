// @flow

import { DocumentReference } from "firebase/firestore"

export type Stamp = {
    by: DocumentReference,
    at: string,
}
