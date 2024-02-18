import React from "react";
import "./filter.css";

export const Filter = ({ setStatusList, setCategories, setSearchInput }) => {
  const handleClear = () => {
    document.getElementById("search-input").value = "";
    document.getElementById("categories").value = "ALL";
    document.getElementById("statuslist").value = "ALL";
  };

  const handleSearch = () => {
    setSearchInput(document.getElementById("search-input").value);
    setCategories(document.getElementById("categories").value);
    setStatusList(document.getElementById("statuslist").value);
  };

  return (
    <>
      <form className="filterBox">
        <div className="name">
          <label htmlFor="search-input">What are you looking for?</label>
          <div>
            <input
              type="text"
              name="searchinput"
              id="search-input"
              placeholder="&#x1F50E;Search for category, name,company, etc"
            />
          </div>
        </div>
        <div className="category">
          <label htmlFor="categories">Category</label>
          <select id="categories">
            <option value="ALL">--All--</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
        </div>
        <div className="status">
          <label htmlFor="statuslist">Status</label>
            <select id="statuslist">
              <option value="ALL">--All--</option>
              <option value="pending">Pending</option>
              <option value="shipped">Shipped</option>
            </select>
        </div>
        <div className="search">
          <button onClick={handleClear} type="button" className="clearButton">
            &#9750;
          </button>
          <button onClick={handleSearch} type="button" className="searchButton">
            Search
          </button>
        </div>
      </form>
    </>
  );
};
