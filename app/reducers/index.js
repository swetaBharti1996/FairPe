import { combineReducers } from "redux";
import home from "./home";
import filters from "./filters";
import products from './products';
import search from './search';
import productDetail from './productDetail';

const rootReducer = combineReducers({
    home,
    filters,
    products,
    search,
    productDetail
});

export default rootReducer;
