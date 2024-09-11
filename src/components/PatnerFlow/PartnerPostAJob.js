import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJobPost } from '../../Redux/JobSlice'; // Make sure path is correct

const PartnerPostAJob = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    jobType: '',
    remote: '',
    compensation: '',
    compensationType: 'per year',
    skills: '',
    location: '',
  });

  // Function to check if all fields are filled
  const isFormValid = () => {
    const { title, description, jobType, remote, compensation, skills, location } = formData;
    return title && description && jobType && remote && compensation && skills && location;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('Form data submitted:', formData);
      dispatch(addJobPost(formData)); // Dispatch the form data to Redux
    } else {
      console.error('Form is incomplete');
    }
  };

  return (
    <div className="font-poppins bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        {/* Job Title */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
            placeholder="Job Title"
          />
        </div>

        {/* Job Description */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
            rows="4"
            placeholder="Enter job description..."
          />
        </div>

        {/* Job Type */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Job Type</label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="jobType"
                value="Full time"
                checked={formData.jobType === 'Full time'}
                onChange={handleInputChange}
                className="mr-2"
              />
              Full time
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="jobType"
                value="Contract"
                checked={formData.jobType === 'Contract'}
                onChange={handleInputChange}
                className="mr-2"
              />
              Contract
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="jobType"
                value="Internship"
                checked={formData.jobType === 'Internship'}
                onChange={handleInputChange}
                className="mr-2"
              />
              Internship
            </label>
          </div>
        </div>

        {/* Remote Options */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Remote</label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="remote"
                value="Remote"
                checked={formData.remote === 'Remote'}
                onChange={handleInputChange}
                className="mr-2"
              />
              Remote
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="remote"
                value="On-site"
                checked={formData.remote === 'On-site'}
                onChange={handleInputChange}
                className="mr-2"
              />
              On-site
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="remote"
                value="Hybrid"
                checked={formData.remote === 'Hybrid'}
                onChange={handleInputChange}
                className="mr-2"
              />
              Hybrid
            </label>
          </div>
        </div>

        {/* Compensation */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Compensation</label>
          <div className="flex space-x-2">
            <input
              type="text"
              name="compensation"
              value={formData.compensation}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
              placeholder="$"
            />
            <select
              name="compensationType"
              value={formData.compensationType}
              onChange={handleInputChange}
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
            >
              <option value="per year">per year</option>
              <option value="per month">per month</option>
              <option value="per week">per week</option>
            </select>
          </div>
        </div>

        {/* Skills Required */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Skills Required</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
            placeholder="Type to search"
          />
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
            placeholder="Type to search"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className={`${
              isFormValid()
                ? 'bg-purple-500 hover:bg-purple-600'
                : 'bg-gray-300 cursor-not-allowed'
            } text-white px-6 py-3 rounded-md focus:outline-none`}
            disabled={!isFormValid()}
          >
            Create Job Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnerPostAJob;
