import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';

class App extends Component {
    render() {
        return (
            <div>
                <h1>React Todo List</h1>
                <TodoAdd />
                <TodoList />
            </div>
        );
    }
}

export default App;
