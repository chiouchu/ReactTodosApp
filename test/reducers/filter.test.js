import { expect } from 'chai';
import * as types from '../../src/constants/ActionTypes';
import filter from '../../src/reducers/filter';

describe('filter reducer testing', () => {
    it('should handle filter state for default value', () => {
        expect(
            filter(undefined, { type: '' })
        ).to.be.equal('SHOW_ALL');
    });

    it('should handle filter state', () => {
        expect(
            filter('', {
                type: types.SET_FILTER,
                filter: 'SHOW_COMPLETED'
            })
        ).to.be.equal('SHOW_COMPLETED');
    });
});
