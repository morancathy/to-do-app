import { StrictMode } from "react";
import './styles.css';

import ToDo from './ToDo.js';

function App() {
  return (
    <div className="App">
      <h1>My To Do List:</h1>
      <ToDo />
    </div>
  );
}

export default App;
