import { STORE_PRODUCTS, STORE_SELECTED_PRODUCT } from './constant';
import axios from 'axios';

export const StoreProducts = () => async(dispatch, getStore) => {    

    const allProducts = await axios.get('https://fakestoreapi.com/products');

    dispatch(setAllProducts(allProducts.data))    
}

export const StoreSelectedProduct = (id) => async(dispatch, getStore) => {   
    
    const product = await axios.get(`https://fakestoreapi.com/products/${id}`);

    dispatch(setSelectedProduct(product.data));
}

const setAllProducts = (data) => {
    return {
        type: STORE_PRODUCTS,
        payload: data
    } 
}

const setSelectedProduct = (data) => {
    return {
        type: STORE_SELECTED_PRODUCT,
        payload: data
    } 
}