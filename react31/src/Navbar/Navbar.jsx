import React from "react";
import {NavLink}  from "react-router-dom";

class Navbar extends React.Component{
   render(){
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
              <a href="#" className="navbar-brand">Routing </a>
              <div className="ms-auto">
                <ul className="navbar-nav">
                    <li><NavLink to="/index" className="nav-link">Home</NavLink></li>
                    <li><NavLink to="/about" className="nav-link">About</NavLink></li>
                    <li><NavLink to="/services" className="nav-link">Services</NavLink></li>
                    <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
                    <li><NavLink to ="/users" className="nav-link">Users</NavLink></li>
                </ul>
              </div>
           </nav>

          }
  }
export default Navbar;



    