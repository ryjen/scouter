// @flow

import React, { useEffect, useState } from "react"
import { gameCollection } from "collections"
import type { Game } from "types/game"
import type { SyncInfo } from "types/sync"

type GameArray = Array<Game>

export const useGames = (): [GameArray, SyncInfo] => {
    const [error, setError] = useState<?Error>()
    const [loading, setLoading] = useState<boolean>(true)
    const [games, setGames] = useState<GameArray>([])
    const [refreshing, setRefreshing] = useState<boolean>(true)

    useEffect(() => {
        return gameCollection().onSnapshot(
            snapshot => {
                const games: Array<Game> = snapshot.docs.map(doc =>
                    Object.assign({ key: doc.id }, doc.data())
                )
                setLoading(false)
                setRefreshing(false)
                setGames(games)
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

    return [games, info]
}
