import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PatnerProfile = () => {
  const [companyName, setCompanyName] = useState('');
  const [institutionalID, setInstitutionalID] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate(); // To handle navigation

  // Function to check if all fields are filled
  const isFormComplete = companyName && institutionalID && profileImage;

  // Handle file upload and set image preview
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormComplete) {
      setIsSubmitted(true);
      // Redirect to /partner-main after successful form submission
      navigate('/partner-main');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 font-poppins">
      <div className="bg-white shadow-md rounded-lg p-10 w-full max-w-lg">
        <h2 className="text-xl font-semibold text-gray-700 bg-purple-100 p-3 rounded-md mb-6">BASIC INFORMATION</h2>
        <form onSubmit={handleSubmit}>
          {/* University or Company Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">University or Company name</label>
            <input
              type="text"
              placeholder="Tesla Inc"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </div>

          {/* Institutional ID */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Institutional ID</label>
            <input
              type="text"
              placeholder="XXXXXXXXXX"
              value={institutionalID}
              onChange={(e) => setInstitutionalID(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </div>

          {/* Profile Picture */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Profile picture</label>
            <div className="flex justify-center items-center w-full">
              <label
                htmlFor="profile-picture"
                className="flex flex-col items-center justify-center w-24 h-24 bg-gray-50 rounded-full shadow-sm cursor-pointer hover:bg-gray-100 transition duration-200"
              >
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile Preview"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M12 5v14"
                      />
                    </svg>
                  </>
                )}
                <input id="profile-picture" type="file" className="hidden" onChange={handleFileUpload} />
              </label>
            </div>
          </div>

          {/* Continue Button */}
          <div>
            <button
              type="submit"
              className={`w-full py-3 rounded-md font-semibold text-center text-white transition duration-200 ${
                isFormComplete ? 'bg-purple-400 hover:bg-purple-700' : 'bg-purple-100 cursor-not-allowed'
              }`}
              disabled={!isFormComplete}
            >
              Continue
            </button>
          </div>
        </form>

        {isSubmitted && (
          <div className="mt-6 text-center text-green-500">
            <p>Form submitted successfully!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatnerProfile;
