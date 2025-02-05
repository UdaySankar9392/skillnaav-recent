import React, { createContext, useState, useContext } from 'react';

const HomePageContext = createContext();

export const TabProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState('home');
  const [savedJobs, setSavedJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  const handleSelectTab = (tab) => {
    setSelectedTab(tab);
  };

  const saveJob = (job) => {
    setSavedJobs((prevJobs) => {
      const existingJobIndex = prevJobs.findIndex(savedJob => savedJob.jobTitle === job.jobTitle);
      if (existingJobIndex !== -1) {
        const updatedJobs = [...prevJobs];
        updatedJobs[existingJobIndex] = job;
        return updatedJobs;
      }
      return [...prevJobs, job];
    });
  };

  const removeJob = (job) => {
    setSavedJobs((prevJobs) => prevJobs.filter((j) => j.jobTitle !== job.jobTitle));
  };

  const applyJob = (job) => {
    setApplications((prevJobs) => {
      const existingJobIndex = prevJobs.findIndex(appJob => appJob.jobTitle === job.jobTitle);
      if (existingJobIndex !== -1) {
        return prevJobs;
      }
      return [...prevJobs, job];
    });
  };

  return (
    <HomePageContext.Provider value={{ selectedTab, handleSelectTab, savedJobs, saveJob, removeJob, applications, applyJob }}>
      {children}
    </HomePageContext.Provider>
  );
};

export const useTabContext = () => useContext(HomePageContext);
