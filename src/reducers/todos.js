import * as types from '../constants/ActionTypes';

export default function todos(state = [], action) {
    switch (action.type) {
        case types.ADD_TASK:
            return [
                ...state,
                {
                    task: action.task,
                    isCompleted: false
                }
            ];
        case types.EDIT_TASK:
            return [
                ...state.slice(0, action.idx),
                Object.assign({}, state[action.idx], {
                    task: action.task
                }),
                ...state.slice(action.idx + 1)
            ];
        case types.DELETE_TASK:
            return [
                ...state.slice(0, action.idx),
                ...state.slice(action.idx + 1)
            ];
        case types.TOGGLE_TASK:
            return [
                ...state.slice(0, action.idx),
                Object.assign({}, state[action.idx], {
                    isCompleted: !state[action.idx].isCompleted
                }),
                ...state.slice(action.idx + 1)
            ];
        default:
          return state;
    }
}
