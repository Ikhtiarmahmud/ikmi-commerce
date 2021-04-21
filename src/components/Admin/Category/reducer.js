import { STORE_CATEGORIES, GET_SINGLE_CATEGORY } from './constants';

const INITIAL_STATE = {
    categories : [],
    category : {}
}

const CategoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STORE_CATEGORIES:
            return {...state, categories: action.payload}
        case GET_SINGLE_CATEGORY:
            return {...state, category: action.payload}
        default:
            return state;
    }
}

export default CategoryReducer