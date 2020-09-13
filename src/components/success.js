import React from 'react';
import './success.css';
import starting from'../images/PEF.svg'

function success()
{   
    return(
   <div className="success">     
         <div className="successimg" >     
          <img src={starting} className="starting" alt="success_svg"></img>
         </div>
     <div className="success_message">
        <p className="success_headline">Welcome to AdmitKard </p>  
        <span> In order to provide you a custome eperience
           </span>
        <p className="question">We need to ask you some questions</p>
     </div>
     <div className="success_button">
         <input type="submit" value="Get Started" className="getStartButton">
         </input><br></br>
         <span className="wait">*This will only take 5 min</span>
           
     </div>    
   
</div>
    )
}
export default success;