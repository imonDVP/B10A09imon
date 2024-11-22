import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut,GoogleAuthProvider, 
        onAuthStateChanged, 
        signInWithPopup,
        updateProfile,
        sendPasswordResetEmail,  
    } from "firebase/auth";
    
import auth from './../firebase/firebase.config';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
export const authContext=createContext();

const AuthProvider = (props) => {
    // const navigate = useNavigate();
    // console.log(props)
    // console.log(props.route)
    const provider = new GoogleAuthProvider();

    const [user, setUser]=useState(null);
    console.log('Current User :',user);
    const [forgetEmail ,setForgetemail]=useState('')
    const [loading,setLoading]=useState(true)

    const handleRegister=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleLogin=(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleGoogleLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
        // .then((result)=>{
        //     console.log(result)
        //     // navigate("/");
        // })
        // .catch((err)=>{
        //     console.log(err.message)
        // })
    }

    const handleLogout=async ()=>{
        setLoading(true);
        // return signOut(auth);
        try {
            await signOut(auth);
            console.log("Signout Successfully ");
            setUser(null);
        } catch (err) {
            console.log(err.message);
        }
    }

    const profileUpdate=(name,image)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image
        })
    }

    const handlegoForgetPage=(forgetEmail)=>{
        console.log(forgetEmail)
        sendPasswordResetEmail(auth,forgetEmail)
        .then(()=>{
            window.open("https://mail.google.com", "_blank");
        })
    }




    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('Current User:',currentUser)
            if(currentUser){
                setUser(currentUser);
                setLoading(false);
            }
            else{
                setUser(null)
            }
            // setLoading(false)
    
        return ()=>{
            unsubscribe()
        }
        })
    },[])

    const authInfo={
        setUser,
        user,
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogout, 
        profileUpdate,
        handlegoForgetPage,
        setForgetemail,
        forgetEmail,
        loading
    }


    return (
        <div>
            <authContext.Provider value={authInfo}>
            {
                props.routes
            }
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;