import { useState } from "react"
import axios from "axios"



const UseState2=()=>{
const [data,setData]=useState([])
const [timer,setTimer]=useState(0)

const handlerClick=()=>{
    axios.get("https://fakestoreapi.com/products/1")
    .then((response)=>setData(response.data))
    .catch(err=>alert(err.message))

   
}

const handleTimer=()=>{
    setInterval(()=>{
       setTimer(prevState=>prevState+1)
    },1000)
}

    return(
<>
<h2 style={{color:timer>20?"red":"blue"}}>{timer}</h2>
<button onClick={handleTimer}>start timer</button>


<h2>UseState2</h2>
<button onClick={handlerClick}>click to load data</button>

{
    data.length>0 ?

    data.map((element)=>{
        return(
            <>
            <h4>{element.title}</h4>
            </>
        )
    })
    :
    null
}
</>
    )
}
export default UseState2