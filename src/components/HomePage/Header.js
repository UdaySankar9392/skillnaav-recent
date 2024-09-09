import React from 'react';
import Skillnaavlogo from '../../assets/Skillnaav-logo.png';

const Header = () => {
  return (
    <header className="bg-white shadow py-0 fixed top-0 left-0 w-full z-50">
      <div className="px-4">
        <div className="flex items-center">
          <img src={Skillnaavlogo} alt="Skillnaav Logo" className="h-20" />
        </div>
      </div>
    </header>
  );
};

export default Header;
