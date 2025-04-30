import './App.css';
import {  useRef, useState } from "react";
function App() {
  const OTP_DIGITS = 6;
  const [digits, setDigits] = useState(new Array(OTP_DIGITS).fill(''));
  const inputRef = useRef([]);

  
  const onHandleChange = (value, index)=> {
    if(isNaN(value))return;
    const newDigits = [...digits];
    newDigits[index] = value.slice(-1);
    setDigits(newDigits);
    value && inputRef?.current[index+1]?.focus();
  }

  const onHandleBackSpace = (e, index) => {
     if(e.key === "Backspace" && !e.target.value){
      inputRef?.current[index-1]?.focus();
     }
  }
  return (
    <div className="App">
       {digits.map((input, index)=> (
             <input ref={input => (inputRef.current[index] = input)} className="otp-input" 
                    key={index} 
                    value={input} 
                    onChange={(e) => onHandleChange(e.target.value, index)}
                    maxLength={1}
                    onKeyDown={(e) => onHandleBackSpace(e, index)}
                   />
       ))}
    </div>
  );
}

export default App;