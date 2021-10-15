// @flow

import { useState, useEffect } from "react"
import type { Collection } from "collections"
import type { SyncInfo } from "types/sync"

export const useCollection = <T>(
    collection: Collection
): [Array<T>, SyncInfo] => {
    type ResultType = Array<T>
    const [error, setError] = useState<?Error>()
    const [loading, setLoading] = useState<boolean>(true)
    const [value, setValue] = useState<ResultType>([])
    const [refreshing, setRefreshing] = useState<boolean>(true)

    useEffect(() => {
        return collection().onSnapshot(
            snapshot => {
                const result: ResultType = snapshot.docs.map(doc =>
                    Object.assign({ key: doc.id }, doc.data())
                )
                setLoading(false)
                setRefreshing(false)
                setValue(result)
            },
            error => {
                setError(error)
                setLoading(false)
                setRefreshing(false)
            },
            () => {
                setLoading(false)
                setRefreshing(false)
            }
        )
    }, [refreshing])

    let info: SyncInfo = {
        loading: loading,
        refreshing: refreshing,
        error: error,
        onRefresh: () => {
            setRefreshing(true)
        },
    }

    return [value, info]
}
