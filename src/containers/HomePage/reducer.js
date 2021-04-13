import { STORE_PRODUCTS, STORE_SELECTED_PRODUCT } from './constant';

const INITIAL_STATE = {
    selectedProduct : {},
    products : []
}

const ProductReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STORE_PRODUCTS:
            return {...state, products: action.payload}

        case STORE_SELECTED_PRODUCT:
            return {...state, selectedProduct: action.payload}
            
        default:
            return state;
    }
}

export default ProductReducer