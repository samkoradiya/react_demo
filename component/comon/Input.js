import React from "react";

const Input = ({type, placeholder, className,value,name,id}) => {
    return(
        <input type={type} placeholder={placeholder} className={className} id={id} value={value} name={name} /> 
    )
}

export default Input;