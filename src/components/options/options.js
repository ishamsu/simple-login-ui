import React, { useState } from 'react';
import "./options.css"
const Option=({data, onHandleClick,isMultiSelect})=>{
    const [isActive, setIsActive]= useState(0)
    return(
    <>
   <div  className={isMultiSelect ? !isActive ? "a" : "a__selected" : "b"} id="items" key={""} onClick={()=>{
       setIsActive(!isActive)
       onHandleClick(data, !isActive)
   }}>
{data.title}
   </div>
    </>
    )
}
export default Option