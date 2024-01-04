/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
    } from 'firebase/auth'
import { auth } from '../../firebase/credentials'

export const authContext = createContext();
export const useAuth = () => {
    const context = useContext(authContext);
    if(!context)throw Error("There is not auth Provider")
    return context
}

export function AuthProvider({children}) {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)
    const logout = () => signOut(auth)
    useEffect(()=>{
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })

    }, [])
    return (
        <authContext.Provider value={{ signup, login, user, logout, loading}}>
            {children}
        </authContext.Provider>
    )
}