import React from "react";
import './contact.css'

function Contact() { 
  return (
    <>
    <h1>Your Message Matters</h1>
      <div className="box1">
        <div className="links">
          <a href="https://www.linkedin.com/in/thanush26" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/mr._thanush_" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://github.com/Mr-Thanush" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.youtube.com/@CodingAiWorkshop" target="_blank"><i className="fa-brands fa-youtube"></i></a>
        </div>
      </div>
      
      <div className="box2">
        <form action="mailto:thanush.2645@gmail.com" method="POST">
          <input type="text" className="Name" placeholder="Your Name" />
          <input type="number" className="MNo" placeholder="Your Mobile Number" />
          <input type="text" className="subject" placeholder="Your Subject" />
          <textarea name="Comment" id="Comment" placeholder="Your Comment"></textarea>
          <button>Submit</button>
        </form>
      </div>
 

      <div className="box3">
      <h2>My Services</h2>
        
       
        <div className="mernStack">
          <h3>MERN Full-stack Development</h3>
          <hr />
          <p>I built fast,secure and scalable full-stack web application using <b>MangoDb,ExpressJs,ReactJs and NodeJs.</b></p>
        </div>
        <div className="webApp">
          <h3>Web Application Development</h3>
          <hr />
          <p>I create custome <b>web application</b> such as online exam systems,dashboard and startUp ready apps using MERN stack.</p>
        </div>
        <div className="reactFrontEnd">
         <h3>React FrontEnd Development</h3>
         <hr />
         <p>I design modern,responsive,and user-friendly <b>React.js interfaces</b> With clean layouts and smooth navigation.</p>
        </div>
        <div className="responsive">
         <h3>Responsive Website Design</h3>
         <hr />
         <p>I convert design into <b>fully responsive website</b> that works perfectly on mobile,tablet and desktop</p>
        </div>

      </div>
    </>
  )
}

export default Contact