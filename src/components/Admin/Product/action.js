import axios from 'axios';
import { BASE_URL, AUTH_TOKEN } from '../../../utils/constants';
import { STORE_ADMIN_PRODUCTS } from './constants';

export const GetProducts = () => async(dispatch, getStore) => {    
    
    const allProducts = await axios.get(`${BASE_URL}/products`);

    dispatch(setAllProducts(allProducts.data))    
}

const setAllProducts = (data) => {
    return {
        type: STORE_ADMIN_PRODUCTS,
        payload: data
    } 
}

export const StoreProduct = (data) => async() => {
   
    return await axios.post(`${BASE_URL}/products`, data, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${AUTH_TOKEN}`,
        }
    });
}

export const DeleteProduct = (id) => async(dispatch, getStore) => {
   
    return await axios.delete(`${BASE_URL}/products/${id}`, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${AUTH_TOKEN}`,
        }
    });
}

export const GetCategories = () => async() => {
    return await axios.get(`${BASE_URL}/category`);
}