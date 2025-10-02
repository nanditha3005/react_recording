import React,{Component}from "react";

class Registration extends Component{
    constructor (props){
        super(props);
        this.state={
            uname:"",
            uemail:"",
            umobile:""
        }
    }
    updateHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    render(){
        return(
                <div className="container">
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="row">
                        <div className="col-4">
                            <div>
                              <h3>Registration Form</h3>
                               <form>
                                    <div className="form-group">
                                        <label>User Name:</label>
                                        <input type="text" name={"uname"} className="form-control" onChange={this.updateHandler} />
                                   </div>
                                   <div  className="form-group">
                                       <label>Email ID:</label>
                                       <input type="text"   name={"uemail"} className="form-control" onChange={this.updateHandler} />
                                   </div>
                                   <div  className="form-group">
                                       <label>Mobile No:</label>
                                       <input type="text"   name={"umobile"}  className="form-control" onChange={this.updateHandler} />
                                   </div>
                                   <input type="submit" value="Register" />
                             </form>
                           </div>
                     </div>
                  </div>
            </div>
        )
    }
}
export default Registration;







