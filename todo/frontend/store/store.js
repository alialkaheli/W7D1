import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';

const configStore = () => createStore(rootReducer);

export default configStore;