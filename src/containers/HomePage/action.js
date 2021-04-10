import { STORE_PRODUCTS, STORE_SELECTED_PRODUCT } from './constant';
import axios from 'axios';

export const StoreProducts = () => async(dispatch, getStore) => {    

    const allProducts = await axios.get('https://fakestoreapi.com/products');

    dispatch(storeAllProducts(allProducts.data))    
}

export const StoreSelectedProduct = (data) => {    
    return {
        type: STORE_SELECTED_PRODUCT,
        payload: data
    } 
}

const storeAllProducts = (data) => {
    return {
        type: STORE_PRODUCTS,
        payload: data
    } 
}