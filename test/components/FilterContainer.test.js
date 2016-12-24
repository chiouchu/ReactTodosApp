import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../src/containers/FilterContainer';
import Filter from '../../src/components/Filter';

describe('FilterContainer component testing', () => {
    it('should render components correctly', () => {
        const props = {
            filter: 'SHOW_ALL'
        };
        const wrapper = shallow(<App {...props} />);
        expect(wrapper.find(Filter).length).to.equal(1);
    });
});

