import { useState } from "react";

export default function useLoginViewModel(){
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    
    const AttemptLogin = ()=>{
    }

    const AttemptRegister = ()=>{
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