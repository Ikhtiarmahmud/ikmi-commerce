import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

export const userSignUp = (data) => async (dispatch, getStore) => {
    return await axios.post(`${BASE_URL}/signup`, data);
}

export const userSignIn = (data) => async (dispatch, getStore) => {
    let response = await axios.post(`${BASE_URL}/signin`, data);
    let { userInfo } = response.data;

    // sessionStorage.setItem('user', userInfo.user);
    // sessionStorage.setItem('token', userInfo.token);
    // sessionStorage.setItem('auth', true);

    return true;
}