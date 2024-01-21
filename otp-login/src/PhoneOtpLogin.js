import { useState} from 'react';
 import OtpLoginForm from './OtpLoginForm';
const PhoneOtpLogin = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [ShowOtpLogin, setShowOtpLogin] = useState()

    const onHandleSubmit = (e) => {
        e.preventDefault();

        const regex = /[^0-9]/g;
        if(phoneNumber.length < 10 || regex.test(phoneNumber)) {
          alert("Invalid Phone Number");
          return ;
        }

        setShowOtpLogin(true);
    }

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const onOtpSubmit = (otp) => {
       console.log('Login successfull', otp);
    }
    return (
      <div>
      {!ShowOtpLogin && 
      <form onSubmit={(e) => onHandleSubmit(e)}>
        <input type="text" placeholder="Enter Phone Number" value={phoneNumber} onChange={handlePhoneNumber}/>
        <button>Submit</button>
      </form>}

      {ShowOtpLogin && <OtpLoginForm length={4} phoneNumber={phoneNumber} onOtpSubmit={onOtpSubmit}/>}
      </div>
    )
}

export default PhoneOtpLogin;