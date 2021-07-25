import { StrictMode } from "react";
import './styles.css';

import ToDo from './ToDo.js';
import NewForm from './NewForm';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <NewForm />
      <ToDo />
    </div>
  );
}

export default App;
