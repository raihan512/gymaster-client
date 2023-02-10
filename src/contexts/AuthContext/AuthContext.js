import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = userInfo => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const resetPassWord = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });

        return () => {
            return unsubscribe();
        }
    }, [])
    const logOut = () => {
        return signOut(auth);
    }
    const authInfo = { createUser, updateUser, loginUser, resetPassWord, user, logOut }

    return (
        <div>
            <AuthProvider.Provider value={authInfo}>
                {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default AuthContext;