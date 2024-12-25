import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from './../firebase/firebase.init';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData)
    }


    const authInfo ={
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        logOut,
        updateUserProfile
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            console.log('state capture', currentUser)
            if(currentUser?.email){
                const user = {email: currentUser.email};

                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                    setLoading(false)
                })
            }else{
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, {withCredentials: true})
                .then(res => {
                    console.log('logout',res.data)
                    setLoading(false)
                })
            }

        })
        return ()=>{
            unsubscribe()
        }
       },[])

       
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;