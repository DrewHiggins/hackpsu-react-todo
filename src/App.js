import React, { Component } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
    this.addTodo.bind(this);
    this.componentWillMount.bind(this);
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        todos: JSON.parse(localStorage.getItem("todos"))
      })
    }, 1000);
  }

  handleTodoCheck = (index) => {
    let newState = this.state;
    newState.todos[index].isDone = !newState.todos[index].isDone;
    this.setState(newState);
  }
  
  addTodo(newTodoName) {
    let newState = this.state;
    newState.todos.push({
      title: newTodoName,
      completed: false
    });
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} handleTodoCheck={this.handleTodoCheck} />
      </div>
    );
  }
}

export default App;
