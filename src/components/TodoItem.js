import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <tr>
                <th>Finish today</th>
                <th>
                    <button>Edit</button>
                    <button>Delete</button>
                </th>
            </tr>
        );
    }
}

export default TodoItem;
