import { useState } from "react";

let Login=()=>{
    let[user,setUser]=useState({email:"",password:""})
    let updateEmail=(event)=>{
        setUser({...user,email:event.target.value})

    }
    let updatePassword=(event)=>{
        setUser({...user,password :event.target.value})
    }
    let submitHandler=()=>{
        alert(JSON.stringify(user))
    }
    return <div>
        <br />
        <pre>{JSON.stringify(user)}</pre>
               <form onSubmit={submitHandler}>
                <label>Email ID:</label>
                <input type="text"  onChange={updateEmail}/> <br /><br />
                <label>Password:</label>
                <input type="text"  onChange={updatePassword}/><br /><br />
                <input type="submit" value="login" />

               </form>
           </div>
}
export default Login;