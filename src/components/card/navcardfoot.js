import KitchenSinkExample from "./components/card/cards"
import FooterComponent from "./components/card/footer"
import NavComponent from "./components/card/navbar"


function Hello(){
    return(
<>
<NavComponent/>

        
 <div style={{display:"flex"}}>
     <div>
      <KitchenSinkExample/>
      <KitchenSinkExample/>
      <KitchenSinkExample/>
     
     
      </div>

      <div>
      <KitchenSinkExample/>
      <KitchenSinkExample/>
      <KitchenSinkExample/>
     
     
      </div>

      <div>
      <KitchenSinkExample/>
      <KitchenSinkExample/>
      <KitchenSinkExample/>
     
     
      </div>
      <div>
      <KitchenSinkExample/>
      <KitchenSinkExample/>
      <KitchenSinkExample/>
     
     
      </div>
       </div>

    <FooterComponent/>
    

       </> 
    )
}
export default Hello