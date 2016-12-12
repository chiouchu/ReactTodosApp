import React, { Component } from 'react';

class Filter extends Component {
    render() {
        const { filter, filterActions } = this.props;
        return (
            <div>
                <button
                  onClick={() => filterActions.setFilter('SHOW_ALL')}
                  disabled={ filter === 'SHOW_ALL' }
                >All</button>
                <button
                  onClick={() => filterActions.setFilter('SHOW_COMPLETED')}
                  disabled={ filter === 'SHOW_COMPLETED' }
                >Completed</button>
                <button
                  onClick={() => filterActions.setFilter('SHOW_UNCOMPLETED')}
                  disabled={ filter === 'SHOW_UNCOMPLETED' }
                >Uncompleted</button>
            </div>
        );
    }
}

export default Filter;
