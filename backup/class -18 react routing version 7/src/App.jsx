import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Login from "./Components/Login";
let App=()=>{

  return <div>
            <Router>
               <Navbar/>
               <Routes>
                 <Route path="/index" element={<Home/>}></Route>
                 <Route path="/about" element={<About/>}></Route>
                 <Route path="/Services" element={<Services/>}></Route>
                 <Route path="/Login" element={<Login/>}></Route>

               </Routes>

            </Router>
         </div>
}
export default App;