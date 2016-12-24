import { expect } from 'chai';
import * as types from '../../src/constants/ActionTypes';
import loading from '../../src/reducers/loading';

describe('loading reducer testing', () => {
    it('should handle loading state for default value', () => {
        expect(
            loading(undefined, { type: '' })
        ).to.not.be.ok;
    });

    it('should handle loading state to be true', () => {
        expect(
            loading(false, {
                type: types.ADD_TASK_REQUEST
            })
        ).to.be.ok;
    });

    it('should handle loading state to be false', () => {
        expect(
            loading(true, {
                type: types.ADD_TASK_SUCCESS
            })
        ).to.not.be.ok;

        expect(
            loading(true, {
                type: types.ADD_TASK_FAILURE
            })
        ).to.not.be.ok;
    });
});
