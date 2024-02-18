import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import { Datalist } from "./components/Datalist";
import { Dataform } from "./components/Dataform";

function App() {
  const [dataList, setDataList] = useState([
    {
      id: 100001,
      SHIPIIFY: "17713",
      date: "21 jan 2021",
      status: "pending",
      customer: "Ahmed",
      email: "ahmed.123@gmail.com",
      country: "Australia",
      shipping: "Austrelian Post Api",
      source: "ShopifyAU",
      order_type: "customer",
    },
    {
      id: 100002,
      SHIPIIFY: "17714",
      date: "22 jan 2021",
      status: "pending",
      customer: "Sarah",
      email: "sarah@example.com",
      country: "Canada",
      shipping: "Canada Post",
      source: "ShopifyCA",
      order_type: "customer",
    },
    {
      id: 100003,
      SHIPIIFY: "17715",
      date: "23 jan 2021",
      status: "shipped",
      customer: "John",
      email: "john.doe@example.com",
      country: "United States",
      shipping: "USPS",
      source: "ShopifyUS",
      order_type: "customer",
    },
    {
      id: 100004,
      SHIPIIFY: "17716",
      date: "24 jan 2021",
      status: "pending",
      customer: "Emily",
      email: "emily.smith@example.com",
      country: "United Kingdom",
      shipping: "Royal Mail",
      source: "ShopifyUK",
      order_type: "customer",
    },
    {
      id: 100005,
      SHIPIIFY: "17717",
      date: "25 jan 2021",
      status: "shipped",
      customer: "Michael",
      email: "michael@hotmail.com",
      country: "Germany",
      shipping: "Deutsche Post",
      source: "ShopifyDE",
      order_type: "customer",
    },
    {
      id: 100006,
      SHIPIIFY: "17718",
      date: "26 jan 2021",
      status: "pending",
      customer: "Sophia",
      email: "sophia@gmail.com",
      country: "France",
      shipping: "La Poste",
      source: "ShopifyFR",
      order_type: "customer",
    },
    {
      id: 100007,
      SHIPIIFY: "17719",
      date: "27 jan 2021",
      status: "shipped",
      customer: "Daniel",
      email: "daniel@example.com",
      country: "Spain",
      shipping: "Correos",
      source: "ShopifyES",
      order_type: "customer",
    },
    {
      id: 100008,
      SHIPIIFY: "17720",
      date: "28 jan 2021",
      status: "pending",
      customer: "Emma",
      email: "emma.smith@example.com",
      country: "Italy",
      shipping: "Poste Italiane",
      source: "ShopifyIT",
      order_type: "customer",
    },
    {
      id: 100009,
      SHIPIIFY: "17721",
      date: "29 jan 2021",
      status: "shipped",
      customer: "Liam",
      email: "liam@example.com",
      country: "Japan",
      shipping: "Japan Post",
      source: "ShopifyJP",
      order_type: "customer",
    },
    {
      id: 100010,
      SHIPIIFY: "17722",
      date: "30 jan 2021",
      status: "pending",
      customer: "Olivia",
      email: "olivia@example.com",
      country: "Brazil",
      shipping: "Correios",
      source: "ShopifyBR",
      order_type: "customer",
    },
  ]);

  const [categories, setCategories] = useState("ALL");
  const [statusList, setStatusList] = useState("ALL");
  const [searchInput, setSearchInput] = useState("");

  const [create, setCreate] = useState(false);
  const [editor, setEditor] = useState(false);
  const [task, setTask] = useState({});

  return (
    <div className="App">
      <Header
        dataList={dataList}
        setDataList={setDataList}
        setCreate={setCreate}
      />

      <Filter
        setCategories={setCategories}
        setStatusList={setStatusList}
        setSearchInput={setSearchInput}
      />

      {!create && !editor && (
        <Datalist
          dataList={dataList}
          setDataList={setDataList}
          categories={categories}
          statusList={statusList}
          searchInput={searchInput}
          setEditor={setEditor}
          setTask={setTask}
        />
      )}

      {(create || editor) && (
        <Dataform
          dataList={dataList}
          setDataList={setDataList}
          setCreate={setCreate}
          editor={editor}
          setEditor={setEditor}
          task={task}
        />
      )}
    </div>
  );
}

export default App;
