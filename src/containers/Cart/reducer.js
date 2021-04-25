import { SET_CART_ITEMS, STORE_CART_ITEMS } from './constants';

const INITIAL_STATE = {
    cartItems : {},
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CART_ITEMS:
            return {...state, cartItems: action.payload}

        default:
            return state;
    }
}

export default CartReducer