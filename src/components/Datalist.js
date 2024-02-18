import React, { useState } from "react";
import "./datalist.css";

// Datalist component for displaying filtered data and managing selection and actions
export const Datalist = ({
  dataList,
  setDataList,
  categories,
  statusList,
  searchInput,
  setTask,
  setEditor,
}) => {
  // Filter dataList based on categories, statusList, and searchInput
  const filteredData = dataList.filter((item) => {
    // Filter by category
    if (categories !== "ALL") {
      if (item.country !== categories) {
        return false;
      }
    }
    // Filter by status
    if (statusList !== "ALL") {
      if (item.status !== statusList) {
        return false;
      }
    }
    // Filter by searchInput
    if (searchInput !== "") {
      if (
        !(
          item.id.toString().includes(searchInput) ||
          item.SHIPIIFY.toString().includes(searchInput) ||
          item.date.includes(searchInput) ||
          item.status.includes(searchInput) ||
          item.customer.includes(searchInput) ||
          item.email.includes(searchInput) ||
          item.country.includes(searchInput) ||
          item.shipping.includes(searchInput) ||
          item.source.includes(searchInput) ||
          item.order_type.includes(searchInput)
        )
      ) {
        return false;
      }
    }
    return true;
  });

  const [selectedRows, setSelectedRows] = useState([]); // State for selected rows

  // Function to handle checkbox selection
  const handleCheckboxChange = (itemId) => {
    const selectedIndex = selectedRows.indexOf(itemId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, itemId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }

    setSelectedRows(newSelected);
  };

  // Function to check if a row is selected
  const isSelected = (itemId) => selectedRows.indexOf(itemId) !== -1;

  // Function to handle select all checkbox
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = dataList.map((item) => item.id);
      setSelectedRows(newSelecteds);
      return;
    }
    setSelectedRows([]);
  };

  // Function to handle editing a task
  const handleEdit = (item) => {
    setTask(item); // Set the task to edit
    setDataList(dataList.filter((data) => data !== item)); // Remove the task from the list
    setEditor(true); // Set editor flag to true
  };

  // Function to handle marking items as shipped
  const handleClick = () => {
    filteredData.map((item) =>
      selectedRows.indexOf(item.id) !== -1
        ? (item.status = "shipped")
        : item.status
    );
    setSelectedRows([]); // Clear selected rows
    document.getElementById('checkbox-all-search').checked=false; // Uncheck select all checkbox
  };

  return (
    <div>
      <div className="data-list">
        <div className="dataShow">
          <div>
            <h2>Product Summary</h2>
          </div>
          <div>
            <form>
              <label htmlFor="columns" className="colLable">
                Show
              </label>
              <select id="columns" className="colSelect">
                <option >ALL COLUMN</option>
              </select>
              <button
                onClick={handleClick}
                type="button"
                className="markShipped"
              >
                Mark Shipped
              </button>
            </form>
          </div>
        </div>
        <table>
          <thead className="tableHead">
            <tr>
              <th scope="col">
                <div className="checkBoxContainer">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="checkBox"
                    onChange={handleSelectAllClick}
                  />
                </div>
              </th>
              {/* Table headings */}
              <th scope="col" className="headComponents">
                id
              </th>
              <th scope="col" className="headComponents">
                Shipiify#
              </th>
              <th scope="col" className="headComponents">
                date
              </th>
              <th scope="col" className="headComponents">
                status
              </th>
              <th scope="col" className="headComponents">
                Customer
              </th>
              <th scope="col" className="headComponents">
                email
              </th>
              <th scope="col" className="headComponents">
                country
              </th>
              <th scope="col" className="headComponents">
                shipping
              </th>
              <th scope="col" className="headComponents">
                source
              </th>
              <th scope="col" className="headComponents">
                order type
              </th>
              <th scope="col" className="headComponents"></th>
            </tr>
          </thead>
          <tbody>
            {/* Display filtered data */}
            {filteredData.map((item) => {
              const isItemSelected = isSelected(item.id);
              return (
                <tr key={item.id} className={isItemSelected ? "selected" : ""}>
                  <td>
                    {/* Checkbox for row selection */}
                    <div className="checkBoxContainer">
                      <input
                        id={item.id}
                        type="checkbox"
                        className="checkBox"
                        checked={isItemSelected}
                        onChange={() => handleCheckboxChange(item.id)}
                      />
                    </div>
                  </td>
                  {/* Table data cells */}
                  <th scope="row" className="bodyheads">
                    {item.id}
                  </th>
                  <td className="bodyComponents">{item.SHIPIIFY}</td>
                  <td className="bodyComponents">{item.date}</td>
                  <td className="bodyComponents">{item.status}</td>
                  <td className="bodyComponents">{item.customer}</td>
                  <td className="bodyComponents">{item.email}</td>
                  <td className="bodyComponents">{item.country}</td>
                  <td className="bodyComponents">{item.shipping}</td>
                  <td className="bodyComponents">{item.source}</td>
                  <td className="bodyComponents">{item.order_type}</td>
                  <td>
                    {/* Edit button */}
                    <span onClick={() => handleEdit(item)} className="editSign">
                      &#9998;
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
