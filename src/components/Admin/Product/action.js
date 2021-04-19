import axios from 'axios';
import { BASE_URL, AUTH_TOKEN } from '../../../utils/constants';

export const DeleteProduct = (id) => async(dispatch, getStore) => {
   
    return await axios.delete(`${BASE_URL}/products/${id}`, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${AUTH_TOKEN}`,
        }
    });
}