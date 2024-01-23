
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(){

  const urlId=useParams()
  console.log(urlId);
  const[productDetail,SetProductDetail]=useState({})

  const handleProduct=()=>{
   axios.get(`https://fakestoreapi.com/products/${urlId.id}`)
    .then(response=>SetProductDetail(response.data))
  }

    return(
<>
        <div>
           <h2> Product Details</h2>

           <button onClick={handleProduct}>click to see products</button>
            {

                Object.keys(productDetail).length>0 && <>
                
                <h2>{productDetail.title}</h2>
              <h3>{productDetail.category}</h3>
                <img src={productDetail.image} width={200} height={200}/>
                <h3>${productDetail.price}</h3>
                <p>{productDetail.description}</p>
                </>
            }



        </div>
        </>
    )
}
export default ProductDetails