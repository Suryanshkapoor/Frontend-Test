import React from "react";
import "./dataform.css";

export const Dataform = ({
  setCreate,
  dataList,
  setDataList,
  editor,
  setEditor,
  task,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const now = new Date();
    const curtime = now.getTime();
    const options = { day: "numeric", month: "short", year: "numeric" };

    const newData = {
      id: `${String(curtime).slice(-6)}`,
      SHIPIIFY: "17713",
      date: `${now.toLocaleDateString("en-GB", options)}`,
      status: document.getElementById("status").value,
      customer: document.getElementById("name").value,
      email: document.getElementById("email").value,
      country: document.getElementById("country").value,
      shipping: document.getElementById("shipping").value,
      source: document.getElementById("source").value,
      order_type: document.getElementById("order-type").value,
    };

    setDataList([newData, ...dataList]);
    setCreate(false);
    setEditor(false);
  };

  return (
    <div className="dataForm">
      <form onSubmit={handleSubmit}>
        <div className="form-entries">
          <label htmlFor="name" className="form-label ">
            Customer Name
          </label>
          <input
            type="text"
            id="name"
            defaultValue={editor === true ? task.customer : ""}
            className="input-box"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="form-entries">
          <label htmlFor="email" className="form-label ">
            Email
          </label>
          <input
            type="email"
            id="email"
            defaultValue={editor === true ? task.email : ""}
            className="input-box"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="form-entries">
          <label htmlFor="status" className="form-label ">
            Status
          </label>
          <input
            type="text"
            id="status"
            defaultValue={editor === true ? task.status : ""}
            className="input-box"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="form-entries">
          <label htmlFor="country" className="form-label ">
            Country
          </label>
          <input
            type="text"
            id="country"
            defaultValue={editor === true ? task.country : ""}
            className="input-box"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="form-entries">
          <label htmlFor="shipping" className="form-label ">
            Shipping
          </label>
          <input
            type="text"
            id="shipping"
            defaultValue={editor === true ? task.shipping : ""}
            className="input-box"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="form-entries">
          <label htmlFor="source" className="form-label ">
            Source
          </label>
          <input
            type="text"
            id="source"
            defaultValue={editor === true ? task.source : ""}
            className="input-box"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="form-entries">
          <label htmlFor="order-type" className="form-label ">
            Order Type
          </label>
          <input
            type="text"
            id="order-type"
            defaultValue={editor === true ? task.order_type : ""}
            className="input-box"
            placeholder="name@flowbite.com"
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
