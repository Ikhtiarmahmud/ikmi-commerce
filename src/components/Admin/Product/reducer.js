import { STORE_ADMIN_PRODUCTS } from './constants';

const INITIAL_STATE = {
    products : [],
}

const AdminProductReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STORE_ADMIN_PRODUCTS:
            return {...state, products: action.payload}
        default:
            return state;
    }
}

export default AdminProductReducer