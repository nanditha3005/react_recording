import React from "react";
import Axios from "axios";
class Users extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            console.log(resp.data)
            this.setState({users:resp.data})
        })
        .catch(()=>{})
     }
   

        
   // when we dont want to give a button and pressing on button to update an event ,we use component class
   //  life cycle method wch performs on its own after render method

   

    render(){
        return <div className="container">
                 <div className="row">
                    <pre>{JSON.stringify(this.state.users)}</pre>
                      <div className="col-md-6">
                        <table className="table">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.length >0 ? <>
                                    {
                                        this.state.users.map((user)=>{
                                            return <tr>
                                                       <td>{user.id}</td>
                                                       <td>{user.name}</td>
                                                       <td>{user.email}</td>
                                                       <td>{user.address.city}</td>
                                                   </tr>

                                        })
                                    }
                                    </> : < ><h3>No Data..</h3></>
                                }

                            </tbody>
                        </table>


                      </div>
                 </div>
             </div>
        
    }
}
export default Users;
