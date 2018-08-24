import React, { Component } from 'react'


class TodoItem extends Component {

    render() {
      return (
        <li className={this.props.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onClick={this.props.markComplete}
              defaultChecked={this.props.completed} />
            <label>{this.props.title}</label>
            <button className="destroy" onClick={this.props.deleteTodo} />
          </div>
        </li>
      )
    }
  }

  export default TodoItem 