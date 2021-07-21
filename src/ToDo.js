import React from "react";
import toDoListData from "./components/toDoListData";

function ToDo(props) {
  return (
    <section>
      <form>
        <input type="text"></input>
        <input type="submit" value="submit"></input>
      </form>
      <ul>
        <li>
          to do.
        </li>
      </ul>
    </section>
  )
};

export default ToDo;
