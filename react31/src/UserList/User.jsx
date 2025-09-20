import React from "react";
import UserList from './UserList'
class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            users:UserList
        }
    }

    render(){
        return <div>
                 <h2>User Component</h2>
                 <pre>{JSON.stringify(this.state.users)}</pre>
                 <table>
                    <thead border={2}>
                        <tr>
                        <th>ID:</th>
                        <th>Name:</th>
                        <th>Email:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {  
                            this.state.users.map((user,index)=>{
                               return <tr key={index}>
                                          <td>{user.id}</td>
                                          <td>{user.name}</td>
                                          <td>{user.email}</td>
                                       </tr> 
                            })
                            
                        }
                    </tbody>
                 </table>
               </div>
    }
}
export default User;