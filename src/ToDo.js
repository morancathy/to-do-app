import React from "react";
import toDoListData from "./components/toDoListData";

function ToDo(props) {
  return (

    <section className="toDoList">
    <h3>New Item</h3>
    <form>
      <input type="text"></input>
      <input type="submit" value="submit"></input>
    </form>
    <h3>To Do Items:</h3>
      {toDoListData.map((thing, index) => (
        <div key={index} className="toDoItem">
          <li>{thing.title}</li>
          <button>Completed</button>
        </div>
      ))}
    </section>
  )
};

export default ToDo;
