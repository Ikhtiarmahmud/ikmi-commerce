import { SET_ORDERS } from './constants';

const INITIAL_STATE = {
    products : [],
}

const OrderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ORDERS:
            return {...state, products: action.payload}
        default:
            return state;
    }
}

export default OrderReducer