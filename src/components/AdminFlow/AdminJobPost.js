import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faMapMarkerAlt, faClock, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import AdminUpdateJob from './AdminUpdateJob';
import { updateJobPost, deleteJobPost } from '../../Redux/JobSlice'; // Ensure correct import path

const AdminJobPost = () => {
  const jobPosts = useSelector((state) => state.jobs.jobPosts);
  const dispatch = useDispatch();
  const [editingJobId, setEditingJobId] = useState(null); // Track the currently editing job

  // Handle clicking the Edit button
  const handleEditClick = (jobId) => {
    setEditingJobId(jobId); // Set the ID of the job being edited
  };

  // Handle closing the update form
  const handleCloseUpdate = () => {
    setEditingJobId(null); // Clear the editing state
  };

  // Handle saving the updated job
  const handleUpdateJob = (updatedJob) => {
    dispatch(updateJobPost(updatedJob)); // Dispatch update action
    setEditingJobId(null); // Clear the editing state
  };

  // Handle deleting a job post
  const handleDeleteClick = (jobId) => {
    dispatch(deleteJobPost(jobId)); // Dispatch delete action
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-6">
        {jobPosts.map((job) => (
          <div key={job.id} className="relative">
            {editingJobId === job.id ? (
              <AdminUpdateJob
                job={job}
                onClose={handleCloseUpdate}
                onSave={handleUpdateJob}
              />
            ) : (
              <div className="border rounded-lg p-4 shadow-md bg-white flex items-start relative">
                <div className="w-16 h-16 mr-4">
                  <img
                    src={job.profileImage || 'default-profile.png'}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleEditClick(job.id)} // Open update form for specific job
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDeleteClick(job.id)} // Delete the specific job post
                    >
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
                  <p>Job ID: #{job.id}</p>
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

export default AdminJobPost;
