// @flow

import React, { useContext, useEffect, useState } from "react"
import UserContext from "contexts/user"
import firebase from "firebase"
import "firebase/auth"

export const useSession = () => {
    const { user } = useContext(UserContext)
    return user
}

export const useAuth = () => {
    const [state, setState] = useState(() => {
        const user = firebase.auth().currentUser
        return {
            initializing: !user,
            user,
        }
    })

    function onChange(user) {
        setState({ initializing: false, user })
    }

    useEffect(() => {
        // listen for auth state changes
        const unsubscribe = firebase.auth().onAuthStateChanged(onChange)

        // unsubscribe to the listener when un-mounting
        return () => unsubscribe()
    }, [])

    return state
}
