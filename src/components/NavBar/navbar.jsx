import React from "react";
import { useState,useEffect } from "react";
import { Link ,useLocation} from "react-router-dom";
import './navbar.css'

function NavBar({darkMode,setDarkMode}){
    const[open,setOpen]=useState(false);
    const location=useLocation();
 return (
    <> 
    <nav>
         <div className={`menuBars ${open ? "open":" "}`}
         onClick={()=>setOpen(!open)}>
               <div className="bars">
                  <span className="bar1"></span>
                  <span className="bar2"></span>
                  <span className="bar3"></span>
               </div>
        <div className="navLinks"> 
            <Link to="/skills" className={`a-top ${location.pathname==="/skills" ? "active":""}`}>Skills</Link>
            <Link to="/projects" className={`a-top ${location.pathname==="/projects" ? "active":""}`}>My Works</Link>
            <Link to="/certification" className={`a-top ${location.pathname==="/certification" ? "active":""}`}>Certificates</Link>
            <Link to="/contacts" className={`a-bottom ${location.pathname==="/contacts" ? "active":""}`} id="contact" >Contact Me</Link>
            <Link to="/cv" className={`a-bottom ${location.pathname==="/cv" ? "active":""}`} id="remove">Download Cv</Link>
        </div>
           
        </div>
        <div className="navhead">
<h1 className="portfolio">
    Portfolio
</h1>
        </div>
        <div className={`mode ${darkMode?"darkMode":"lightMode"}`}
        onClick={()=>setDarkMode(!darkMode)}>
            
           <i className="fa-solid fa-moon fa-2xl" id="theme-icon"></i>
            <i className="fa-solid fa-sun fa-2xl" id="theme-icon"></i>
        </div>
        <div className="homebtn">
            <Link to="/"><i class="fa-solid fa-house fa-2xl"></i></Link>
        </div>
       
    </nav>
    </>
  
 )
}

export default NavBar