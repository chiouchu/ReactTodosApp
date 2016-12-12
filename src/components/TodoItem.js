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
        const todo = this.props.todo;

        if (this.state.isEditing) {
            return (
                <tr>
                    <td><input type="text" defaultValue={todo.task} /></td>
                    <td>
                        <button>Save</button>
                        <button onClick={this._onCancelClick}>Cancel</button>
                    </td>
                </tr>
            );
        }

        return (
            <tr>
                <td>{todo.task}</td>
                <td>
                    <button onClick={this._onEditClick}>Edit</button>
                    <button>Delete</button>
                </td>
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
