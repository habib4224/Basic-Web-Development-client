import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }



    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const providerLogOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authinfo = {
        user, loading, signIn, providerLogin, updateUserProfile, providerLogOut, createUser
    };

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;