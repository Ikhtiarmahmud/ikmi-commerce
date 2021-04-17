import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ProductReducer from './../containers/HomePage/reducer';
import CategoryReducer from './../components/Admin/Category/reducer';
import thunk from 'redux-thunk';

const mainReducer = combineReducers({
        productStore : ProductReducer,
        categoryStore : CategoryReducer
    })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(mainReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;