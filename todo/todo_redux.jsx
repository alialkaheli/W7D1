import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './frontend/store/store';
import { receiveTodos, receiveTodo } from './frontend/actions/todo_actions'
import Root from './frontend/components/root';

const store = configStore();
window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('content');

    ReactDOM.render(<Root />, root);
});