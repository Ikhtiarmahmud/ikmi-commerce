import { STORE_CATEGORIES } from './constants';

const INITIAL_STATE = {
    categories : [],
}

const CategoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STORE_CATEGORIES:
            return {...state, categories: action.payload}
            
        default:
            return state;
    }
}

export default CategoryReducer;