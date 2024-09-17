import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useTabContext } from './HomePageContext/HomePageContext'; // Correct path
import Message from './Message';
import AeronauticalJobs from './AeronauticalJobs';
import SearchBar from './SearchBar';
import Home from './Home';
import Filter from './Filter'; // Import the Filter component
import SavedJobs from './SavedJobs';
import Applications from './Applications';
import Support from './Support';
import Profile from './Profile'; // Import the Profile component

const BodyContent = () => {
  const { selectedTab, fine, handleSelectTab } = useTabContext();
  const navigate = useNavigate(); // Initialize useNavigate

  let content;

  switch (selectedTab) {
    case 'home':
      content = <Home />;
      break;
    case 'aeronautical-jobs':
      content = <AeronauticalJobs />;
      break;
    case 'searchbar':
      content = <SearchBar />;
      break;
    case 'messages':
      content = <Message />;
      break;
    case 'applications':
      content = <Applications />;
      break;
    case 'saved-jobs':
      content = <SavedJobs />;
      break;
    case 'profile':
      content = <Profile />;
      break;
    case 'support':
      content = <Support />;
      break;
    case 'logout':
      navigate('/admin-create-account'); // Navigate to AdminCreateAccount route
      return null; // Return null to prevent rendering of any content
    case 'filter':
      content = <Filter />;
      break;
    default:
      content = <div>Select a tab {fine}</div>;
  }

  return (
    <div className="flex-1 p-4">
      {content}
      <button onClick={() => handleSelectTab('searchbar')}></button>
    </div>
  );
};

export default BodyContent;
