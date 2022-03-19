import "./Stylesheet/TodoInput.css";
import { useRef, useState } from "react";
import React from "react";
import ReactDOM from "react-dom";

function TodoInput({ tasks, updateTasks }) {
  const [task, setTask] = useState({ content: "", done: false });

  function inputChangeHandler(event) {
    setTask({ content: event.target.value, done: false });
  }

  const todoInput = React.useRef();

  function sendTask() {
    if (task.content !== "") {
      tasks.push(task);
      // const newTasks = new Set(tasks);
      updateTasks(tasks);
      setTask({ content: "", done: false });
      todoInput.current.focus();
    }
  }

  return (
    <div id="todo-input">
      <h1>TodoInput</h1>
      <div id="input">
        <input
          ref={todoInput}
          type="text"
          placeholder="New Todo"
          value={task.content}
          onChange={inputChangeHandler}
        />
        <br />
        <button type="button" onClick={sendTask}>
          Add new task
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
