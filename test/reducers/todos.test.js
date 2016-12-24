import { expect } from 'chai';
import * as types from '../../src/constants/ActionTypes';
import todos from '../../src/reducers/todos';

describe('todos reducer testing', () => {
    let originTodos;
    beforeEach(() => {
        originTodos = [
            {
                task: 'Search mocha',
                isCompleted: false
            }
        ];
    });

    it('should handle todos state for default value', () => {
        expect(
            todos(undefined, { type: '' })
        ).to.be.deep.equal([]);
    });

    it('should handle todos state when adding task success', () => {
        const task = 'Learn mocha';
        expect(
            todos([], {
                type: types.ADD_TASK_SUCCESS,
                task
            })
        ).to.be.deep.equal([
            {
                task,
                isCompleted: false
            }
        ]);
    });

    it('should handle todos state when editing task', () => {
        const newTask = 'Finish unit test';
        expect(
            todos(originTodos, {
                type: types.EDIT_TASK,
                idx: 0,
                task: newTask
            })
        ).to.be.deep.equal([
            {
                task: newTask,
                isCompleted: false
            }
        ]);
    });

    it('should handle todos state when deleting task', () => {
        expect(
            todos(originTodos, {
                type: types.DELETE_TASK,
                idx: 0
            })
        ).to.be.empty;
    });

    it('should handle todos state when toggling task', () => {
        expect(
            todos(originTodos, {
                type: types.TOGGLE_TASK,
                idx: 0
            })
        ).to.be.deep.equal([
            {
                task: 'Search mocha',
                isCompleted: true
            }
        ]);
    });
});
