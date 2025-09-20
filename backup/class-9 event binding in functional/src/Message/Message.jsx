import React, { useState } from "react";

let Message=()=>{
    let [message,setMessage]=useState("Hello")

    // let updateHandler=(value)=>{
    //   setMessage(value)
    // }

    return <div>
              <h2>Message Component</h2>
              <h2>Meesage Value:{message}</h2>
              {/* <button onClick={updateHandler.bind(null,"Good Morning")}>GM</button>
              <button onClick={updateHandler.bind(null,"Good Afternoon")}>GA</button>
              <button onClick={updateHandler.bind(null,"Good Night")}>GN</button> */}
              <button onClick={()=>{setMessage("Good Morning")}}>GM</button>
              <button onClick={()=>{setMessage("Good Afternoon")}}>GA</button>
              <button onClick={()=>{setMessage("Good Night")}}>GN</button>

           </div>
}
export default Message;