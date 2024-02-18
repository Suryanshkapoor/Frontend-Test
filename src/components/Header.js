import React from "react";
import "./header.css";

// Header component for displaying navigation and create button
export const Header = ({ setCreate }) => {
  return (
    <header>
      {/* Navigation bar */}
      <nav className="navBar1">
        <div className="navContent">
          {/* Text indicating the section, e.g., "Orders" */}
          <div className="dashtext">
            <span>Orders</span>
          </div>
          {/* Button to create new order */}
          <button
            onClick={() => setCreate(true)} // Event handler to set create flag to true
            type="button"
            className="createButton" // Styling class for the button
          >
            CREATE NEW
          </button>
        </div>
      </nav>
    </header>
  );
};
