import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faMapMarkerAlt, faClock, faDollarSign, faUsers } from '@fortawesome/free-solid-svg-icons';

const JobCard = ({ job, onEdit }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img
              src={job.image}
              alt={job.title}
              className="h-12 w-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-500">{job.timeAgo}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-gray-600 hover:text-gray-800" onClick={onEdit}>
              <FontAwesomeIcon icon={faEdit} className="w-5 h-5" />
            </button>
            <button className="text-red-600 hover:text-red-800">
              <FontAwesomeIcon icon={faTrash} className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="text-gray-600 mb-4">
          <p className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            {job.location.map(loc => loc.label).join(', ')}
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            {job.type} • {job.duration}
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
            {job.salary}
          </p>
        </div>
        <div className="text-sm text-gray-500 mb-4">
          <p>Job ID: {job.jobId}</p>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            {job.applications} applications
          </p>
        </div>
        <button className="text-purple-600 font-semibold hover:underline">
          View details
        </button>
      </div>
    );
  };

export default JobCard;
