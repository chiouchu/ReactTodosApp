import * as types from '../constants/ActionTypes';

export default function loading(state = false, action) {
    switch (action.type) {
        case types.ADD_TASK_REQUEST:
        return true;
    case types.ADD_TASK_SUCCESS:
    case types.ADD_TASK_FAILURE:
        return false;
    default:
        return state;
    }
}
