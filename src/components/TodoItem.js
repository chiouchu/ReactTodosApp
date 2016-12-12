import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const todo = this.props.todo;
        return (
            <tr>
                <th>{todo.task}</th>
                <th>
                    <button>Edit</button>
                    <button>Delete</button>
                </th>
            </tr>
        );
    }
}

export default TodoItem;
