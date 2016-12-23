import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import * as types from '../src/constants/ActionTypes';
import * as todos from '../src/actions/todos';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('todos action testing', () => {
    it('should create an action to request adding task', () => {
        expect(
            todos.addTaskRequest()
        ).to.be.deep.equal(
            {
                type: types.ADD_TASK_REQUEST
            }
        );
    });

    it('should create an action to add task success', () => {
        expect(
            todos.addTaskSuccess('Learn mocha')
        ).to.be.deep.equal(
            {
                type: types.ADD_TASK_SUCCESS,
                task: 'Learn mocha'
            }
        );
    });

    it('should create an action to add task failure', () => {
        expect(
            todos.addTaskFailure('error...')
        ).to.be.deep.equal(
            {
                type: types.ADD_TASK_FAILURE,
                err: 'error...'
            }
        );
    });

    it('should create an action to add task', () => {
        const task = 'Learn mocha';
        const expectedActions = [
            { type: types.ADD_TASK_REQUEST },
            { type: types.ADD_TASK_SUCCESS, task }
        ];

        const store = mockStore({});
        store.dispatch(todos.addTask(task));
        setTimeout(() => {
            expect(
                store.getActions()
            ).to.be.deep.equal(expectedActions);
        }, 1000);
    });

    it('should create an action to edit task', () => {
        expect(
            todos.editTask(0, 'New task description')
        ).to.be.deep.equal(
            {
                type: types.EDIT_TASK,
                idx: 0,
                task: 'New task description'
            }
        );
    });

    it('should create an action to delete task', () => {
        expect(
            todos.deleteTask(1)
        ).to.be.deep.equal(
            {
                type: types.DELETE_TASK,
                idx: 1
            }
        );
    });

    it('should create an action to toggle task', () => {
        expect(
            todos.toggleTask(2)
        ).to.be.deep.equal(
            {
                type: types.TOGGLE_TASK,
                idx: 2
            }
        );
    });
});
