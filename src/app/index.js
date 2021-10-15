import React from "react"
import { AppContextProvider } from "contexts/app"
import AppContainer from "app/navigation"
import firebase from "firebase"
import config from "config/firebase.json"

firebase.initializeApp(config)

firebase.firestore.setLogLevel(__DEV__ ? "silent" : "silent")

const App = () => {
    const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null

    return (
        <AppContextProvider>
            <AppContainer persistenceKey={navigationPersistenceKey} />
        </AppContextProvider>
    )
}

export default App
