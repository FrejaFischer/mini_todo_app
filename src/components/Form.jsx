import React, { useState } from "react";
import style from "./Form.module.css";

export default function Form({ addItem }) {
  const [taskValue, setTaskValue] = useState(""); //A state to control the input fields value

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("addTask"));

    addItem({ task: data.get("addTask"), completed: false, id: Math.random() });
    setTaskValue(""); // Clear the input field
  }
  function handleInputChange(e) {
    setTaskValue(e.target.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="addTask">
        <input className={style.text_input} type="text" name="addTask" id="addTask" placeholder="add new task..." required value={taskValue} onChange={handleInputChange} />
      </label>

      <button className="primary">Add</button>
    </form>
  );
}
