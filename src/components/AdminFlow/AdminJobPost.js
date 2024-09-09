import React, { useState } from 'react';
import AdminPostAJob from './AdminPostAJob'; // Ensure the path is correct
import JobCard from './JobCard'; // Ensure the path is correct

const YourPosts = () => {
  const [jobs, setJobs] = useState([
    // Sample job data
    {
      image: 'https://via.placeholder.com/48',
      title: 'Data science Intern',
      timeAgo: '5d ago',
      location: [{ value: 'remote', label: 'Remote' }],
      type: 'Internship',
      duration: '3 months',
      salary: '30k per month',
      jobId: '12Hg7f',
      applications: 30,
      description: 'A little about the company and the team that you\'ll be working with.',
      compensation: '30k per month',
      compensationType: 'per month',
      skills: [{ value: 'data-science', label: 'Data science' }],
    },
  ]);
  const [editingJobId, setEditingJobId] = useState(null);

  const handleEditClick = (jobId) => {
    setEditingJobId(jobId);
  };

  const handleUpdateJob = (updatedJob) => {
    console.log('Updating job with:', updatedJob); // Log to verify data
    if (updatedJob.jobId) {
      // Update existing job
      const updatedJobs = jobs.map((job) =>
        job.jobId === updatedJob.jobId ? updatedJob : job
      );
      setJobs(updatedJobs);
    } else {
      // Add new job
      setJobs([...jobs, { ...updatedJob, jobId: Date.now().toString() }]);
    }
    setEditingJobId(null); // Exit edit mode
  };
  

  const handleDeleteJob = (jobId) => {
    setJobs(jobs.filter((job) => job.jobId !== jobId));
  };

  return (
    <div className="font-poppins p-8 bg-white-100 min-h-screen">
      {editingJobId === null ? (
        <>
          <h2 className="text-xl font-semibold mb-2">Your posts</h2>
          <p className="text-gray-500 mb-6">Overview of your job posts</p>
        </>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <div key={job.jobId}>
            {editingJobId === job.jobId ? (
              <AdminPostAJob
                job={job}
                onUpdate={handleUpdateJob} // Ensure this is a function
              />
            ) : (
              <JobCard
                job={job}
                onEdit={() => handleEditClick(job.jobId)}
                onDelete={() => handleDeleteJob(job.jobId)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourPosts;
