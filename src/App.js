import { StrictMode } from "react";
import {useState} from 'react';
import './styles.css';

import ToDo from './ToDo.js';
import NewForm from './NewForm';
import Header from './components/Header';
import Tasks from './components/Tasks';

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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
      <NewForm />
      <ToDo />
    </div>
  );
}

export default App;
