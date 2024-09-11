import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLifeRing, faSignOutAlt, faBriefcase, faPlus, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { usePartnerContext } from './PartnerContextApi/PartnerContext'; // Correct path
import logo from "../../assets/Skillnaav-logo.png"; // Ensure this path is correct

const PartnerSideBar = () => {
  const { selectedMenu, setSelectedMenu } = usePartnerContext(); // Use context to get and set selectedMenu

  const handleTabClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="w-64 bg-white flex flex-col justify-between p-6 font-poppins shadow-lg sticky top-0 h-screen">
      {/* Logo Section */}
      <div className="flex items-center mb-8">
        <img src={logo} alt="Skillnaav Logo" className="w-80 h-24 mr-3" />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => handleTabClick('your-job-posts')}
              className={`flex items-center p-3 rounded-lg w-full text-left font-medium ${selectedMenu === 'your-job-posts'
                  ? 'bg-[#7520A9] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <FontAwesomeIcon
                icon={faBriefcase}
                className={`w-5 h-5 mr-3 ${selectedMenu === 'your-job-posts'
                    ? 'text-white'
                    : 'text-gray-600'
                  }`}
              />
              <span
                className={`${selectedMenu === 'your-job-posts'
                    ? 'text-white'
                    : 'text-gray-600'
                  }`}
              >
                Your Job posts
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabClick('post-a-job')}
              className={`flex items-center p-3 rounded-lg w-full text-left font-medium ${selectedMenu === 'post-a-job'
                  ? 'bg-[#7520A9] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <FontAwesomeIcon
                icon={faPlus}
                className={`w-5 h-5 mr-3 ${selectedMenu === 'post-a-job'
                    ? 'text-white'
                    : 'text-gray-600'
                  }`}
              />
              <span
                className={`${selectedMenu === 'post-a-job'
                    ? 'text-white'
                    : 'text-gray-600'
                  }`}
              >
                Post A Job
              </span>
            </button>
          </li>

          <li>
            <button
              onClick={() => handleTabClick('messages')}
              className={`flex items-center p-3 rounded-lg w-full text-left font-medium ${selectedMenu === 'messages'
                  ? 'bg-[#7520A9] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className={`w-5 h-5 mr-3 ${selectedMenu === 'messages'
                    ? 'text-white'
                    : 'text-gray-600'
                  }`}
              />
              <span
                className={`${selectedMenu === 'messages'
                    ? 'text-white'
                    : 'text-gray-600'
                  }`}
              >
                Messages
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabClick('profile')}
              className={`flex items-center p-3 rounded-lg w-full text-left font-medium ${selectedMenu === 'profile'
                  ? 'bg-[#7520A9] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <FontAwesomeIcon
                icon={faUser}
                className={`w-5 h-5 mr-3 ${selectedMenu === 'profile'
                    ? 'text-white'
                    : 'text-gray-600'
                  }`}
              />
              <span
                className={`${selectedMenu === 'profile'
                    ? 'text-white'
                    : 'text-gray-600'
                  }`}
              >
                Profile
              </span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Support and Logout Section */}
      <div>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => handleTabClick('support')}
              className={`flex items-center p-3 rounded-lg w-full text-left font-medium ${selectedMenu === 'support'
                  ? 'bg-[#7520A9] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <FontAwesomeIcon
                icon={faLifeRing}
                className={`w-5 h-5 mr-3 ${selectedMenu === 'support'
                    ? 'text-white'
                    : 'text-gray-600'
                  }`}
              />
              <span
                className={`${selectedMenu === 'support'
                    ? 'text-white'
                    : 'text-gray-600'
                  }`}
              >
                Support
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabClick('logout')}
              className={`flex items-center p-3 rounded-lg w-full text-left font-medium ${selectedMenu === 'logout'
                  ? 'bg-[#7520A9] text-white'
                  : 'text-red-600 hover:bg-red-100'
                }`}
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className={`w-5 h-5 mr-3 ${selectedMenu === 'logout'
                    ? 'text-white'
                    : 'text-red-600'
                  }`}
              />
              <span
                className={`${selectedMenu === 'logout'
                    ? 'text-white'
                    : 'text-red-600'
                  }`}
              >
                Logout
              </span>
            </button>
          </li>
        </ul>

        {/* Upgrade Section */}
        <div className="mt-6 p-4 bg-purple-100 rounded-lg">
          <h3 className="text-purple-700 text-sm font-semibold">UPGRADE TO PREMIUM</h3>
          <p className="text-xs text-gray-600 mt-1">
            Your team has used 80% of your available space. Need more?
          </p>
          <button className="mt-4 w-full bg-purple-700 text-white py-2 px-4 rounded-lg">
            Upgrade plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerSideBar;
