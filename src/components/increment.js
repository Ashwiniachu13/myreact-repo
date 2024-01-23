import { Component } from "react";

    class Counter extends Component{
     constructor(){
        super();
        this.state={
            Counter:0
        }
     }
     increment(){
        this.setState({
            Counter:this.state.Counter+1
        })
    }
     
     decrement(){
        this.setState({
            Counter:this.state.Counter-1
        })
    }
     reset(){
        this.setState({
            Counter:this.state.Counter=0
        })
     }

        render(){
            return(
                <>
                <h2>Count Value is:{this.state.Counter} </h2><br></br>
                <button onClick={()=>this.increment()}>Increment</button><br></br><br></br>
                <button onClick={()=>this.decrement()}>Decrement</button><br></br><br></br>
                <button onClick={()=>this.reset()}>Reset</button>
                </>
            )
        }
    }
    export default Counter;