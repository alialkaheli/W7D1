import {combineReducers} from 'redux';
import reducer from './todo_reducer';

const rootReducer = combineReducers({
    todos: reducer,
});

export default rootReducer;

