import React, { createContext, useState, useContext } from 'react';

// Create a Context for Admin
const AdminContext = createContext();

// AdminProvider component
export const AdminProvider = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState('home');
  const [savedJobs, setSavedJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  // Function to handle menu selection
  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu);
  };

  const saveJob = (job) => {
    setSavedJobs([...savedJobs, job]);
  };

  const removeJob = (job) => {
    setSavedJobs(savedJobs.filter(savedJob => savedJob.jobTitle !== job.jobTitle));
  };

  const applyJob = (job) => {
    setApplications([...applications, job]);
  };

  return (
    <AdminContext.Provider value={{
      selectedMenu,
      setSelectedMenu: handleSelectMenu,
      savedJobs,
      saveJob,
      removeJob,
      applications,
      applyJob, // Make sure applyJob is provided here
    }}>
      {children}
    </AdminContext.Provider>
  );
};

// Custom hook for using the AdminContext
export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdminContext must be used within an AdminProvider');
  }
  return context;
};
