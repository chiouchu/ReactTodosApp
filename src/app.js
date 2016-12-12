import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import classNames from 'classnames';

import '../css/style.css';

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
        this._deleteTask = this._deleteTask.bind(this);
        this._completeTask = this._completeTask.bind(this);
    }

    render() {
        return (
            <div>
                <h1 className={classNames('title')}>React Todo List</h1>
                <TodoAdd addTask={this._addTask} />
                <TodoList
                    todos={this.state.todos}
                    saveTask={this._saveTask}
                    deleteTask={this._deleteTask}
                    completeTask={this._completeTask}
                />
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

    _deleteTask(idx) {
        let newTodos = [...this.state.todos];
        newTodos.splice(idx, 1);
        this.setState({ todos: newTodos });
    }

    _completeTask(idx) {
        let newTodos = [...this.state.todos];
        newTodos[idx] = Object.assign({}, newTodos[idx], { isCompleted: !newTodos[idx].isCompleted });
        this.setState({ todos: newTodos });
    }
}

export default App;
