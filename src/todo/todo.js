import { useState } from "react"


const Todos =()=>{
    const[list,setList]=useState([])

    const [input,setInput]=useState("")

    const handleChange=(event)=>{

        setInput(event.target.value)

    }

    const handleSubmit=(event)=>{
        event.preventDefault()

        const newList =[...list, `${input}${list.length+1}`]
       
   setList(newList)
   setInput("")

    }
    const removeAll=()=>{
        setList([])
    }
    const handleRemoveItem=(index)=>{
        const newList=list.filter((item,i)=>i!=index)
        setList(newList)

    }

    return(


        <>
        <h1>todo listing</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleChange}/>

            <button type="submit" className="btn btn-primary">
    Submit
  </button>
        </form>
        <button onClick={removeAll}>Remove all</button>
        {

           list.length>0?list.map((element,index)=>
           <>
           <ul key={index}>
            <li>
                 {element}
            </li>
           </ul>
           <button onClick={()=>handleRemoveItem(index)}>Remove Item</button>
           </>
           ):<h2>no todos</h2> 
        }
        
        </>
    )
}
export default Todos