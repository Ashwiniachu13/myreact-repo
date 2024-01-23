

import React, { useState } from "react"
import NavBar from "../../../components/navbar/nnavvbar"
import axios from "axios"
import { Link } from "react-router-dom"



const HomeScreen =()=>{
    const [data,setData]=useState([])

const handleClick=()=>{

    axios.get("https://fakestoreapi.com/products")
    .then(response=>setData(response.data))
}


    return(



        <>
         <NavBar/>
         <br></br>
        <h2>Home Screen</h2>
        <button onClick={handleClick}>click to load products</button>

        {
            data.length>0
            ?
            data.map(element=>{
                return(
                    <React.Fragment key={element.id}>
                    <p>{element.title}</p>
                    <img src={element.image} width={150} height={150}></img>
                    <button >
                     <Link to={`/product/${element.category}/${element.id}`}>View Details</Link>  
                    </button>
                    </React.Fragment>
                )
            })
            :
            <h2>no products</h2>
        }
       
        
        </>
    )
}
export default HomeScreen