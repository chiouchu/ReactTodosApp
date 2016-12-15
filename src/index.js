import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import todoApp from './reducers';
import TodoAppContainer from './containers/TodoAppContainer';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    // logger only in development mode
    const logger = createLogger({ duration:true });
    middlewares.push(logger);
}

let store = createStore(
    todoApp,
    applyMiddleware(...middlewares)
);

ReactDOM.render(
    <Provider store={store}>
        <TodoAppContainer />
    </Provider>,
    document.getElementById('main')
);
