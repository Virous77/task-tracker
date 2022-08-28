import "./App.css";
import Task from "./Components/Task";
import Button from "./Components/Button";
import React, { useState } from "react";
import AddTsk from "./Components/AddTsk";
import { FaTimes } from "react-icons/fa";
import Footer from "./Components/Footer";

function App() {
  const [showAddTask, setAddShowTask] = useState(false);
  const onClick = () => {
    setAddShowTask(!showAddTask);
  };

  const [tasks, setTasks] = useState([]);

  //AddTask
  const addTaskHandler = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  ///Delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((taskg) => taskg.id !== id));
  };

  //Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="App">
      <div className="head">
        <h1>Task Tracker</h1>
        <Button
          title={showAddTask ? <FaTimes /> : "Add Task"}
          onClick={onClick}
          showAdd={showAddTask}
        />
      </div>
      {showAddTask && <AddTsk onAdd={addTaskHandler} />}
      {tasks.length > 0 ? (
        <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p className="empty-message">No Tasks Found!!!</p>
      )}
      <Footer />
    </div>
  );
}

export default App;
