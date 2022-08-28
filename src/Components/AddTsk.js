import React, { useState } from "react";
import "./Addtsk.css";
// import "../App.css";

const AddTsk = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);
  const [changeClass, setChangeClass] = useState(false);
  const [changeDayClass, setChangeDayClass] = useState(false);
  const [ChangeTime, setChangeTime] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      setChangeClass(true);
      return;
    }

    if (!day) {
      setChangeDayClass(true);
      return;
    }

    if (!time) {
      setChangeTime(true);
      return;
    }

    onAdd({ text, day, reminder, time });

    setDay("");
    setText("");
    setReminder(false);
    setTime("");
  };

  const inputTaskHandler = (e) => {
    setText(e.target.value);
    if (text.length >= 0) {
      setChangeClass(false);
      return;
    }
  };

  const inputDayHandler = (e) => {
    setDay(e.target.value);
    if (day.length >= 0) {
      setChangeDayClass(false);
      return;
    }
  };

  const inputTimeHandler = (e) => {
    setTime(e.target.value);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className={`form-contrl ${changeClass && "change"}`}>
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={inputTaskHandler}
        />
      </div>

      <div className={`form-contrl ${changeDayClass && "change"}`}>
        <label className="spread">
          <span>Date</span> <span>Time</span>
        </label>
        <div className="wrap-it">
          <input type="date" value={day} onChange={inputDayHandler} />
          <input
            type="time"
            value={time}
            onChange={inputTimeHandler}
            className="okok"
          />
        </div>
      </div>

      <div className="form-contrl input-box">
        <label> Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <button type="submit" className="button-submit">
        Save Task
      </button>
    </form>
  );
};

export default AddTsk;
