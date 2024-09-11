import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faMapMarkerAlt, faClock, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import PartnerUpdateJob from './PartnerUpdateJob'; // Import the AdminUpdateJob component
import { updateJobPost } from '../../Redux/Action'; // Import the action to update job post

const PartnerJobPost = () => {
  const jobPosts = useSelector((state) => state.jobs.jobPosts); // Get job posts from Redux store
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  const [selectedJobId, setSelectedJobId] = useState(null); // State to hold the job ID being edited

  // Handle clicking the Edit button for a specific job
  const handleEditClick = (jobId) => {
    setSelectedJobId(jobId); // Set the jobId of the job being edited
  };

  // Handle closing the update form
  const handleCloseUpdate = () => {
    setSelectedJobId(null); // Clear the selected jobId, closing the edit form
  };

  // Handle saving the updated job data
  const handleUpdateJob = (updatedJob) => {
    dispatch(updateJobPost(updatedJob)); // Dispatch the updated job to Redux store
    setSelectedJobId(null); // Clear the edit mode after saving
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-6">
        {jobPosts.map((job) => (
          <div key={job.id} className="relative">
            {selectedJobId === job.id ? (
              // Render the edit form only for the selected job
              <PartnerUpdateJob
                job={job} // Pass the current job data for editing
                onClose={handleCloseUpdate} // Close the edit form
                onSave={handleUpdateJob}    // Save the updated job
              />
            ) : (
              // Default job card display when not editing
              <div className="border rounded-lg p-4 shadow-md bg-white flex items-start relative">
                <div className="w-16 h-16 mr-4">
                  <img
                    src={job.profileImage || 'default-profile.png'} // Default image
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="absolute top-2 right-2 flex space-x-2">
                    {/* Edit Button */}
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleEditClick(job.id)} // Set the jobId as selected
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    {/* Delete Button */}
                    <button className="text-red-500 hover:text-red-700">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="flex items-center text-gray-600">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
                    {job.location}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <FontAwesomeIcon icon={faClock} className="mr-1" />
                    {job.remote ? 'Remote' : 'On-site'}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <FontAwesomeIcon icon={faDollarSign} className="mr-1" />
                    {job.compensation} {job.compensationType}
                  </p>
                  <p>Skills: {job.skills}</p>
                  <p>Job ID: #{job.id}</p> {/* Display the job id */}
                  <button className="text-purple-500 hover:text-purple-700">View details</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerJobPost;
