import React, { useState } from 'react';
import Error from '../error/error';
import "./input.css"
const Input=({value, type, name,handleChange,placeholder,className})=>{
const [error, setError]= useState("")
    return(
    <>
    <input className={className ? className : 'text-area'} value ={value} type={type} placeholder={placeholder} name={name} onChange={handleChange} onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key) && name=="password") {
          event.preventDefault();
          setError("please type no")
        }
        else{
            setError("")
        }
      }}/>
      {error && <Error>{error}</Error>}
    </>
    )
}
export default Input