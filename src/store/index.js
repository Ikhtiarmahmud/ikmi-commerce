import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ProductReducer from './../containers/HomePage/reducer';
import CartReducer from './../containers/Cart/reducer';
import OrderReducer from './../components/Admin/Order/reducer';
import CategoryReducer from './../components/Admin/Category/reducer';
import UserReducer from './../components/Admin/User/reducer';
import AdminProductReducer from './../components/Admin/Product/reducer';
import thunk from 'redux-thunk';

const mainReducer = combineReducers({
        productStore : ProductReducer,
        categoryStore : CategoryReducer,
        cartStore : CartReducer,
        orderStore : OrderReducer,
        usersStore : UserReducer,
        AdminProductStore : AdminProductReducer,
    })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(mainReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;