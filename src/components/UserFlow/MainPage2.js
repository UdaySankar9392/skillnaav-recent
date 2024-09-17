  import React from 'react';
  import Navbar from './Navbar';
  import Sidebar from './Sidebar';
  import BodyContent from '../UserFlow/BodyContent';
  import { TabProvider } from '../UserFlow/HomePageContext/HomePageContext'; // Correct path

  const MainPage2 = () => {
    return (
      <TabProvider>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <BodyContent />
          </div>
        </div>
      </TabProvider>
    );
  };

  export default MainPage2;
