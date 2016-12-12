import * as types from '../constants/ActionTypes';

// action creator
export function setFilter(filter){
    return {
        type: types.SET_FILTER,
        filter
    };
}
