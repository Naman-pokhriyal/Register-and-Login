import React, { useState, useEffect } from "react";
import Course from "./course";
import "../style/homet.css";
import Axios from "axios";

export default function Homet() {
  const [list, setList] = useState([]);
  const [listItem, setListItem] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/homet").then((response) => {
      const lists = response.data;
      var xl = [];
      lists.map((item) => {
        xl = [...xl, Object.values(item)];
      });
      setList(xl);
    });
  }, [list]);

  const handleAdd = () => {
    if (listItem === "") {
      alert("Add Courese Name");
      return;
    }
    Axios.post("http://localhost:3001/homet", {
      name: listItem,
    });
    setListItem("");
  };

  const handleDelete = (name) => {
    alert("Ok");
    Axios.post("http://localhost:3001/hometx", {
      name: name,
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <h2>Teacher's Screen</h2>
      {list.map((item, index) => {
        return (
          <div className="course-item" key={index}>
            <Course name={item[0]} />
            {item[1] ? <button>View quiz</button> : <button>Add quiz</button>}
            <button onClick={handleDelete(item[0])}>X</button>
          </div>
        );
      })}
      <input
        type="text"
        value={listItem}
        onChange={(e) => {
          setListItem(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
