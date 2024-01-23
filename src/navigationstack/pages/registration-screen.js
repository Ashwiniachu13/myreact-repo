

import React from "react";

import { useState } from "react"





function RegistrationScreen(){

const [username,setUsername]=useState("")

const [usernameError,setUserNameError]=useState("")
const [password,setPassword]=useState("")

    const handlesubmit=(event)=>{
        event.preventDefault()

        const details={
            username:username,
            password:password
        }
console.log(details);        

    }

    const usernameHandler=(event)=>{
        setUsername(event.target.value);
        if(event.target.value.length>15){
           
            setUserNameError("please enter less than 15 characters")


        }
        else{

            setUserNameError("")
        }

       

    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value);
        if(event.target.value.length>10){
           
            setUserNameError("please enter less than 10 characters")


        }
        else{
          
        
        }
        

    }



    return(
<>


        <h2>RegistrationScreen</h2>
        <form onSubmit={handlesubmit}>
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
    UserName:
    </label>
    <input
      type="username"
  
      className="form-control"
      id="email"
      placeholder="Enter username"
      name="email" 
      value={username} onChange={usernameHandler}
    />
     <label htmlFor="email" style={{color:"red"}}>
    {usernameError}
    </label>
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
    
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"  value={password} onChange={passwordHandler}
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>


</>

    )
}
export default  RegistrationScreen