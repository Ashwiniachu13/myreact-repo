import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginScreen from "./pages/login-screen"
import RegistrationScreen from "./pages/registration-screen"
import ForgotPasswordScreen from "./pages/forgotpassword-screen"
import InvalidScreen from "./pages/invalidscreen"
import AboutScreen from "./pages/afterloginroutes/about-screen"
import HomeScreen from "./pages/afterloginroutes/home-screen"
import SettingScreen from "./pages/afterloginroutes/settings-screen"
import ProductDetails from "./pages/afterloginroutes/productdetails"



const NavigationStack =()=>{

    return(

<BrowserRouter>

<Routes>

 {/* <Route path="/" Component={LoginScreen}/>
 <Route path="/register" Component={RegistrationScreen}/>
 <Route path="/forgot-password" Component={ForgotPasswordScreen}/>
 <Route path="*" Component={InvalidScreen}/> */}


<Route path="/" Component={HomeScreen}/>
 <Route path="/about" Component={AboutScreen}/>
 <Route path="/setting" Component={SettingScreen}/>

 <Route path="/product/:id/:id" Component={ProductDetails}/>


 <Route path="*" Component={InvalidScreen}/> 


 








    
</Routes>




</BrowserRouter>

    )

    
}
export default NavigationStack
