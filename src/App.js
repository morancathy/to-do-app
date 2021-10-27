import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './styles.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';

function App() {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks,setTasks] = useState([]);
//   {
//     id: 1,
//     text: "Go diving",
//     day: 'Feb 1st at 1:30pm',
//     reminder: false,
//     completed: false
//   },
//   {
//     id: 2,
//     text: "Watch White Sox win",
//     day: 'Feb 2nd at 2:30pm',
//     reminder: true,
//     completed: false
//   },
//   {
//     id: 3,
//     text: "Go for a run",
//     day: 'Feb 3rd at 3:30pm',
//     reminder: true,
//     completed: false
//   }
// ])
/*################     Everything commented is BEFORE the extra work/"fake json server backend" on Brad Traversy tutorial,
localhost:5000, need to 'npm run server'  as well as 'npm start'                    ############################### */

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])

// Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
// Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }


// Add task
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })

  const data = await res.json();

  setTasks([...tasks, data])
  // const id = Math.floor(Math.random() * 1000) + 1
  // const newTask = {id, ...task}
  // setTasks([...tasks, newTask])
}

// delete task
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })
  setTasks(tasks.filter((task) => task.id !== id))
}

// toggle reminder
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  // const taskToToggle = id
  const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updatedTask)
  })

  const data = await res.json()

  setTasks(
    tasks.map((task) =>
    task.id === id
    ? {...task, reminder: data.reminder}
    : task)
  )
  // setTasks(
  //   tasks.map((task) =>
  //   task.id === id
  //   ? {...task, reminder: !task.reminder}
  //   : task)
  // )
}

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask (!showAddTask)}
                showAdd={showAddTask}/>
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0
              ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
              : 'No To Do Items'
            }
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
