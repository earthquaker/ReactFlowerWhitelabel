import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import products from './productsReducer';
import whitelabel from './whitelabelReducer';

export default combineReducers({
    products,
    whitelabel,
    routing: routerReducer
});