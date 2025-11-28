import React, { createContext, useContext, useState, useEffect } from 'react';
import {
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signInAnonymously,
    signOut as firebaseSignOut
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                // Fetch additional user profile data from Firestore
                const userDocRef = doc(db, 'users', firebaseUser.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    setUser({ ...firebaseUser, ...userDoc.data() });
                } else {
                    setUser(firebaseUser);
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            // Check if user exists in DB, if not create basic profile
            const userDocRef = doc(db, 'users', result.user.uid);
            const userDoc = await getDoc(userDocRef);

            if (!userDoc.exists()) {
                await setDoc(userDocRef, {
                    name: result.user.displayName,
                    email: result.user.email,
                    role: 'guest', // Default role
                    registeredAt: new Date().toISOString()
                });
            }
        } catch (error) {
            console.error("Google Login Error:", error);
        }
    };

    const loginAnonymously = async (name) => {
        try {
            const result = await signInAnonymously(auth);
            // Create profile for anonymous user
            await setDoc(doc(db, 'users', result.user.uid), {
                name: name || 'Anonymous Pilot',
                role: 'participant',
                registeredAt: new Date().toISOString(),
                isAnonymous: true
            });
        } catch (error) {
            console.error("Anonymous Login Error:", error);
        }
    };

    const logout = () => firebaseSignOut(auth);

    return (
        <AuthContext.Provider value={{ user, loading, loginWithGoogle, loginAnonymously, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
