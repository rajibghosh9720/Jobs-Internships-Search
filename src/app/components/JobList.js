import React, { useState } from "react";

const JobList = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  const toggleDescription = (jobId) => {
    if (selectedJob === jobId) {
      setSelectedJob(null);
    } else {
      setSelectedJob(jobId);
    }
  };

  if (!Array.isArray(jobs) || jobs.length === 0) {
    return (
      <div className="bg-gray-100 p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">All Jobs</h2>
        <p className="text-gray-700">Not Job Found</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded shadow-lg">
    <h2 className="text-2xl font-bold mb-4">All Jobs</h2>
    <ul>
      {jobs.map((job) => (
        <li
          key={job.jobId}
          className="mb-4 p-4 border border-gray-300 rounded shadow-md"
        >
          <h3 className="text-lg font-semibold mb-2">{job.position}</h3>
          <p className="text-gray-700 mb-2">Location: {job.location}</p>
          <p className="text-gray-700 mb-2">
            Category: {job.category ? job.category.name : "N/A"}
          </p>
          <p className="text-gray-700 mb-2">Type: {job.type.name}</p>
          <p className="text-gray-700 mb-2">
            Company name: {job.companyName}
          </p>

          <div className="mb-2"> {/* Add spacing here */}
            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-300"
            >
              Apply
            </a>
          </div>

          <div className="mb-2"> {/* Add spacing here */}
            <button
              onClick={() => toggleDescription(job.jobId)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
            >
              {selectedJob === job.jobId ? "Description Less" : "Description More"}
            </button>
          </div>

          {selectedJob === job.jobId && (
            <div className="mt-2 text-gray-700">
              <p>{job.description}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>
);
};


export default JobList;

