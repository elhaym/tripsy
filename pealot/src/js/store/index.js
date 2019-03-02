import { createStore } from 'redux';
import rootReducer from '../reducers/user';

const store = createStore(rootReducer);

export default store;