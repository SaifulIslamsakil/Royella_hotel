import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase-confiq";
import axios from "axios";

const auth = getAuth(app)

export const AuthContext = createContext(null)
const ContextApi = ({children}) => {
    const [user,setUser] = useState(null)
    const [loder,setloder]= useState(true)

    const userRegester = (email,password)=>{
        setloder(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userLogin = (email,password)=>{
        setloder(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const userLogOut = () =>{
        setUser(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, carrentUser =>{
            setUser(carrentUser)
            setloder(false)
            const loger = carrentUser?.email || user?.email
             const name = {email:loger}
                if(carrentUser){
                    axios.post("https://royella-hotel-server.vercel.app/api/v1/jwt",name,{withCredentials:true})
                    .then(res=> {
                        console.log(res.data)
                    })
                }else{
                    axios.post("https://royella-hotel-server.vercel.app/api/v1/userLogout",name,{withCredentials:true})
                    .then(res=>{
                        console.log(res.data)
                    })
                }
        })
        return()=>{
            return unsubcribe
        }
    },[user])
    const AuthInfo = {
        userRegester,
        userLogin,
        userLogOut,
        loder,
        user
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextApi;