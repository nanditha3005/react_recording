// same Message Code in functional component can be written as
import React from "react";
class Login extends React.Component{
    eid=101;
    ename="Rahul";
    loc=["Bengaluru","New Delhi"]
    details={
        sal:45000,
        avail:true
    }

    render(){
        return <div>
                  <h1>Login Component</h1>
                  <h2>Employee ID:{this.eid}</h2>
                  <h2>Employee Name:{this.ename}</h2>
                  <h2>location:{this.loc}</h2>
                  <h2>Details:{JSON.stringify(this.details)}</h2>
               </div>

    }
}
export default Login