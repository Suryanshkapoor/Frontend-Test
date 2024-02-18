import React from "react";
import "./header.css";

export const Header = ({ setCreate }) => {
  return (
    <header>
      <nav className="navBar1">
        <div className="navContent">
          <div className="dashtext">
            <span>Orders</span>
          </div>
          <button
            onClick={() => setCreate(true)}
            type="button"
            className="createButton"
          >
            CREATE NEW
          </button>
        </div>
      </nav>
    </header>
  );
};
