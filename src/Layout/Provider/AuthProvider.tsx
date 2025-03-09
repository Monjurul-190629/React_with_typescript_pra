import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext<unknown | undefined>(undefined);


interface AuthProviderType {
    children: ReactNode
}

export const AuthProvider:React.FC<AuthProviderType> = ({children}) => {
    const [user, setUser] = useState<unknown>(undefined)

    const [loading, setLoading] = useState<boolean>(true);

    const createUser = (email:string, password:string) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email : string, password : string) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const LogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            console.log(error)
          });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
          });
        return () => {
            unSubscribe();
        }
    }, [])
    
    const authInfo = {user, createUser, signIn, LogOut, loading}


    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    )
    
}