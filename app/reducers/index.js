import { combineReducers } from "redux";
import home from "./home";
import filters from "./filters";
import products from './products';
import search from './search';

const rootReducer = combineReducers({
    home,
    filters,
    products,
    search
});

export default rootReducer;
