import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {usePartnerContext}  from './PartnerContextApi/PartnerContext';

const Navbar = () => {
  const { selectedMenu, setSelectedMenu } = usePartnerContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleUserClick = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleLogout = () => {
    // Add your logout functionality here
    console.log('Logged out');
  };

  return (
    <div className="bg-white text-gray-800 p-4 border-b border-gray-300 sticky top-0 z-50 flex justify-between items-center">
      {/* Left side (Logo or navigation items can go here) */}
      <div className="text-lg font-semibold">
        {/* Add your logo or navigation links here */}
        
      </div>

      {/* Right side (User icon with popup) */}
      <div className="relative ml-auto">
        <button onClick={handleUserClick} className="focus:outline-none">
          <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-gray-800" />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 border border-gray-300">
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-100"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
