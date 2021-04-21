import { STORE_CATEGORIES, GET_SINGLE_CATEGORY } from  './constants';
import axios from 'axios';
import { BASE_URL, AUTH_TOKEN } from '../../../utils/constants';

export const StoreCategoryList = () => async(dispatch, getStore) => {
    const categories = await axios.get(`${BASE_URL}/category`);

    dispatch({
            type: STORE_CATEGORIES,
            payload: categories.data
    })
}

export const StoreCategory = (data) => async() => {
   
    return await axios.post(`${BASE_URL}/category`, data, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${AUTH_TOKEN}`,
        }
    });
}

export const GetSingleCategory = (id) => async(dispatch) => {
    const category = await axios.get(`${BASE_URL}/category/${id}`);

    dispatch({
        type: GET_SINGLE_CATEGORY,
        payload: category.data
    })
}

export const UpdateCategory = (data) => async() => {
    return await axios.patch(`${BASE_URL}/category/${data._id}`, data, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${AUTH_TOKEN}`,
        }
    });
}

export const DeleteCategory = (id) => async() => {
    return await axios.delete(`${BASE_URL}/category/${id}`, {
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${AUTH_TOKEN}`,
            }
    });
}