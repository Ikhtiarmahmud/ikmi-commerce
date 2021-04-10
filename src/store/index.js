import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ProductReducer from './../containers/HomePage/reducer';
import thunk from 'redux-thunk';

const mainReducer = combineReducers({
        productStore : ProductReducer
    })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(mainReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;