import React, { useState } from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(""); // Clear input field after adding
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <div className='main'>
        <h1>My Todo List</h1>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}>
        <input 
          type='text' 
          placeholder='Enter Your Task'
          value={task}
          onChange={handleInputChange}
        />
        <button 
          style={{ margin: "10px", width: "70px", height: "50px", marginTop: "3px" }} 
          type="button" 
          className="btn btn-secondary" 
          onClick={handleAddTask}
        >
          ADD
        </button>
      </form>
      
      <ul className="list-group">
        {tasks.toReversed().map((t, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {t}
            <button style={{width:"30px"}}
              className="btn btn-danger btn-sm" 
              onClick={() => handleRemoveTask(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
