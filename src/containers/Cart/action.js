import axios from 'axios';
import { BASE_URL, AUTH_TOKEN } from '../../utils/constants';
import { SET_CART_ITEMS, STORE_CART_ITEMS } from './constants';

export const GetCartItems = () => async(dispatch) => {    
    
    const items = await axios.get(`${BASE_URL}/cart`, {
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${AUTH_TOKEN}`,
            }
    });

    dispatch(SetCartItems(items.data.products))    
}

const SetCartItems = (data) => {
    return {
        type: SET_CART_ITEMS,
        payload: data
    } 
}

export const UpdateCart = (id, quantity) => async(dispatch, getStore) => {
    const store = getStore();
    const products = store.cartStore.cartItems;
    console.log(products)
    const product = await products.length ? products.find(product => product.productId._id === id ? product : {}) : {}; 
    // console.log(product);

    const currentQty = Object.keys(product).length === 0 ? 0 : product.quantity;

    const data = {
        "product" : {
            "id" : id,
            "quantity" : Number(quantity) + Number(currentQty)
        }
    }

    return await axios.post(`${BASE_URL}/cart`, data, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${AUTH_TOKEN}`,
        }
    });
}