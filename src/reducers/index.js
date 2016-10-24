import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import company from './companyReducer';
import products from './productsReducer';
import whitelabel from './whitelabelReducer';

export default combineReducers({
    company,
    products,
    whitelabel,
    routing: routerReducer
});