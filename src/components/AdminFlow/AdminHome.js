import React, { useState } from 'react';
import Homeimage from "../../assets/Home-Image.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faDollarSign, faHeart } from '@fortawesome/free-solid-svg-icons';
import AdminApplyCards from './AdminApplyCards'; // Ensure this path is correct
import { useAdminContext } from './AdminContextApi/AdminContext'; // Ensure this path is correct

const AdminHome = () => {
  const context = useAdminContext();
  const [selectedJob, setSelectedJob] = useState(null);

  if (!context) {
    return <div>Error: Context not available</div>;
  }

  const { savedJobs = [], saveJob, removeJob } = context;

  const jobData = [
    {
      jobTitle: 'Data Science Intern',
      company: 'Harber Inc',
      location: '439 Metz Field, Canada',
      type: 'Remote',
      duration: 'Internship • 3 months',
      salary: '30k per month',
      field: 'Computer science engineering',
    },
    {
      jobTitle: 'Aero Science Intern',
      company: 'Harber Inc',
      location: '439 Metz Field, Canada',
      type: 'Remote',
      duration: 'Internship • 3 months',
      salary: '30k per month',
      field: 'Computer science engineering',
    },
    {
      jobTitle: 'Data Science Intern',
      company: 'Harber Inc',
      location: '439 Metz Field, Canada',
      type: 'Remote',
      duration: 'Internship • 3 months',
      salary: '30k per month',
      field: 'Computer science engineering',
    },
    {
      jobTitle: 'Software Engineer Intern',
      company: 'Acme Corp',
      location: '123 Tech Lane, USA',
      type: 'Remote',
      duration: 'Internship • 6 months',
      salary: '35k per month',
      field: 'Software Engineering',
    },
    {
      jobTitle: 'Web Developer',
      company: 'Techie Ltd',
      location: '789 Code Street, India',
      type: 'Remote',
      duration: 'Full-time • 12 months',
      salary: '45k per month',
      field: 'Web Development',
    },
    {
      jobTitle: 'UX/UI Designer',
      company: 'Creative Co',
      location: '456 Design Blvd, UK',
      type: 'Remote',
      duration: 'Full-time • 24 months',
      salary: '50k per month',
      field: 'Design',
    },
    
    // More job data...
  ];

  const handleViewDetails = (job) => {
    setSelectedJob(job);
  };

  const handleBack = () => {
    setSelectedJob(null);
  };

  const toggleSaveJob = (job) => {
    if (savedJobs.some(savedJob => savedJob.jobTitle === job.jobTitle)) {
      removeJob(job);
    } else {
      saveJob({ ...job, isApplied: false });
    }
  };

  return (
    <div className="font-poppins">
      {selectedJob ? (
        <div>
          <AdminApplyCards job={selectedJob} onBack={handleBack} />
        </div>
      ) : (
        <>
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
            <img src={Homeimage} alt="Finding Your Dream Job" className="w-200px h-100px " />
          </div>

          <section className="py-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Find your next role</h2>
            <p className="text-gray-600 mb-6">Recommendations based on your profile</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
              {jobData.map((job, index) => (
                <div key={index} className="relative border rounded-lg p-4 sm:p-6 shadow-sm bg-white hover:shadow-md transition-shadow duration-200">
                  <div className="absolute top-2 right-2">
                    <button
                      onClick={() => toggleSaveJob(job)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${savedJobs.some(savedJob => savedJob.jobTitle === job.jobTitle) ? 'text-red-500' : 'text-gray-500'}`}
                      />
                    </button>
                  </div>
                  <div className="flex items-center mb-4">
                    <img src="/path-to-company-logo.png" alt="Company Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">{job.jobTitle}</h3>
                      <p className="text-gray-500">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <FontAwesomeIcon icon={faClock} className="mr-2" />
                    <span>{job.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{job.field}</span>
                    <button
                      className="text-purple-600 hover:underline"
                      onClick={() => handleViewDetails(job)}
                    >
                      View details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default AdminHome;
