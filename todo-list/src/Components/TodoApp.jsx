import React, { createContext } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./Stylesheet/TodoApp.css";
import { useContext } from "react";

class TodoApp extends React.Component {
  state = {
    tasks: [],
  };

  updateTasks(array) {
    this.setState({ tasks: array });
  }

  deleteAllTasks() {
    this.setState({ tasks: [] });
  }

  deleteDoneTasks(array) {
    this.setState({ tasks: array });
  }

  render() {
    return (
      <div id="todo-app">
        <TodoInput
          tasks={this.state.tasks}
          updateTasks={this.updateTasks.bind(this)}
        />
        <TodoList
          tasks={this.state.tasks}
          deleteAllTasks={this.deleteAllTasks.bind(this)}
          updateTasks={this.updateTasks.bind(this)}
          deleteDoneTasks={this.deleteDoneTasks.bind(this)}
        />
      </div>
    );
  }
}

export default TodoApp;
