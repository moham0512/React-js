import React from "react";
import ReactDOM from "react-dom";
import DeleteBtn from "./Buttons/DelBtn";
import "./Stylesheet/TodoList.css";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class TodoList extends React.Component {
  delDoneTasks() {
    const newTasks = this.props.tasks.filter((item) => {
      return item.done !== true;
    });

    this.props.deleteDoneTasks(newTasks);
  }

  render() {
    return (
      <div id="todo-list">
        <h1>TodoList</h1>
        <div id="rows">
          {this.props.tasks.map((task, index) => (
            <TodoRow
              content={task.content}
              key={index}
              index={index}
              updateTasks={this.props.updateTasks}
              tasks={this.props.tasks}
            />
          ))}
        </div>
        <DeleteBtn
          text="Delete done tasks"
          onClick={this.delDoneTasks.bind(this)}
        />
        <DeleteBtn
          text="Delete all tasks"
          onClick={this.props.deleteAllTasks}
        />
      </div>
    );
  }
}

function TodoRow({ content, index, updateTasks, tasks }) {
  function delTask() {
    const newTasks = tasks.filter((item) => {
      return item !== tasks[index];
    });
    updateTasks(newTasks);
  }

  function doneChangeHandler(event) {
    if (tasks[index].done === false) {
      tasks[index].done = true;
    } else {
      tasks[index].done = false;
    }

    updateTasks(tasks);
  }

  return (
    <div id="row">
      <h3>{content}</h3>
      <Form.Check
        className="form"
        checked={tasks[index].done}
        onChange={doneChangeHandler}
      />
      <button type="button" onClick={delTask}>
        Delete
      </button>
    </div>
  );
}

export default TodoList;
