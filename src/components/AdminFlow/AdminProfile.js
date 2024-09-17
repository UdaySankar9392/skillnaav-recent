import React, { useState, useRef } from "react";

// Email Verification Modal Component
const EmailVerificationModal = ({ isOpen, onClose, onVerify }) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < code.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (!value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyCode = () => {
    const enteredCode = code.join("");
    onVerify(enteredCode);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <div className="flex flex-col items-center mb-4">
          <div className="bg-purple-100 p-2 rounded-full mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-purple-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12V8a4 4 0 00-8 0v4H5l.889 8H18.11L19 12h-3z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-center">Please check your email</h3>
          <p className="text-sm text-gray-500 text-center mb-4">
            We've sent a code to olivia@untitledui.com
          </p>

          {/* Code input fields */}
          <div className="flex space-x-2 mb-4">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyPress(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                maxLength="1"
                className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            ))}
          </div>

          <p className="text-xs text-gray-500">
            Didn’t get a code?{" "}
            <button className="text-purple-600 hover:underline">Click to resend</button>
          </p>
        </div>

        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            onClick={handleVerifyCode}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

// Unsaved Changes Modal Component
const UnsavedChangesModal = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <div className="flex flex-col items-center mb-4">
          <h3 className="text-lg font-semibold text-center">You have unsaved changes</h3>
          <p className="text-sm text-gray-500 text-center mb-4">
            Do you want to save the changes you made before closing?
          </p>
        </div>

        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={onClose}
          >
            Discard
          </button>
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Profile Form Component
const ProfileForm = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    university: "Tesla Inc",
    institutionalId: "XXXXXXX",
    email: "Oliva@gmail.com",
  });
  const [isUnsavedModalOpen, setIsUnsavedModalOpen] = useState(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    setIsUnsavedModalOpen(true);
  };

  const handleDiscard = () => {
    setIsUnsavedModalOpen(false);
  };

  const handleSaveChanges = () => {
    setIsUnsavedModalOpen(false);
    setIsVerificationModalOpen(true);
  };

  const handleVerifyCode = (enteredCode) => {
    console.log("Verification code entered:", enteredCode);
    setIsVerificationModalOpen(false);
    // Implement verification logic here
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md font-poppins">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Your profile</h2>
        <div className="flex space-x-4">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Cancel</button>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-md"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-6">Update your photo and personal details here.</p>

      {/* Photo Upload */}
      <div className="flex flex-col mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Your photo</label>
        <p className="text-sm text-gray-500 mb-6">This Will be Display on your profile</p>
        <div className="w-full border-dashed border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="w-24 h-24 object-cover rounded-full mb-4" />
          ) : (
            <div className="w-24 h-24 bg-gray-100 rounded-full mb-4" />
          )}
          <input
            type="file"
            onChange={handleImageUpload}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-gray-200 text-gray-600 px-4 py-2 rounded-md"
          >
            Click to upload
          </label>
        </div>
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        />
      </div>

      {/* Unsaved Changes Modal */}
      <UnsavedChangesModal
        isOpen={isUnsavedModalOpen}
        onClose={handleDiscard}
        onSave={handleSaveChanges}
      />

      {/* Email Verification Modal */}
      <EmailVerificationModal
        isOpen={isVerificationModalOpen}
        onClose={() => setIsVerificationModalOpen(false)}
        onVerify={handleVerifyCode}
      />
    </div>
  );
};

export default ProfileForm;
