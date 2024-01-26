import React, { useState } from "react";
import Header from "../Header/Header";
import axios from "axios";

const StudentRegistrationForm = () => {
    const [aadharNumber, setAadharNumber] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [verificationMessage, setVerificationMessage] = useState('');
  
    const handleVerifyAadhar = async () => {
      try {
        const response = await axios.post('http://localhost:5000/student/verify-aadhar', {
          aadharNumber,
        });
  
        // Assuming backend sends a message property in the response
        setVerificationMessage(response.data.message);
      } catch (error) {
        console.error('Error verifying Aadhar:', error);
      }
    };
  
    const handleSendOtp = async () => {
      try {
        const response = await axios.post('http://localhost:5000/student/send-otp', {
          mobileNumber,
        });
  
        // Assuming backend sends an otp property in the response
        setOtp(response.data.otp);
        alert(`OTP sent successfully. Your OTP is: ${response.data.otp}`);
      } catch (error) {
        console.error('Error sending OTP:', error);
      }
    };
  
    return (
      <div>
        <label>
          Aadhar Number:
          <input type="text" value={aadharNumber} onChange={(e) => setAadharNumber(e.target.value)} />
        </label>
        <button onClick={handleVerifyAadhar}>Verify Aadhar</button>
  
        {verificationMessage && <p>{verificationMessage}</p>}
  
        {verificationMessage === 'Aadhar verified successfully, please enter your mobile number' && (
          <div>
            <label>
              Mobile Number:
              <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
            </label>
            <button onClick={handleSendOtp}>Send OTP</button>
          </div>
        )}
      </div>
    );
  };

export default StudentRegistrationForm;;
