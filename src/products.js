
import axios from 'axios'
import { Component } from "react";
import Image from './imag';
import Cost from './cost';
import "./products.css"





class ProductComponent extends Component{
    state={
        products:[]
    }
handleClick=()=>{
 axios.get("https://fakestoreapi.com/products")
 .then(response=>{
    if(response.status===200){
this.setState(
    {
        products:response.data
    }
)


        alert("fetched data success")
    }
    else{
      alert("something went wrong")  
    }
 })
}

render(){
    return(
        <>
<h2>product details</h2>
<button onClick={this.handleClick}>click to see products data</button>
<br></br>


{
    this.state.products.map((element)=>{
        return(
            <div id="pro">
<div key={element.id}>
    
    <h2>{element.category}</h2>
    <Image imageURL={element.image}/>
    <Cost>
      {element.price}  
    </Cost>
    <button>Remove</button>
</div>
</div>
        )
    }
)}


        </>
    )
}


}
export default ProductComponent