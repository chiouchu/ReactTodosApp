import React, { Component } from 'react';
import classNames from 'classnames';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
        this._onEditClick = this._onEditClick.bind(this);
        this._onCancelClick = this._onCancelClick.bind(this);
        this._onSaveClick = this._onSaveClick.bind(this);
    }

    render() {
        const { todo, idx, deleteTask, completeTask } = this.props;
        const taskClass = classNames({
            task: true,
            'task-completed': todo.isCompleted
        });
        if (this.state.isEditing) {
            return (
                <tr>
                    <td><input type="text" data-idx={idx} defaultValue={todo.task} ref="editInput" className="edit" /></td>
                    <td>
                        <button onClick={this._onSaveClick}>Save</button>
                        <button onClick={this._onCancelClick}>Cancel</button>
                    </td>
                </tr>
            );
        }

        return (
            <tr>
                <td>
                    <span
                        className={taskClass}
                        onClick={() => completeTask(idx)}
                    >
                        {todo.task}
                    </span>
                </td>
                <td>
                    <button onClick={this._onEditClick}>Edit</button>
                    <button onClick={() => deleteTask(idx)}>Delete</button>
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

    _onSaveClick() {
        const input = this.refs.editInput;
        this.props.saveTask(+input.getAttribute('data-idx'), input.value);
        this.setState({ isEditing: false });
    }
}

export default TodoItem;
