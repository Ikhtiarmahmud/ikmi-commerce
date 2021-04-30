import { STORE_USERS, GET_SINGLE_USER } from './constants';

const INITIAL_STATE = {
    users : [],
    user : {}
}

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STORE_USERS:
            return {...state, users: action.payload}
        case GET_SINGLE_USER:
            return {...state, user: action.payload}
        default:
            return state;
    }
}

export default UserReducer