

import React from "react";
import { useNavigate } from "react-router-dom";

function InvalidScreen(){

const navigate=useNavigate()
const handleClick=()=>{
    navigate("/")
}

    return(

        <div> 
            <h2>Invalid Screen please check url and come back</h2>

            <button onClick={handleClick}>click to home</button>
            </div>
    )
}
export default   InvalidScreen