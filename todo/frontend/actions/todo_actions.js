export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todosArg) => ({
    type: RECEIVE_TODOS,
    todosArg
})

export const receiveTodo = (todo) => ({
    type: RECEIVE_TODO,
    todo
})
