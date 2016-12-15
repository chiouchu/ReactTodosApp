import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';

import * as TodosActions from '../actions/todos';
import FilterContainer from '../containers/FilterContainer';
import TodoList from '../components/TodoList';
import TodoAdd from '../components/TodoAdd';
import Loading from '../components/Loading';
import '../../css/style.css';

class App extends Component {
    render() {
        const { filter, todos, loading, todosActions } = this.props;
        return (
            <div>
                {loading ? <Loading /> : false}
                <h1 className={classNames('title')}>React Todo List</h1>
                <TodoAdd addTask={todosActions.addTask} />
                <FilterContainer />
                <TodoList
                    todos={todos}
                    filter={filter}
                    saveTask={todosActions.editTask}
                    deleteTask={todosActions.deleteTask}
                    completeTask={todosActions.toggleTask}
                />
            </div>
        );
    }
}

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
