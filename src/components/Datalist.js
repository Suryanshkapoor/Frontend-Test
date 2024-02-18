import React, { useState } from "react";
import "./datalist.css";

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

  const [selectedRows, setSelectedRows] = useState([]);

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

  const isSelected = (itemId) => selectedRows.indexOf(itemId) !== -1;

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = dataList.map((item) => item.id);
      setSelectedRows(newSelecteds);
      return;
    }
    setSelectedRows([]);
  };

  const handleEdit = (item) => {
    setTask(item);
    setDataList(dataList.filter((data) => data !== item));
    setEditor(true);
  };

  const handleClick = () => {
    filteredData.map((item) =>
      selectedRows.indexOf(item.id) !== -1
        ? (item.status = "shipped")
        : item.status
    );
    setSelectedRows([]);
    document.getElementById('checkbox-all-search').checked=false;
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
              <label htmlFor="countries" className="colLable">
                Show
              </label>
              <select id="countries" className="colSelect">
                <option >ALL COLUMN</option>
              </select>
              <button
                onClick={handleClick}
                type="button"
                className="dispatchItems"
              >
                Dispatch Selected
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
            {filteredData.map((item) => {
              const isItemSelected = isSelected(item.id);
              return (
                <tr key={item.id} className={isItemSelected ? "selected" : ""}>
                  <td>
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
