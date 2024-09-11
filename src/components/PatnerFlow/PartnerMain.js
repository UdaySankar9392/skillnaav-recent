import React from 'react';
import PartnerNavBar from './PartnerNavBar';
import PartnerSideBar from './PartnerSideBar';
import PartnerBodyContent from './PartnerBodyContent';
import { PartnerProvider } from './PartnerContextApi/PartnerContext';

const PartnerMain = () => {
  return (
    <PartnerProvider>
      <div className="min-h-screen flex font-poppins bg-gray-50">
        {/* Sidebar on the left */}
        <PartnerSideBar />
        
        {/* Main content area */}
        <div className="flex-1">
          {/* Navigation bar */}
          <PartnerNavBar />
          
          {/* Body content where job posts, messages, etc. will be rendered */}
          <PartnerBodyContent />
        </div>
      </div>
    </PartnerProvider>
  );
};

export default PartnerMain;
