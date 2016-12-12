import React, { Component } from 'react';

class TodoAdd extends Component {
    constructor(props) {
        super(props);
        this._onAddClick = this._onAddClick.bind(this);
    }

    render() {
        return (
            <div className="add">
                <input type="text" ref="addInput" className="edit" />
                <button onClick={this._onAddClick}>Create</button>
            </div>
        );
    }

    _onAddClick() {
        const addInput = this.refs.addInput;

        this.props.addTask(addInput.value);
        addInput.value = '';
    }
}

export default TodoAdd;
