import React from "react";

const Input = ({type, placeholder, className,value,name}) => {
    return(
        <input type={type} placeholder={placeholder} className={className} value={value} name={name} /> 
    )
}

export default Input;