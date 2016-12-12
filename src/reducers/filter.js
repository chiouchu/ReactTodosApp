import * as types from '../constants/ActionTypes';

export default function filter(state = 'SHOW_ALL', action) {
    switch (action.type) {
        case types.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}
