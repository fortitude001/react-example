import {MAIN_LIST} from '../../Actions/Admin';

const initState = {};

export const getMainList = (state = initState, action = {}) => {
    switch (action.type) {
        case MAIN_LIST:
            return Object.assign({}, state, {list: action.list});
        default:
            return state;
    }
};

export const descChange = (state = {desc: ''}, action = {}) => {
    return Object.assign({}, state, {desc: action.desc});
};
