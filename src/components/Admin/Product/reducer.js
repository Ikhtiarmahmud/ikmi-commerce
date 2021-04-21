import { STORE_ADMIN_PRODUCTS, STORE_ADMIN_SINGLE_PRODUCTS } from './constants';

const INITIAL_STATE = {
    products : [],
    singleProduct: {}
}

const AdminProductReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STORE_ADMIN_PRODUCTS:
            return {...state, products: action.payload}
        case STORE_ADMIN_SINGLE_PRODUCTS:
            return {...state, singleProduct: action.payload}
        default:
            return state;
    }
}

export default AdminProductReducer