import React,{useState} from 'react';
import otpimg from  '../images/otp.svg'
import './otp.css'
function otp()
{
       const no =localStorage.getItem("phone");
       if(!no)
       {
           window.location.href='/';
           
       }
       // const [otpcode, setOtp] = useState({}); 
        let code=0;  
        function handleChange(evt) {
            code =  code+(evt.target.value)
          console.log(code);
         };
        const onSubmit=(e)=>{
        e.preventDefault();         
           
         if(code=="01234")
        {     
               alert("You have been successfully login ");
               window.location.href='/success'
               localStorage.setItem("otp",code); 
              }
               else 
            {
               alert("wrong Otp");             
              window.location.href='/otp';
        }      
       }
    return(    
   <div className="login" >     
         <div className="logootp" >     
             <img src={otpimg} className="OTPIMAGE" alt="otp_image"></img>             
         </div>
        <div className="verify_message">
            <p>Please Verify Mobile number</p>  
            <span>An OTP is send to  </span>
            <code>  {no}</code>
          <br></br>
         <a href="#valid" className="change">Change Phone number</a> 
     </div>
 <form onSubmit={onSubmit}>
        <div className="otpinputbox">   
            <input type="tel" maxLength="1" className="form-control first" placeholder=""  onChange={handleChange} required/>
            <input type="tel" maxLength="1"  className="form-control" placeholder=""   onChange={ handleChange }  required/>
            <input type="tel" maxLength="1"  className="form-control" placeholder=""  onChange={ handleChange}  required/>
            <input type="tel" maxLength="1"  className="form-control" placeholder=""  onChange={ handleChange}  required/>
        </div>
          <div className="otpmessage">
              <p> Didn't recieve the code ?
              <code>
              <a href="#resend" className="resend">Resend </a>
              </code>
              </p>
         </div>
          <div className="verifydiv">
              <button type="submit" value="verify"className="verifybutton">Verify
              </button>
         </div>
     </form>
</div>

    )
}
export default otp;