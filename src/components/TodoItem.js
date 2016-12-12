import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
        this._onEditClick = this._onEditClick.bind(this);
        this._onCancelClick = this._onCancelClick.bind(this);
    }

    render() {
        const todo = this.props;

        if (this.state.isEditing) {
            return (
                <tr>
                    <th><input type="text" defaultValue={task} /></th>
                    <th>
                        <button>Save</button>
                    </th>
                        <button onClick={this._onCancelClick}>Cancel</button>
                </tr>
            );
        }

        return (
            <tr>
                <th>{todo.task}</th>
                <th>
                    <button>Edit</button>
                    <button onClick={this._onEditClick}>Edit</button>
                    <button>Delete</button>
                </th>
            </tr>
        );
    }

    _onEditClick() {
        this.setState({ isEditing: true });
    }

    _onCancelClick() {
        this.setState({ isEditing: false });
    }
}

export default TodoItem;
