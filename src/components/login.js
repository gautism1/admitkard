import React from 'react';
import '../App.css';
import {useState} from 'react';
import logoimg from '../images/admitkardlogo.png';
// import countryImg from '../images/india.svg';
 
     
      function login()
      {
            const [number, setNumber] = useState({})   ;    
            const handleSubmit = (evt) => {
            evt.preventDefault(); 
            localStorage.setItem("phone",number);
            window.location.href='/otp';
                     
      }
    return(
        <div className="login">     
           <div className="logoadmitkard" >
                <img src={logoimg} className="logoimage" alt="Logo AdnmitKard"></img>
           </div>
           <div className="greet">
                     <p>Welcome Back</p>  
                     <span>Please sign-in to your account</span>
           </div>
           <div className="inputno">
               <form   onSubmit={handleSubmit} > 
                  <fieldset className="field_set">  
                     <legend>Enter Contact Number</legend> 
                  <div className="phone">
                       <select className="select">
                           <option value="+91">+91</option>
                           <option value="+011">+011</option> 
                       </select>
                  <input required className="number_verify" type="tel" 
                  name="telphone"    pattern="[0-9]{10}" maxLength="10" onChange={e => setNumber(e.target.value)}></input>   
                 </div>
                 </fieldset>
                <div className="message">
                    <p>We will send you an one time SMS message
                    </p>
                    <p>Charges may apply</p>
                </div>
                <div className="getOtpbutton">
                     <button type="submit" className="OTPbutton"> Sign in with OTP
                    
                     </button>
              </div>
         </form>
     </div>
</div>

    )
}
export default login;