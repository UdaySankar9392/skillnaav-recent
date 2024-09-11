import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminContext } from './AdminContextApi/AdminContext'; // Correct path
import AdminMessage from './AdminMessage'; // Adjust paths as needed
import AdminSearch from './AdminSearch';
import AdminApplication from './AdminApplication';
import AdminHome from './AdminHome';
import AdminSavedJobs from './AdminSavedJobs';
import AdminJobPost from './AdminJobPost';
import AdminPostAJob from './AdminPostAJob';
import AdminProfile from './AdminProfile'; // If available
import AdminSupport from './AdminSupport'; // If available

const AdminBodyContent = () => {
  const { selectedMenu } = useAdminContext();
  const navigate = useNavigate();

  let content;

  switch (selectedMenu) {
    case 'home':
      content = <AdminHome />;
      break;
    case 'search':
      content = <AdminSearch />;
      break;
    case 'messages':
      content = <AdminMessage />;
      break;
    case 'applications':
      content = <AdminApplication />;
      break;
    case 'saved-jobs':
      content = <AdminSavedJobs />;
      break;
    case 'your-job-posts':
      content = <AdminJobPost />;
      break;
    case 'post-a-job':
      content = <AdminPostAJob />;
      break;
    case 'profile':
      content = <AdminProfile />;
      break;
    case 'support':
      content = <AdminSupport />;
      break;
    case 'logout':
      navigate('/Patner-create-account');
      return null;
    default:
      content = <div>Select a menu item</div>;
  }

  return (
    <div className="flex-1 p-6 font-poppins">
      {content}
    </div>
  );
};

export default AdminBodyContent;
