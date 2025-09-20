import React from "react"
class CompB extends React.Component{
  render(){
    return <div>
               <h1>Component B</h1>
               <h2>Employee ID:{this.props.emp_id}</h2>
               <h2>Employee Name:{this.props.ename}</h2>
           </div>
  }
}
export default CompB