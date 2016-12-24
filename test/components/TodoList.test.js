import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../src/components/TodoList';
import TodoItem from '../../src/components/TodoItem';

describe('TodoList component testing', () => {
    it('should list all todos when filter is SHOW_ALL', () => {
        const props = {
            filter: 'SHOW_ALL',
            todos: [
                {
                    task: 'Install packages',
                    isCompleted: false
                },
                {
                    task: 'Add webpack.config.js',
                    isCompleted: false
                },
                {
                    task: 'Break UI into components',
                    isCompleted: false
                }
            ]
        };
        const wrapper = shallow(<TodoList {...props} />);
        expect(wrapper.find(TodoItem).length).to.equal(3);
    });

    it('should list completed todos when filter is SHOW_COMPLETED', () => {
        const props = {
            filter: 'SHOW_COMPLETED',
            todos: [
                {
                    task: 'Install packages',
                    isCompleted: true
                },
                {
                    task: 'Add webpack.config.js',
                    isCompleted: false
                },
                {
                    task: 'Break UI into components',
                    isCompleted: true
                }
            ]
        };
        const wrapper = shallow(<TodoList {...props} />);
        expect(wrapper.find(TodoItem).length).to.equal(2);
    });
});

