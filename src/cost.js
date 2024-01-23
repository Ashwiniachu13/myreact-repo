import { Component } from "react";



class Cost extends Component{
    render(){
        return(
            <h2>{this.props.children}</h2>
        )
    }
}
export default Cost