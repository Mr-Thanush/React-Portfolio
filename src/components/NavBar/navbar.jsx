import React from "react";
import { useState,useEffect } from "react";
import './navbar.css'

function NavBar({darkMode,setDarkMode}){
    const[open,setOpen]=useState(false);
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
            <a href="skills.html" className="a-top">Skills</a>
            <a href="projects.html" className="a-top">My Works</a>
            <a href="certificatio.html" className="a-top">Certificates</a>
            <a href="contact.html" className="a-bottom" id="contact" >Contact Me</a>
            <a href="cv.html" className="a-bottom" id="remove">Download Cv</a>
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
            <i class="fa-solid fa-house fa-2xl"></i>
        </div>
       
    </nav>
    </>
  
 )
}

export default NavBar