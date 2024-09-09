import React, { useState, useEffect } from 'react';

const AdminUpdateJob = ({ job, onUpdate }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobType, setJobType] = useState('');
  const [remoteType, setRemoteType] = useState('');
  const [compensation, setCompensation] = useState('');
  const [compensationType, setCompensationType] = useState('');
  const [skills, setSkills] = useState([]);
  const [location, setLocation] = useState([]);

  // Initialize form fields with job data when job prop changes
  useEffect(() => {
    if (job) {
      setJobTitle(job.title);
      setJobDescription(job.description);
      setJobType(job.type);
      setRemoteType(job.remoteType);
      setCompensation(job.compensation);
      setCompensationType(job.compensationType);
      setSkills(job.skills);
      setLocation(job.location);
    }
  }, [job]);

  const handleUpdateJob = (e) => {
    e.preventDefault();
    onUpdate({
      ...job,
      title: jobTitle,
      description: jobDescription,
      type: jobType,
      remoteType,
      compensation,
      compensationType,
      skills,
      location,
    });
  };

  return (
    <form className="font-poppins p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto" onSubmit={handleUpdateJob}>
      {/* Job Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="jobTitle">
          Job Title
        </label>
        <input
          id="jobTitle"
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Job Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="jobDescription">
          Job Description
        </label>
        <textarea
          id="jobDescription"
          rows="4"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Job Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
        <div className="flex space-x-4">
          {['Full time', 'Contract', 'Internship'].map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="radio"
                value={type}
                checked={jobType === type}
                onChange={() => setJobType(type)}
                className="form-radio text-purple-600"
              />
              <span className="ml-2">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Remote Options */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Remote</label>
        <div className="flex space-x-4">
          {['Remote', 'On-site', 'Hybrid'].map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="radio"
                value={type}
                checked={remoteType === type}
                onChange={() => setRemoteType(type)}
                className="form-radio text-purple-600"
              />
              <span className="ml-2">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Compensation */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Compensation</label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={compensation}
            onChange={(e) => setCompensation(e.target.value)}
            className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <select
            value={compensationType}
            onChange={(e) => setCompensationType(e.target.value)}
            className="border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="per year">per year</option>
            <option value="per month">per month</option>
          </select>
        </div>
      </div>

      {/* Skills Required */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Skills required</label>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 px-2 py-1 rounded-lg text-sm flex items-center"
            >
              {skill}
              <button
                type="button"
                onClick={() => setSkills(skills.filter((s) => s !== skill))}
                className="ml-2 text-red-500"
              >
                x
              </button>
            </span>
          ))}
        </div>
        <input
          type="text"
          placeholder="Type to search"
          className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mt-2"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value) {
              setSkills([...skills, e.target.value]);
              e.target.value = '';
            }
          }}
        />
      </div>

      {/* Location */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
        <div className="flex flex-wrap gap-2">
          {location.map((loc, index) => (
            <span
              key={index}
              className="bg-gray-200 px-2 py-1 rounded-lg text-sm flex items-center"
            >
              {loc}
              <button
                type="button"
                onClick={() => setLocation(location.filter((l) => l !== loc))}
                className="ml-2 text-red-500"
              >
                x
              </button>
            </span>
          ))}
        </div>
        <input
          type="text"
          placeholder="Type to search"
          className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mt-2"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value) {
              setLocation([...location, e.target.value]);
              e.target.value = '';
            }
          }}
        />
      </div>

      {/* Update Job Button */}
      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-purple-700 transition duration-300"
      >
        Update job post
      </button>
    </form>
  );
};

export default AdminUpdateJob;
