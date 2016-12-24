import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import TodoAdd from '../../src/components/TodoAdd';

describe('TodoAdd component testing', () => {
    it('should have a button', () => {
        const wrapper = shallow(<TodoAdd />);
        expect(wrapper.find('button').length).to.equal(1);
    });
});
