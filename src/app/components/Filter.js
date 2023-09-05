import { useState } from "react";

const Filter = ({ jobTypes, jobCategories, onFilterChange }) => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleFilter = () => {
    console.log("Selected Type:", selectedType);
    console.log("Selected Category:", selectedCategory);
    onFilterChange(selectedType, selectedCategory);
  };

  return (
    <div className="bg-gray-100 p-6 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Select Filter</h2>
      <div className="mb-4">
        <label
          htmlFor="jobType"
          className="block text-gray-700 text-sm font-semibold mb-1"
        >
          Job Type:
        </label>
        <select
          id="jobType"
          value={selectedType}
          onChange={handleTypeChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
        >
          <option value="">Select Type</option>
          {jobTypes.map((type) => (
            <option key={type.typeId} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="jobCategory"
          className="block text-gray-700 text-sm font-semibold mb-1"
        >
          Job Category:
        </label>
        <select
          id="jobCategory"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
        >
          <option value="">Select Category</option>
          {jobCategories.map((category) => (
            <option key={category.categoryId} value={category.category}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleFilter}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default Filter;
