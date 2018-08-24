import React, { Component } from 'react'
import TodoItem from './TodoItem.jsx'

class TodoList extends Component {
    render() {
      return (
        <ul className="todo-list">
          {this.props.todoList.map(todo => <TodoItem completed={todo.completed}
            title={todo.title}
            key={todo.id}
            deleteTodo={() => this.props.deleteTodo(todo.id)}
            markComplete={() => this.props.markComplete(todo.id)}
          />)}
        </ul>
      )
    }
  }

  export default TodoList 