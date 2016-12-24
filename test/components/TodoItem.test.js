import { expect } from 'chai';
import React from 'react';
import DomMock from '../helpers/setup';
import { mount } from 'enzyme';
import TodoItem from '../../src/components/TodoItem';

describe('TodoItem component testing', () => {
    before(() => {
        DomMock();
    });

    it('should show input when clicking Edit button', () => {
        const props = {
            todo: {
                task: 'Finish unit test',
                isCompleted: false
            }
        };
        const wrapper = mount(
            <table>
                <tbody>
                    <TodoItem {...props} />
                </tbody>
            </table>);

        expect(wrapper.find('input').length).to.equal(0);
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.find('input').length).to.equal(1);
    });

    it('should show task and isCompleted correctly', () => {
        const props = {
            todo: {
                task: 'Finish unit test',
                isCompleted: true
            }
        };
        const wrapper = mount(
            <table>
                <tbody>
                    <TodoItem {...props} />
                </tbody>
            </table>);
        expect(wrapper.find('span').text()).to.equal('Finish unit test');
        expect(wrapper.find('span').hasClass('task-completed')).to.be.true;
    });
});

