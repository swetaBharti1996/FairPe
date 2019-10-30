import { combineReducers } from "redux";
import auth from "./auth";
import home from "./home";
import filters from "./filters";
import modal from "./modal";
import products from "./products";
import search from "./search";
import productDetail from "./productDetail";
import wishlist from "./wishlist";
import notification from "./notification";

const rootReducer = combineReducers({
  auth,
  home,
  filters,
  modal,
  products,
  search,
  productDetail,
  notification,
  wishlist
});

export default rootReducer;
