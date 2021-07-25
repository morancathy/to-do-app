import React from "react";
import toDoListData from "./components/toDoListData";

function ToDo(props) {
  return (
    <div className="toDoList">
      <h3>To Do Items:</h3>
        {toDoListData.map((thing, index) => (
          <ul key={index} className="toDoItem">
            <li>{thing.title}</li>
            <button>Completed</button>
          </ul>
        ))}
      </div>
  )
};

export default ToDo;
