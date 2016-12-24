import { expect } from 'chai';
import * as types from '../../src/constants/ActionTypes';
import * as filter from '../../src/actions/filter';

describe('filter action testing', () => {
    it('should create an action to set filter', () => {
        expect(
            filter.setFilter('SHOW_ALL')
        ).to.be.deep.equal(
            {
                type: types.SET_FILTER,
                filter: 'SHOW_ALL'
            }
        );
    });
});
