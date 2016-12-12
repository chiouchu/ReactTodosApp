import React, { Component } from 'react';

class Filter extends Component {
    render() {
        const filterActions = this.props.filterActions;
        return (
            <div>
                <button onClick={() => filterActions.setFilter('SHOW_ALL')}>All</button>
                <button onClick={() => filterActions.setFilter('SHOW_COMPLETED')}>Completed</button>
                <button onClick={() => filterActions.setFilter('SHOW_UNCOMPLETED')}>Uncompleted</button>
            </div>
        );
    }
}

export default Filter;
