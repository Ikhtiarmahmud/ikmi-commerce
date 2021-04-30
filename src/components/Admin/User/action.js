import { STORE_USERS, GET_SINGLE_USER } from  './constants';
import axios from 'axios';
import { BASE_URL, AUTH_TOKEN } from '../../../utils/constants';

export const StoreUserList = () => async(dispatch) => {
    const users = await axios.get(`${BASE_URL}/user`, {
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${AUTH_TOKEN}`,
            }
    });

    dispatch({
            type: STORE_USERS,
            payload: users.data
    })
}

export const StoreUser = (data) => async() => {
   
    return await axios.post(`${BASE_URL}/user`, data, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${AUTH_TOKEN}`,
        }
    });
}

export const GetSingleUser = (id) => async(dispatch) => {
    const user = await axios.get(`${BASE_URL}/user/${id}`);

    dispatch({
        type: GET_SINGLE_USER,
        payload: user.data
    })
}

export const UpdateUserData = (data) => async() => {
    return await axios.patch(`${BASE_URL}/user/${data._id}`, data, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${AUTH_TOKEN}`,
        }
    });
}

export const DeleteUser = (id) => async() => {
    return await axios.delete(`${BASE_URL}/user/${id}`, {
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${AUTH_TOKEN}`,
            }
    });
}