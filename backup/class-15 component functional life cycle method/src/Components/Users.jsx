import React, { useEffect } from "react";
let Users=()=>{

    useEffect(()=>{
        console.log("after return statement")
    },[]);

    return <div>
              <h2>User Component</h2>
           </div>

}
export default Users;