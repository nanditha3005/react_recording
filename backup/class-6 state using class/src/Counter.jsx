import React from "react";

class Counter extends React.Component{
    //counter=1
    state={
        counter:1
    }
    incrHanlder=()=>{
        this.setState({counter:this.state.counter+1})

    }
    decrHanlder=()=>{
        this.setState({counter:this.state.counter-1})

    }
    

    render(){
        return  <div>
                  <h2>Counter Component</h2>
                  <h3>Counter Value:{this.state.counter}</h3>
                  <button onClick={this.decrHanlder}>DECR</button>
                  <button onClick={this.incrHanlder}>INCR</button>
                </div>
    }
}
export default Counter