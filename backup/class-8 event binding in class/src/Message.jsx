import React from "react";

class Message extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:"Hello"
        }
    }updateHandler=(value)=>{
        this.setState({
            msg:value
        })
    }
    render(){
        return <div>
                   <h2>Message Component</h2>
                   <h3>Message Value:{this.state.msg}</h3>
                   <button onClick={this.updateHandler.bind(this,"Good Morning")}>GM</button>
                   <button onClick={this.updateHandler.bind(this, "Good Afternoon")}>GA</button>
                   <button onClick={this.updateHandler.bind(this,"Good Night")}>GN</button>

               </div>
    }
}
export default Message;