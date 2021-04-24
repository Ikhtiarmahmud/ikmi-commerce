import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ProductReducer from './../containers/HomePage/reducer';
import CartReducer from './../containers/Cart/reducer';
import CategoryReducer from './../components/Admin/Category/reducer';
import AdminProductReducer from './../components/Admin/Product/reducer';
import thunk from 'redux-thunk';

const mainReducer = combineReducers({
        productStore : ProductReducer,
        categoryStore : CategoryReducer,
        cartStore : CartReducer,
        AdminProductStore : AdminProductReducer,
    })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(mainReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;