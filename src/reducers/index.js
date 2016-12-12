import { combineReducers } from 'redux';

import filter from './filter';
import todos from './todos';

const todoApp = combineReducers({
    filter,
    todos
});

export default todoApp;
