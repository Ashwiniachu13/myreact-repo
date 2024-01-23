

import React from "react";
import { Link } from "react-router-dom";

const NavBar =()=>{
    
    const navItem={
        textDecoration:"none",
        color:"black",
        fontWeight:"bold",
        
    }
    const liItem={
        marginTop:"10px",
        marginRight:"40px"
    }
    
    
    return(

 
        
        <>
  <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item" style={liItem}>

            <Link style={navItem}  to={"/"}>Home</Link>
          
        </li>
        <li className="nav-item" style={liItem}>

            <Link style={navItem} to={"/about"}>About</Link>
          
        </li>
        <li className="nav-item" style={liItem}>

            <Link style={navItem} to={"/setting"}>Setting</Link>
          
        </li>
       
       
      </ul>
    </div>
  </nav>
 
</>

        
    
    )
}
export default NavBar