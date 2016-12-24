import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../src/components/Loading';

describe('Loading component testing', () => {
    it('should have loading class', () => {
        const wrapper = shallow(<Loading />);
        expect(wrapper.find('.loading').exists()).to.be.true;
    });
});
