import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faDollarSign, faBookmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const JobPosting = ({onCardClick}) => {
  const[goTojobcards,setGoTojobcards]=useState(0);
  const handleBackClick = () => {
setGoTojobcards(!goTojobcards)
    const jobCardList = document.getElementById('');
    if (jobCardList) {
      jobCardList.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="p-8 bg-white font-poppins">
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={handleBackClick}
          className="flex items-center text-gray-600 hover:text-purple-600 font-medium"
          aria-label="Back to job listings"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back
        </button>
      </div>

      {/* Job Card Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              <span>H</span>
            </div>
            <div className="ml-4">
              <h1 className="text-xl font-semibold">Data Science Intern</h1>
              <p className="text-gray-600">Harber Inc</p>
              <p className="text-gray-400 text-sm">5d ago</p>
            </div>
          </div>
          <FontAwesomeIcon icon={faBookmark} className="text-gray-400 cursor-pointer hover:text-purple-600" />
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex items-center text-gray-600">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 mr-2" />
            <span>439 Metz Field, Canada • Remote</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FontAwesomeIcon icon={faClock} className="w-5 h-5 mr-2" />
            <span>Internship • 3 months</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FontAwesomeIcon icon={faDollarSign} className="w-5 h-5 mr-2" />
            <span>30k per month</span>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* About the Job Section */}
        <div>
          <h2 className="text-lg font-semibold">About the job</h2>
          <p className="text-gray-600 mt-2">
            Accusamus similique repudiandae exercitationem error dolore autem ea laborum. Voluptates iste id velit consectetur et a. Rerum ipsum quae. Voluptate odit et quo hic rem tempora. Est et consequatur deserunt molestias a at quasi dicta. Et sunt maxime at totam ratione.
          </p>

          <div className="mt-6">
            <h2 className="text-lg font-semibold">Skills required</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Computer science engineering</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Data science</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Data structures and algorithms</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Backend</span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons below the card */}
      <div className="mt-6 flex justify-center gap-4">
        <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium">
          Apply now
        </button>
        <button className="px-6 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium border border-gray-300">
          Save
        </button>
      </div>
    </div>
  );
};

export default JobPosting;
