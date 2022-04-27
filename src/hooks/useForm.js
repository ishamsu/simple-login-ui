import React, { useState } from "react";
const useForm =()=>{
    const [value,setValue]=useState({})
    const handleChange =(e)=>{
        console.log("value is changing yuseForm", e.target.value)
        setValue({...value, [e.target.name]: e.target.value})
    }

    return [value, handleChange] 

}
export default useForm;
