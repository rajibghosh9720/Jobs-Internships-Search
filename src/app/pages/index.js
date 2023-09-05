"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../components/Filter";
import JobList from "../components/JobList";

const Home = () => {
  const [jobTypes, setJobTypes] = useState([]);
  const [jobCategories, setJobCategories] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://entryleveljobs.me/api/jobs", {
        params: {
          page: 1,
          size: 10,
        },
      })
      .then((response) => setJobs(response.data.data)) // Extract the 'data' property
      .catch((error) =>
        console.error("Error fetching all job details:", error)
      );

    axios
      .get("https://entryleveljobs.me/api/jobs/type")
      .then((response) => setJobTypes(response.data.data))
      .catch((error) => console.error("Error fetching job types:", error));

    axios
      .get("https://entryleveljobs.me/api/jobs/category")
      .then((response) => setJobCategories(response.data.data))
      .catch((error) => console.error("Error fetching job categories:", error));
  }, []);

  const handleFilterChange = (selectedType, selectedCategory) => {
    axios
      .get("https://entryleveljobs.me/api/jobs", {
        params: {
          page: 1,
          size: 10,
          type: selectedType,
          category: selectedCategory,
        },
      })
      .then((response) => setJobs(response.data.data))
      .catch((error) => console.error("Error applying filter:", error));
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <Filter
          jobTypes={jobTypes}
          jobCategories={jobCategories}
          onFilterChange={handleFilterChange}
        />
      </div>

      <div className="w-3/4 p-4">
        <JobList jobs={jobs} />
      </div>
    </div>
  );
};

export default Home;

