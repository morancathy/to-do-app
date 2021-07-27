import { StrictMode } from "react";
import {useState} from 'react';
import './styles.css';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks,setTasks] = useState([
    {
      id: 1,
      text: "Go diving",
      day: 'Feb 1st at 1:30pm',
      reminder: true,
      completed: false
    },
    {
      id: 2,
      text: "Watch White Sox win",
      day: 'Feb 2nd at 2:30pm',
      reminder: true,
      completed: false
    },
    {
      id: 3,
      text: "Go for a run",
      day: 'Feb 3rd at 3:30pm',
      reminder: true,
      completed: false
    }
  ]
)

// Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//delete task         onDelete is a prop of Tasks, so need to pass it in
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) =>
    task.id === id
    ? {...task, reminder: !task.reminder}
    : task))
}
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : 'No To Do Items'
      }
    </div>
  );
}

export default App;
