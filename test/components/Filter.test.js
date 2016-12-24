import { expect } from 'chai';
import React from 'react';
import { render, shallow } from 'enzyme';
import Filter from '../../src/components/Filter';

describe('Filter component testing', () => {
    it('should have three buttons', () => {
        const props = {
            filter: 'SHOW_ALL'
        };
        const wrapper = render(<Filter {...props} />);
        expect(wrapper.find('button').length).to.equal(3);
    });

    it('should select completed button', () => {
        const props = {
            filter: 'SHOW_COMPLETED'
        };
        const wrapper = shallow(<Filter {...props} />);
        expect(wrapper.find('button').at(0).prop('disabled')).to.not.be.true;
    });
});
