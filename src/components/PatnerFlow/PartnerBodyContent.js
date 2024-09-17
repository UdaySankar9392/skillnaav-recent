import React from 'react';
import { usePartnerContext } from './PartnerContextApi/PartnerContext';
import PartnerJobPosts from './PartnerJobPosts';
import PartnerPostAJob from './PartnerPostAJob';
import PartnerMessages from './PartnerMessages';
import PartnerProfile from './PartnerProfile';
import PartnerSupport from './PartnerSupport';

const PartnerBodyContent = () => {
  const { selectedMenu } = usePartnerContext();

  let content;

  switch (selectedMenu) {
    case 'your-job-posts':
      content = <PartnerJobPosts/>;
      break;
    case 'post-a-job':
      content = <PartnerPostAJob />;
      break;
    case 'messages':
      content = <PartnerMessages />;
      break;
    case 'profile':
      content = <PartnerProfile />;
      break;
    case 'support':
      content = <PartnerSupport />;
      break;
    default:
      content = <PartnerJobPosts/>;
  }

  return (
    <div className="flex-1 p-6 font-poppins">
      {content}
    </div>
  );
};

export default PartnerBodyContent;
