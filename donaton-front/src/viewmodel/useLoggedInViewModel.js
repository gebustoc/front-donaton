import { useEffect, useState } from "react";
import UserService from "../service/UserService";






export default function useLoggedInViewModel(){

    const [loggedIn, setLoggedIn] = useState(false)
    const [waiting, setWaiting] = useState(false)
    const tryLogin =()=>{
        setWaiting(true)
        let token = localStorage.getItem("token")
        if (token == null){    
            return
        }
        console.log(token, "???")
        let obj = JSON.parse(token)
        console.log(obj)
        const idk = UserService.login(obj.email,obj.contrasena)
        console.log(idk)


        // call api to check if token is valid here
        setLoggedIn(true)
        setWaiting(false)
    }
    const timer = ms => new Promise(res => setTimeout(res, 700))

    const closeSession = async()=>{
        setWaiting(true)
        // call api to kill token here
        let token = localStorage.getItem("token")
        localStorage.removeItem("token")
        await timer
        setWaiting(false)
        setLoggedIn(false)

    }
    const tryLoginCreds =(creds)=>{
        setWaiting(true)
        
        const idk = UserService.tokenLogin(creds)
        console.log(idk)
        // call api to check if token is valid here
        setLoggedIn(true)
        setWaiting(false)
    }


    useEffect(tryLogin,[])
    
    return {
        loggedIn,
        tryLogin,
        closeSession,
        waiting,
        tryLoginCreds
    }


}