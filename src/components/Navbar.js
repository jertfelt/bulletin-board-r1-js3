import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

  return (    
  <header>
    <h1>En liten hemsida om REACT</h1>
    <nav
    aria-label="navigation">
    <Link
    className="navbar-item"
    to="/"
    >
    Start
    </Link>
    <Link
     className="navbar-item"
  
    to="https://github.com/jertfelt/"
            >
     Github 
  </Link>
  <Link className="navbar-item"
 
   to={{ pathname: "www.tovajertfelt.se/" }} target="_blank" >
  
  Portfolio
  </Link>

    </nav>
    
    </header> );
}
 
export default Navbar;