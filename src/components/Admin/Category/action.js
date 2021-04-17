import { STORE_CATEGORIES } from  './constants';
import axios from 'axios';
import { BASE_URL, AUTH_TOKEN } from '../../../utils/constants';

export const StoreCategoryList = () => async(dispatch, getStore) => {
    const categories = await axios.get(`${BASE_URL}/category`);

    dispatch(() => {
        return {
            type: STORE_CATEGORIES,
            payload: categories.data
        }
    })
}

export const StoreCategory = (data) => async(dispatch, getStore) => {
   
    return await axios.post(`${BASE_URL}/category`, data, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${AUTH_TOKEN}`,
        }
    });
}