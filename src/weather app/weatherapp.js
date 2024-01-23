
import "./weatherapp.css"
import image1 from "./img1.png"
const WeatherApp=()=>{
    return(
       <div>
<div className="container">
    <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search">
          <div className="search-icon"></div>  
          <img src={image1}></img>
        </input>
    </div>
</div>
       </div>
 
    )
}
export default WeatherApp