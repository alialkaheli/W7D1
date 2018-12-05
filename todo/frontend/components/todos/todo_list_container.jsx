import TodoList from './todo_list';
import { connect } from 'react-redux';
import { receiveTodo, receiveTodos } from '../../actions/todo_actions';
import allTodos from '../../reducers/selectors';

const mapStateToProps = state => {
    
    return ({
    todos: allTodos(state)
    });
}
  
const mapDispatchToProps = dispatch => ({
    receiveTodo: (todo) => dispatch(receiveTodo(todo))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

