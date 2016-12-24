import React from 'react';

const Filter = (props) => {
    return (
        <div>
            <button
                onClick={() => props.filterActions.setFilter('SHOW_ALL')}
                disabled={props.filter === 'SHOW_ALL'}
            >All</button>
            <button
                onClick={() => props.filterActions.setFilter('SHOW_COMPLETED')}
                disabled={props.filter === 'SHOW_COMPLETED'}
            >Completed</button>
            <button
                onClick={() => props.filterActions.setFilter('SHOW_UNCOMPLETED')}
                disabled={props.filter === 'SHOW_UNCOMPLETED'}
            >Uncompleted</button>
        </div>
    );
};

export default Filter;
