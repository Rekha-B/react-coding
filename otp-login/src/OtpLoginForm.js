import { useState, useRef, useEffect } from 'react';
const OtpLoginForm = ({ length, phoneNumber, onOtpSubmit}) => {
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const inputRefs = useRef([]);

    useEffect(() => {
      if(inputRefs.current[0]){
        inputRefs.current[0].focus();
      }
    }, [])
    
    const handleChange = (index, e) => {
        const value = e.target.value;

        if(isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length-1);
        setOtp(newOtp);

        const combined = newOtp.join('');
        if(combined.length === length) onOtpSubmit(combined);
        if(value && index < length - 1 && inputRefs.current[index+1]){
            inputRefs.current[index+1].focus();
        }
        
    }


    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(0,1);
    }

    const handleKeyDown = (index, e) => {
        if(e.key === 'Backspace' && index > 0 && !otp[index] && inputRefs.current[index-1]){
         inputRefs.current[index-1].focus();
        } 
     }
   return (
      <div>
        <p>Enter Otp sent to {phoneNumber}</p>
       {otp.map((value,index) => {
        return (
          <input
             type="text"
             ref={(input) => inputRefs.current[index] = input }
             key={index}
             onChange={(e) => handleChange(index,e)}
             onClick={() => handleClick()}
             onKeyDown={(e) => handleKeyDown(index,e)}
             className="otpInput"
          /> )
       })}
      </div>
   )
}

export default OtpLoginForm;