import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faEnvelope, faFileAlt, faHeart, faUser, faLifeRing, faSignOutAlt, faBriefcase, faPlus } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/Skillnaav-logo.png"; // Replace with your actual logo path
import { useAdminContext } from './AdminContextApi/AdminContext'; // Correct path

const AdminSidebar = () => {
  const { selectedMenu, setSelectedMenu } = useAdminContext();

  const handleTabClick = (tab) => {
    setSelectedMenu(tab);
  };

  return (
    <div className="w-64 h-screen bg-white flex flex-col justify-between pl-6 font-poppins shadow-lg sticky top-0 overflow-y-auto scrollbar-hide">
      {/* Logo Section with sticky position */}
      <div className="sticky top-0 z-10 bg-white py-4">
        <div className="flex items-center mb-4">
          <img src={logo} alt="Skillnaav Logo" className="w-auto h-12" />
        </div>
      </div>
      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {[
            { id: 'home', icon: faHome, label: 'Homepage' },
            { id: 'search', icon: faSearch, label: 'Search' },
            { id: 'applications', icon: faFileAlt, label: 'Applications' },
            { id: 'saved-jobs', icon: faHeart, label: 'Saved Jobs' },
            { id: 'your-job-posts', icon: faBriefcase, label: 'Your Job Posts' },
            { id: 'post-a-job', icon: faPlus, label: 'Post a Job' },
            { id: 'messages', icon: faEnvelope, label: 'Messages' },
            { id: 'profile', icon: faUser, label: 'Profile' },
          ].map(({ id, icon, label }) => (
            <li key={id}>
              <button
                onClick={() => handleTabClick(id)}
                className={`flex items-center p-3 rounded-lg w-full text-left font-medium ${selectedMenu === id
                    ? 'bg-[#7520A9] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                <FontAwesomeIcon
                  icon={icon}
                  className={`w-5 h-5 mr-3 ${selectedMenu === id
                      ? 'text-white'
                      : 'text-gray-600'
                    }`}
                />
                <span
                  className={`${selectedMenu === id
                      ? 'text-white'
                      : 'text-gray-600'
                    }`}
                >
                  {label}
                </span>
              </button>
            </li>
          ))}
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

export default AdminSidebar;
