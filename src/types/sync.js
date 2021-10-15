// @flow

export type SyncInfo = {
    loading: boolean,
    refreshing: boolean,
    error?: Error | undefined,
    onRefresh: () => void,
}
