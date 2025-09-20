import React from 'react'
import CompB from './CompB'
class CompA extends React.Component{
  eid=101
  ename="Rahul"

  render(){
    return <div>
              <h1>Component A</h1>
              <hr />
              <CompB  emp_id={this.eid} emp_name={this.ename}/>
           </div>
  }
}
export default CompA;