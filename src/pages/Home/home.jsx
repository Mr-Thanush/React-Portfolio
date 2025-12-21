import React from "react";
import "./home.css"
function Home(){
 return(
    <>
    <div className="picture">

    </div>
    <div className="greeting-name">
     <h2>Hi ,I'm </h2>
     <h3>Thanush</h3>
    </div>
    <div className="handles">
    <h3>Follow Me.</h3>
    <div className="handlelink">
        <a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" target="_blank"><i className="fa-brands fa-github"></i></a>
            <a href="#" target="_blank"><i className="fa-brands fa-youtube"></i></a>
    </div>
            
    </div>
    <div className="about">
        <h3>About Me</h3>
        <p>I am a creative and passionate individual with a strong sense of commitment,I never leave a task unfinished. I maintain a humble approach, manage my emotions with clarity, and value meaningful connections with my family. I believe in appreciating every moment, whether joyful or challenging, as part of continuous growth.</p>
    </div>
    </>
 )

}

export default Home