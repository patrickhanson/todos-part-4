import React, { Component } from 'react';
import './index.css';
import { Switch, Route, Link } from 'react-router-dom'
import TodoList from './TodoList.jsx'
import { connect } from 'react-redux'
import { deleteCompletedTodos, deleteTodo, markTodoComplete, createTodo } from './actions'

class App extends Component {

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  All = () => {
    return (
      <TodoList
        className="todo-list"
        todoList={this.props.todoList}
        deleteTodo={this.props.deleteTodo}
        markComplete={this.props.markTodoComplete}
      />
    )
  }

  Active = () => {
    const activeTodos = this.props.todoList.filter(todo => todo.completed === false)
    return(
      <TodoList
        className="todo-list"
        todoList={activeTodos}
        deleteTodo={this.props.deleteTodo}
        markComplete={this.props.markTodoComplete} 
      />
    )
  }

  Completed = () => {
    const completedTodos = this.props.todoList.filter(todo => todo.completed === true)
    return(
      <TodoList
        className="todo-list"
        todoList={completedTodos}
        deleteTodo={this.props.deleteTodo}
        markComplete={this.props.markTodoComplete} 
      />
    )
  }

  addTodo = (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      this.props.createTodo(event.target.value)
      this.setState({ value: "" })
    }
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            onKeyPress={this.addTodo}
            className="new-todo"
            value={this.props.value}
            onChange={this.handleChange}
            placeholder="What needs to be done?"
            autoFocus
          />
        </header>
        <section className="main">       
          <Switch>
            <Route exact path='/' component={this.All} />
            <Route exact path='/active' component={this.Active} />
            <Route exact path='/completed' component={this.Completed} />
          </Switch>
        </section>
        <footer className="footer">
          <span className="todo-count"><strong>0</strong> item(s) left</span>
          <ul className="filters">
            <li>
              <Link to="/" className={this.props.filter === "/" ? 'selected' : '' }>
                All
              </Link>
            </li>
            <li>
              <Link to="/active" className={this.props.filter === "/active" ? 'selected' : '' }>
                Active
              </Link>
            </li>
            <li>
              <Link to="/completed" className={this.props.filter === "/completed" ? 'selected' : '' }>
                Completed
              </Link>
            </li>
          </ul>
          <button className="clear-completed" onClick={this.props.deleteCompletedTodos} >Clear completed</button>
        </footer>
      </section>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    deleteCompletedTodos: () => dispatch(deleteCompletedTodos()),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    markTodoComplete: (id) => dispatch(markTodoComplete(id)),
    createTodo: (title) => dispatch(createTodo(title))
  }
}
function mapStateToProps(state) {
  return {
    todoList: state.todos
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
