import React, { Component } from 'react';
import Header from './Header'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        { action: 'Learn react', done: false },
        { action: 'Learn python', done: true },
        
      ],
    }
  }

  addtodo = (todoItem) => {
    if (!this.state.todoItems.find(item => item.action === todoItem)) {
      this.setState({
        todoItems: [...this.state.todoItems, { action: todoItem, done: false }]
      })
    }
  }

  markCompleteHandler = (index) => {
    const todoItems = [...this.state.todoItems]
    todoItems[index].done = !todoItems[index].done
    this.setState({ todoItems: todoItems })
  }

  render() {
    const todos = this.state.todoItems
    const { length } = todos.filter(item => !item.done ? item : null)

    return (
      <div className="container bg-light vh-100 shadow-sm">
        <div className="row">
          <Header length={length} />
          <div className="col-md-6 mx-auto mt-3">
            <TodoForm addTodo={this.addtodo} todoItems={this.state.todoItems} />
            <TodoList todoItems={this.state.todoItems} markCompleteHandler={this.markCompleteHandler} />
          </div>
        </div>

      </div>
    )
  }
}


export default App;
