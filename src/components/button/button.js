import React, { useState } from 'react';
import "./button.css"
const Button=({label,onBtnClick,className})=>{
    return(
    <>
    <button type="button" className={'btn' + " "+ className} onClick={onBtnClick}>{label}</button>
    </>
    )
}
export default Button