import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../src/containers/TodoAppContainer';
import FilterContainer from '../../src/containers/FilterContainer';
import Loading from '../../src/components/Loading';
import TodoAdd from '../../src/components/TodoAdd';
import TodoList from '../../src/components/TodoList';

describe('TodoAppContainer component testing', () => {
    it('should render components correctly', () => {
        const props = {
            loading: false,
            todos: [],
            filter: 'SHOW_ALL',
            todosActions: () => {}
        };
        const wrapper = shallow(<App {...props} />);
        expect(wrapper.find('h1').text()).to.equal('React Todo List');
        expect(wrapper.find(Loading).length).to.equal(0);
        expect(wrapper.find(TodoAdd).length).to.equal(1);
        expect(wrapper.find(TodoList).length).to.equal(1);
        expect(wrapper.find(FilterContainer).length).to.equal(1);
    });
});

