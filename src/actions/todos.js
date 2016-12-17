import * as types from '../constants/ActionTypes';

// action creator
export function addTaskRequest() {
    return {
        type: types.ADD_TASK_REQUEST
    };
}

export function addTaskSuccess(task) {
    return {
        type: types.ADD_TASK_SUCCESS,
        task
    };
}

export function addTaskFailure(err) {
    return {
        type: types.ADD_TASK_FAILURE,
        err
    };
}

export function addTask(task) {
    return (dispatch) => {
        dispatch(addTaskRequest());
        setTimeout(() => {
            dispatch(addTaskSuccess(task));
        }, 1000);
    };
}

export function editTask(idx, task) {
    return {
        type: types.EDIT_TASK,
        idx,
        task
    };
}

export function deleteTask(idx) {
    return {
        type: types.DELETE_TASK,
        idx
    };
}

export function toggleTask(idx) {
    return {
        type: types.TOGGLE_TASK,
        idx
    };
}
