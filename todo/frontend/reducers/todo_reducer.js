import { RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';

// const initialState = {
//     1: {
//       id: 1,
//       title: 'wash car',
//       body: 'with soap',
//       done: false
//     },
//     2: {
//       id: 2,
//       title: 'wash dog',
//       body: 'with shampoo',
//       done: true
//     },
// };

const reducer = (oldState = {}, action) => {
    switch(action.type) {
        case RECEIVE_TODOS:
            let obj = {}; 
            action.todosArg.forEach( todo => {
                obj[todo.id] = todo;
            });
            return obj;
        case RECEIVE_TODO:
            const newTodo = {[action.todo.id]: action.todo};
            return merge({}, oldState, newTodo);
        default:
          return oldState;
      }
}

export default reducer;