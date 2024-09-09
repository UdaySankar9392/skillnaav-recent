import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Homepage from './HomePage';
import Cards from './Cards';
import ApplyCards from './JobPosting';
import { HomePageProvider } from './HomePageContext/HomePageContext';

const MainPage = () => {
  return (
    <HomePageProvider>
      <div className="min-h-screen">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="ml-[251px] p-8 w-full">
            <Homepage />
            <Cards />
            <ApplyCards />
          </main>
        </div>
      </div>
    </HomePageProvider>
  );
};

export default MainPage;
