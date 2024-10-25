import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Error state

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                setLoading(false);
                setError(error.message);
                throw error;
            });
    }

    const loginwithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .catch((error) => {
                setLoading(false);
                setError(error.message);
                throw error;
            });
    };

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                setLoading(false);
                setError(error.message);
                throw error;
            });
    }
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Current User:", currentUser); // Debugging
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        createUser,
        loginwithGoogle,
        loading,
        login,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;