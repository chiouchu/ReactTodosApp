import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this._renderItems = this._renderItems.bind(this);
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Todo</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this._renderItems()}
                    </tbody>
                </table>
            </div>
        );
    }

    _renderItems() {
        const todos = this.props.todos;

        let list = [];
        todos.forEach((todo, idx) => {
            list.push(<TodoItem key={idx} todo={todo} />);
        });
        return list;
    }
}

export default TodoList;
