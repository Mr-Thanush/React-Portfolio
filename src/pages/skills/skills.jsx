import React from "react";
import { useState } from "react";
import "./skills.css";
 
function Skills (){
  const[now,setNow]=useState(false);
  const[soft,setSoft]=useState(false);
 return (
    <div className="Containers">
    <div className={`container1 ${now? "now":" "}`}
    onClick={()=>setNow(!now)}>
      <h1 className="skill1">Professional Skills</h1> 
      <div className="ProfSkills">
        <div className="html">
     <div className="htmlHeading">
        <h2>HTML</h2>
        <h3>97%</h3>
     </div>
     <div className="barsOne">
        <div className="barOne">
            <div className="bar2"></div>
            </div> 
     </div> 
        </div>
        <div className="css">
            <div className="cssHeading">
        <h2>CSS</h2>
        <h3>90%</h3>
     </div>
            <div className="bars1">
        <div className="barOne">
            <div className="bar2"></div>
            </div>
     </div> 
        </div>
        <div className="javascript">
           <div className="jsHeading">
        <h2>JAVASCRIPT</h2>
        <h3>85%</h3>
     </div>
<div className="bars2">
        <div className="barOne">
            <div className="bar2"></div>
            </div>
     </div>

        </div>
         <div className="react">
            <div className="reactHeading">
        <h2>REACT</h2>
        <h3>95%</h3>
     </div>
            <div className="bars3">
        <div className="barOne">
            <div className="bar2"></div>
            </div>
       </div>
        </div> 
      </div>
    </div>
    <div className={`container2 ${soft? "soft":" "}`}
    onClick={()=>setSoft(!soft)}>
     <h1 className="skill2">Soft Skills</h1>
     <div className="softSkills">
        <div className="Comunication">
          <div className="ComunicationHeading">
        <h2>COMMUNICATION</h2>
        <h3>90%</h3>
     </div>
            <div className="bars4">
        <div className="barOne">
            <div className="bar2"></div>
            </div>
       </div>

        </div>
        <div className="ProblemSolving">
            <div className="ProblemSolvingHeading">
        <h2>PROBLEM SOLVING</h2>
        <h3>97%</h3>
     </div>
            <div className="bars5">
        <div className="barOne">
            <div className="bar2"></div>
            </div>
       </div>
        </div>
        <div className="TeamWork">
           <div className="TeamWorkHeading">
        <h2>TEAMWORK</h2>
        <h3>90%</h3>
     </div>
            <div className="bars6">
        <div className="barOne">
            <div className="bar2"></div>
            </div>
       </div>
        </div>
        <div className="TimeManagement">
            <div className="TimeManagementHeading">
        <h2>TIME MANAGEMENT</h2>
        <h3>96%</h3>
     </div>
            <div className="bars7">
        <div className="barOne">
            <div className="bar2"></div>
            </div>
       </div> 

        </div>
        <div className="LeaderShip">
           <div className="LeaderShipHeading">
        <h2>LEADERSHIP</h2>
        <h3>97%</h3>
     </div>
            <div className="bars8">
        <div className="barOne">
            <div className="bar2"></div>
            </div>
       </div>

        </div>
     </div>
    </div>
    </div>
 )
}

export default Skills;
