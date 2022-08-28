import React from "react";
import { FaTimes } from "react-icons/fa";
import "../App.css";

const TTasks = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`ttasks `} onDoubleClick={() => onToggle(task.id)}>
      <div className="wrap">
        <div className={` ${task.reminder ? "reminders" : ""}`}></div>
        <h3>
          {task.text}
          <FaTimes
            className="cancel-button"
            style={{
              color: "red",
              cursor: "pointer",
            }}
            onClick={() => onDelete(task.id)}
          />
        </h3>
      </div>
      <div className="data-time">
        <p className="task-day">{task.day}</p>
        <p className="dash"></p>
        <p className="task-days">{task.time}</p>
      </div>
    </div>
  );
};

export default TTasks;
