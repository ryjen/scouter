import React, { createContext, useReducer } from "react"

const AppContext = createContext()

const initialState = {}

const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const AppContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

const AppContextConsumer = AppContext.Consumer

export { AppContext, AppContextProvider, AppContextConsumer }
