import { useState } from "react";
import UserService from "../service/UserService";

export default function useLoginViewModel(loggedviewmodel){
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    
    const AttemptLogin = ()=>{
        UserService.login(email,pass)
        //loggedviewmodel.tryLogin();
        

    }

    const AttemptRegister = ()=>{
        UserService.register(
            {
                "email": email,
                "password": pass,
                "idUserType": {"idUserType": 1}
            }

        )

    }

    const isValidForm = ()=>{
        return pass.length > 0 && email.length > 0
    }

    return {
        email,
        setEmail,
        pass,
        setPass,
        isValidForm,
        AttemptLogin,
        AttemptRegister

    }
}