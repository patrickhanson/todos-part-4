import todos from '../todos.json'
import { CREATETODO, DELETETODO, DELETECOMPLETEDTODOS, MARKTODOCOMPLETE } from '../actions'

const defaultState = {
    todos: todos
}


function todoReducer(state = defaultState, action) {
    switch (action.type) {
        case CREATETODO:
            return {
                todos: [...state.todos, {
                    userId: 1,
                    id: (Math.floor(Math.random() * 1000)),
                    title: action.title,
                    completed: false,
                }]
            }
        case DELETETODO:
            return { todos: state.todos.filter(todo => todo.id !== action.id) }
        case DELETECOMPLETEDTODOS:
            return { todos: state.todos.filter(todo => todo.completed === false) }
        case MARKTODOCOMPLETE:
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        if (todo.completed === true) {
                            todo.completed = false
                        } else {
                            todo.completed = true
                        }
                    }
                    return todo
                })
            }
        default: return state
    }
}

export default todoReducer

// let newTodo = {
//     userId: 1,
//     id: (Math.floor(Math.random() * 1000)),
//     title: event.target.value,
//     completed: false,
//   }
//   let newTodoList = [...this.state.todoList, newTodo]