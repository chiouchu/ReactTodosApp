import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import todoApp from './reducers';
import * as todoActions from './actions/todos';
import App from './app';

let store = createStore(todoApp);
console.log(store.getState());

let listener = store.subscribe(() =>
    console.log(store.getState())
);
store.dispatch(todoActions.addTask('Test'));


ReactDOM.render(
    <App />,
    document.getElementById('main')
);
