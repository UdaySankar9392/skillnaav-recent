import React, { useState, useRef, useEffect } from 'react';
import loginImage from '../../assets/login-image.png'; // Adjust the path to your image
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const PatnerVerification = () => {
  const [code, setCode] = useState(new Array(4).fill(''));
  const [isComplete, setIsComplete] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    // Set initial focus on the first input field
    inputRefs.current[0].focus();
  }, []);

  useEffect(() => {
    // Check if all fields are filled
    if (code.every(digit => digit !== '')) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [code]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Automatically focus next input or loop back to the first input
      if (index < 3 && value !== '') {
        inputRefs.current[index + 1].focus();
      } else if (index === 3 && value !== '') { 
        inputRefs.current[0].focus();
      }
    } else if (value === '') {
      const newCode = [...code];
      newCode[index] = '';
      setCode(newCode);
    }
  };

  const handleFocus = (index) => {
    inputRefs.current[index].select();
  };

  const handleResendCode = () => {
    // Reset code to empty
    setCode(new Array(4).fill(''));
    inputRefs.current[0].focus();
  };

  const handleContinue = () => {
    // Redirect to ProfileForm.js
    navigate('/patner-profile');
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-poppins">
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <img
          src={loginImage}
          alt="Verification"
          className="w-[830px] h-[900px] object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center justify-center p-8 w-full lg:w-1/2 bg-white">
        <div className="w-full max-w-md flex flex-col justify-center min-h-screen lg:min-h-full">
          <div className="text-center mt-12 font-poppins">
            <h2 className="text-2xl mb-4">Enter the code sent to your registered Email</h2>
            <div className="flex justify-center gap-2">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onFocus={() => handleFocus(index)}
                  className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              ))}
            </div>
            <button
              onClick={handleResendCode}
              className="mt-6 text-purple-700 hover:underline"
            >
              Resend code
            </button>
            {isComplete && (
              <div className="mt-4">
                <p className="text-green-500">Code verified successfully!</p>
                <button
                  onClick={handleContinue}
                  className="mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatnerVerification;
