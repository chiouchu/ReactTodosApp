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
        this._saveTask = this._saveTask.bind(this);
        this._addTask = this._addTask.bind(this);
    }

    render() {
        return (
            <div>
                <h1>React Todo List</h1>
                <TodoAdd addTask={this._addTask} />
                <TodoList todos={this.state.todos} saveTask={this._saveTask} />
            </div>
        );
    }

    _saveTask(idx, val) {
        let newTodos = [...this.state.todos];
        newTodos[idx] = Object.assign({}, newTodos[idx], { task: val });
        this.setState({ todos: newTodos });
    }

    _addTask(val) {
        let newTodos = [...this.state.todos];
        newTodos.push(
            {
                task: val,
                isCompleted: false
            });
        this.setState({ todos: newTodos });
    }
}

export default App;
