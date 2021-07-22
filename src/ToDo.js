import React from "react";
import toDoListData from "./components/toDoListData";

function ToDo(props) {
  return (

    <section>
    <div className="newItem">
      <h4>New Item</h4>
      <form>
        <input type="text"></input>
      </form>
    </div>
    <div className="toDoList">
      <h3>To Do Items:</h3>
        {toDoListData.map((thing, index) => (
          <ul key={index} className="toDoItem">
            <li>{thing.title}</li>
            <button>Completed</button>
          </ul>
        ))}
      </div>
    </section>
  )
};

export default ToDo;
