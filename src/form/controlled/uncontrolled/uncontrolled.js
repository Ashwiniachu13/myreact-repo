import { createRef } from "react"








const UnControlled=()=>{

    const usernameRef=createRef()
    const passwordRef=createRef()

    

    const handlesubmit=(event)=>{
   
   event.preventDefault()
 const userInfo={
    username:usernameRef.current.value,
    
   password:passwordRef.current.value
 }

 if(userInfo.username.length>10){
  alert("please enter less than 10 characters")
 }




    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(userInfo)
})
.then(res => res.json())
.then((response=>{
  if(response.message){
    alert(response.message)
  }
  else{
    alert("login success")
    localStorage.setItem("userInfo",JSON.stringify(userInfo))
  }
}
));

}

    
   

    return(


        <div>
        
        <h2>uncontrolled component example</h2>


        <form onSubmit={handlesubmit}>
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="email"
  
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email" ref={usernameRef}
    />
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
      name="pswd"  ref={passwordRef}
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

        
        
        </div>
    )
}

export default UnControlled