import React, {Component} from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

    render() {
      const { todos, receiveTodo } = this.props;
       const todosArr = todos.map((todo) => <li key={todo.id}><TodoListItem todo={todo} /></li>
        )
      
      return(
        <div>
          <ul>
            {todosArr}
          </ul>
          <TodoForm receiveTodo={ receiveTodo }/>
        </div>
      );
    }
  }

export default TodoList;
