import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }

    render() {
        const todo = this.props;

        if (this.state.isEditing) {
            return (
                <tr>
                    <th><input type="text" defaultValue={task} /></th>
                    <th>
                        <button>Save</button>
                        <button>Cancel</button>
                    </th>
                </tr>
            );
        }

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
