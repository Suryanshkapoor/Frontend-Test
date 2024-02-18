import React from "react";
import "./filter.css";

// Filter component for managing search input, category selection, and status selection
export const Filter = ({ setStatusList, setCategories, setSearchInput }) => {
  // Function to clear all filter inputs
  const handleClear = () => {
    // Clear search input
    document.getElementById("search-input").value = "";
    // Reset category selection to default value
    document.getElementById("categories").value = "ALL";
    // Reset status selection to default value
    document.getElementById("statuslist").value = "ALL";
  };

  // Function to handle search action
  const handleSearch = () => {
    // Set search input value to state
    setSearchInput(document.getElementById("search-input").value);
    // Set selected category to state
    setCategories(document.getElementById("categories").value);
    // Set selected status to state
    setStatusList(document.getElementById("statuslist").value);
  };

  return (
    <>
      {/* Form for filter options */}
      <form className="filterBox">
        {/* Search input */}
        <div className="name">
          <label htmlFor="search-input">What are you looking for?</label>
          <div>
            <input
              type="text"
              name="searchinput"
              id="search-input"
              placeholder="&#x1F50E;Search for category, name, company, etc"
            />
          </div>
        </div>
        {/* Category selection */}
        <div className="category">
          <label htmlFor="categories">Category</label>
          <select id="categories">
            <option value="ALL">--All--</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
        </div>
        {/* Status selection */}
        <div className="status">
          <label htmlFor="statuslist">Status</label>
          <select id="statuslist">
            <option value="ALL">--All--</option>
            <option value="pending">Pending</option>
            <option value="shipped">Shipped</option>
          </select>
        </div>
        {/* Buttons for clearing filters and initiating search */}
        <div className="search">
          {/* Button to clear filters */}
          <button onClick={handleClear} type="button" className="clearButton">
            &#9750;
          </button>
          {/* Button to initiate search */}
          <button onClick={handleSearch} type="button" className="searchButton">
            Search
          </button>
        </div>
      </form>
    </>
  );
};
