import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';

import * as TodosActions from '../actions/todos';
import FilterContainer from '../containers/FilterContainer';
import TodoList from '../components/TodoList';
import TodoAdd from '../components/TodoAdd';
import Loading from '../components/Loading';
import '../../css/style.css';

/* eslint arrow-body-style: ["error", "always"] */

export const App = (props) => {
    return (
        <div>
            {props.loading ? <Loading /> : false}
            <h1 className={classNames('title')}>React Todo List</h1>
            <TodoAdd addTask={props.todosActions.addTask} />
            <FilterContainer />
            <TodoList
                todos={props.todos}
                filter={props.filter}
                saveTask={props.todosActions.editTask}
                deleteTask={props.todosActions.deleteTask}
                completeTask={props.todosActions.toggleTask}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        filter: state.filter,
        loading: state.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        todosActions: bindActionCreators(TodosActions, dispatch)
    };
};

const TodoAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default TodoAppContainer;
