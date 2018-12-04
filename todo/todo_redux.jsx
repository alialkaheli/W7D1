import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './frontend/store/store';
import { receiveTodos, receiveTodo } from './frontend/actions/todo_actions'
import Root from './frontend/components/root';
import allTodos from './frontend/reducers/selectors'

const store = configStore();
window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.allTodos = allTodos;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('content');

    ReactDOM.render(<Root />, root);
});