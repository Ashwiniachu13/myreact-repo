import { useState } from "react"


const UseState1=()=>{
    const [count,setCount]=useState(0)

const handleIncrement=()=>{
    setCount(count+1)
}

return(
    <>
    <h2>Counter --- {count}</h2>
    <button onClick={handleIncrement}>Increment</button>
    </>
)
}
export default UseState1