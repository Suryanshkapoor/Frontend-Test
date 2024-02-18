import React from "react";
import "./dataform.css"; 

// Dataform component for creating and editing data entries
export const Dataform = ({
  setCreate, // Function to set Create 
  dataList, // List of data
  setDataList, // Function to update data list
  editor, // Flag indicating editing mode
  setEditor, // Function to set editor
  task, // Data entry being edited
}) => {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get current date and time
    const now = new Date();
    const curtime = now.getTime();

    // Options for formatting date
    const options = { day: "numeric", month: "short", year: "numeric" };

    // Create new data object with form input values
    const newData = {
      id: `${String(curtime).slice(-6)}`, // Generate unique ID based on current time
      SHIPIIFY: "17713", // Default value for SHIPIIFY
      date: `${now.toLocaleDateString("en-GB", options)}`, // Format date
      status: document.getElementById("status").value, // Get status input value
      customer: document.getElementById("name").value, // Get customer input value
      email: document.getElementById("email").value, // Get email input value
      country: document.getElementById("country").value, // Get country input value
      shipping: document.getElementById("shipping").value, // Get shipping input value
      source: document.getElementById("source").value, // Get source input value
      order_type: document.getElementById("order-type").value, // Get order type input value
    };

    // Update data list with new data entry at the beginning
    setDataList([newData, ...dataList]);

    // Set creation mode and editing mode to false
    setCreate(false);
    setEditor(false);
  };
  return (
    <div className="dataForm">
      {/* Form for submitting data */}
      <form onSubmit={handleSubmit}>
        {/* Form entries */}
        <div className="form-entries">
          <label htmlFor="name" className="form-label ">
            Customer Name
          </label>
          {/* Input field for Customer Name */}
          <input
            type="text"
            id="name"
            defaultValue={editor === true ? task.customer : ""}
            className="input-box"
            placeholder="Customer Name"
            required
          />
        </div>
        <div className="form-entries">
          <label htmlFor="email" className="form-label ">
            Email
          </label>
          {/* Input field for Email */}
          <input
            type="email"
            id="email"
            defaultValue={editor === true ? task.email : ""}
            className="input-box"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-entries">
          <label htmlFor="status" className="form-label ">
            Status
          </label>
          {/* Input field for Status */}
          <input
            type="text"
            id="status"
            defaultValue={editor === true ? task.status : ""}
            className="input-box"
            placeholder="Status"
            required
          />
        </div>
        <div className="form-entries">
          <label htmlFor="country" className="form-label ">
            Country
          </label>
          {/* Input field for Country */}
          <input
            type="text"
            id="country"
            defaultValue={editor === true ? task.country : ""}
            className="input-box"
            placeholder="Country"
            required
          />
        </div>
        <div className="form-entries">
          <label htmlFor="shipping" className="form-label ">
            Shipping
          </label>
          {/* Input field for Shipping */}
          <input
            type="text"
            id="shipping"
            defaultValue={editor === true ? task.shipping : ""}
            className="input-box"
            placeholder="Shipping"
            required
          />
        </div>
        <div className="form-entries">
          <label htmlFor="source" className="form-label ">
            Source
          </label>
          {/* Input field for Source */}
          <input
            type="text"
            id="source"
            defaultValue={editor === true ? task.source : ""}
            className="input-box"
            placeholder="Source"
            required
          />
        </div>
        <div className="form-entries">
          <label htmlFor="order-type" className="form-label ">
            Order Type
          </label>
          {/* Input field for Order Type */}
          <input
            type="text"
            id="order-type"
            defaultValue={editor === true ? task.order_type : ""}
            className="input-box"
            placeholder="Order Type"
            required
          />
        </div>
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </div>
  );
};
