import todoList from './todo_list';
import {connect} from 'redux';
import { receiveTodo } from '../../actions/todo_actions'

const mapStateToProps = state => ({
    todos: allTodos(state)
  });
  
  const mapDispatchToProps = dispatch => ({
    receiveTodo: (todo) => dispatch(receiveTodo(todo))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(todoList);