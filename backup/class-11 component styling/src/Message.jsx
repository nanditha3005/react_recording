import './Message.css'
let Message=()=>{
    let msg="GM"
    let styles={color:'pink' ,backgroundColor:'blue'}
    return <div>
             <h1 style={{color:'red' ,backgroundColor:'yellow'}}>Message Component</h1> 
             <h2 style={styles}>Welcome to React World</h2>
             <h3 style={styles}>Nanditha Sreeram</h3>
             <h4 className='msgStyles'>{msg}</h4>
           </div>
}
export default Message;