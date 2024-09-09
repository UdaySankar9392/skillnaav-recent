// // Card.js
// import React, { useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMapMarkerAlt,
//   faClock,
//   faDollarSign,
// } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { counterContext } from "../../context/context";

// const Card = ({
//   jobTitle,
//   company,
//   location,
//   remote,
//   internship,
//   duration,
//   salary,
//   tags,
//   onCardClick,
// }) => {
//   const handleClick = () => {
//     onCardClick({
//       jobTitle,
//       company,
//       location,
//       remote,
//       internship,
//       duration,
//       salary,
//       tags,
//     });
//   };
//   const counter = useContext(counterContext);
//   return (
//     <div
//       className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
//       onClick={handleClick}
//     >
//       <div className="rounded overflow-hidden shadow-lg p-6 font-poppins">
//         <div className="flex items-center mb-4">
//           <img
//             className="w-12 h-12 rounded-full mr-4"
//             src="https://via.placeholder.com/150"
//             alt="Company Logo"
//           />
         
//           <div className="text-sm">
//             <p className="text-gray-900 leading-none font-semibold">
//               {jobTitle}
//             </p>
//             <p className="text-gray-600">{company}</p>
//             <p className="text-gray-600 text-xs">
//               {remote ? "Remote" : location} • {duration}
//             </p>
//           </div>
//           <FontAwesomeIcon icon={faHeart} className="ml-auto text-gray-400" />
//         </div>
//         <div className="mb-4">
//           <p className="text-gray-600">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />{" "}
//             {location}
//           </p>
//           <p className="text-gray-600">
//             <FontAwesomeIcon icon={faClock} className="mr-2" /> {internship}
//           </p>
//           <p className="text-gray-600">
//             <FontAwesomeIcon icon={faDollarSign} className="mr-2" /> {salary}
//           </p>
//         </div>
//         <div className="flex flex-wrap">
//           {tags.map((tag, index) => (
//             <span
//               key={index}
//               className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//         <button className="text-purple-500 text-sm font-semibold">
//           View details
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;
