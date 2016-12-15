import { combineReducers } from 'redux';

import filter from './filter';
import todos from './todos';
import loading from './loading';

const todoApp = combineReducers({
    filter,
    todos,
    loading
});

export default todoApp;
