import React, { useState } from 'react';
import { FaHome, FaPlane, FaSearch, FaEnvelope, FaClipboard, FaHeart, FaUser, FaHeadset, FaSignOutAlt } from 'react-icons/fa';
import NavItem from './NavItem';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Homepage'); // Initial active item

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="fixed top-[84px] left-0 h-[860px] w-[251px] p-5 border-r bg-white border-gray-200 flex flex-col justify-between">
      <div className="space-y-4">
        <NavItem
          icon={<FaHome />}
          text="Homepage"
          isActive={activeItem === 'Homepage'}
          onClick={() => handleClick('Homepage')}
        />
        <NavItem
          icon={<FaPlane />}
          text="Aeronautical jobs"
          isActive={activeItem === 'Aeronautical jobs'}
          onClick={() => handleClick('Aeronautical jobs')}
        />
        <NavItem
          icon={<FaSearch />}
          text="Search"
          isActive={activeItem === 'Search'}
          onClick={() => handleClick('Search')}
        />
        <NavItem
          icon={<FaEnvelope />}
          text="Messages"
          isActive={activeItem === 'Messages'}
          onClick={() => handleClick('Messages')}
        />
        <NavItem
          icon={<FaClipboard />}
          text="Applications"
          isActive={activeItem === 'Applications'}
          onClick={() => handleClick('Applications')}
        />
        <NavItem
          icon={<FaHeart />}
          text="Saved jobs"
          isActive={activeItem === 'Saved jobs'}
          onClick={() => handleClick('Saved jobs')}
        />
        <NavItem
          icon={<FaUser />}
          text="Profile"
          isActive={activeItem === 'Profile'}
          onClick={() => handleClick('Profile')}
        />
      </div>
      <div className="space-y-4">
        <NavItem
          icon={<FaHeadset />}
          text="Support"
          isActive={activeItem === 'Support'}
          onClick={() => handleClick('Support')}
        />
        <NavItem
          icon={<FaSignOutAlt />}
          text="Logout"
          isActive={activeItem === 'Logout'}
          onClick={() => handleClick('Logout')}
        />
        <div className="p-4 bg-purple-100 text-purple-800 rounded-md">
          <p className="text-sm">UPGRADE TO PREMIUM</p>
          <p className="text-xs">Your team has used 80% of your available space. Need more?</p>
          <button className="mt-2 bg-purple-600 text-white text-sm rounded-md px-3 py-1">Upgrade plan</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
