import { SET_ORDERS } from  './constants';
import axios from 'axios';
import { BASE_URL, AUTH_TOKEN } from '../../../utils/constants';

export const StoreOrderList = () => async(dispatch) => {
    const orders = await axios.get(`${BASE_URL}/order`, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${AUTH_TOKEN}`,
        }
    });

    dispatch({
            type: SET_ORDERS,
            payload: orders.data
    })
}