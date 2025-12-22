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
     <pre>HTML                   95%</pre>
     <div className="bars">
        <div className="bar1">
            <div className="bar2"></div>
            </div>
     </div>
        </div>
        <div className="css">
            <pre>CSS                    90%</pre>
            <div className="bars1">
        <div className="bar1">
            <div className="bar2"></div>
            </div>
     </div>
        </div>
        <div className="javascript">
            <pre>JAVASCRIPT             80%</pre>
<div className="bars2">
        <div className="bar1">
            <div className="bar2"></div>
            </div>
     </div>

        </div>
         <div className="react">
            <pre>REACT                  90%</pre>
            <div className="bars3">
        <div className="bar1">
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
           <pre>COMUNICATION           80%</pre>
            <div className="bars4">
        <div className="bar1">
            <div className="bar2"></div>
            </div>
       </div>

        </div>
        <div className="ProblemSolving">
            <pre>PROBLEMSOLVING         97%</pre>
            <div className="bars5">
        <div className="bar1">
            <div className="bar2"></div>
            </div>
       </div>
        </div>
        <div className="TeamWork">
           <pre>TEAMWORK               90%</pre>
            <div className="bars6">
        <div className="bar1">
            <div className="bar2"></div>
            </div>
       </div>
        </div>
        <div className="TimeManagement">
            <pre>TIMEMANAGEMENT         96%</pre>
            <div className="bars7">
        <div className="bar1">
            <div className="bar2"></div>
            </div>
       </div>

        </div>
        <div className="LeaderShip">
            <pre>LEADERSHIP             97%</pre>
            <div className="bars8">
        <div className="bar1">
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
