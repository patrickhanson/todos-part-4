export const CREATETODO = 'CREATETODO'
export const DELETETODO = 'DELETETODO'
export const DELETECOMPLETEDTODOS = 'DELETECOMPLETEDTODOS'
export const MARKTODOCOMPLETE ='MARKTODOCOMPLETE'

export function deleteCompletedTodos() {
    return {type: DELETECOMPLETEDTODOS}
}

export function deleteTodo(id) {
    return {
        type: DELETETODO,
        id: id
    }
}

export function markTodoComplete(id) {
    return {
        type: MARKTODOCOMPLETE,
        id: id
    }
}

export function createTodo(title) {
    return {
        type: CREATETODO,
        title: title
    }
}