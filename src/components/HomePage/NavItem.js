import React from 'react';

const NavItem = ({ icon, text, isActive, onClick }) => {
  return (
    <button
      className={`flex items-center w-full p-2 rounded-md transition-colors duration-300 ${
        isActive ? 'bg-[#F0DEFD]' : 'hover:bg-[#F0DEFD]'
      } focus:outline-none`}
      onClick={onClick}
    >
      <span
        className={`mr-3 transition-colors duration-300 ${
          isActive ? 'text-[#7520A9]' : 'text-gray-900'
        }`}
      >
        {icon}
      </span>
      <span
        className={`flex-1 transition-colors duration-300 ${
          isActive ? 'text-[#7520A9]' : 'text-gray-900'
        }`}
      >
        {text}
      </span>
    </button>
  );
};

export default NavItem;
