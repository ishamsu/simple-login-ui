import React, { useState } from 'react';
import "./error.css"
const Error=({isError})=>{
    return(
    <>
    {isError && <span className='error'>{isError}</span>}
    </>
    )
}
export default Error