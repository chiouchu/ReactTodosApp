import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';

const todos = [
    {
        task: 'Install packages',
        isCompleted: false
    },
    {
        task: 'Add webpack.config.js',
        isCompleted: false
    },
    {
        task: 'Break UI into components',
        isCompleted: false
    }
];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }

    render() {
        return (
            <div>
                <h1>React Todo List</h1>
                <TodoAdd />
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
