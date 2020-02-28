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
import location from "./location";
import livePrice from "./livePrice";
import searchByURL from "./searchByURL";
import review from "./review";
import seo from "./seo";
import error from "./error";

const rootReducer = combineReducers({
  auth,
  home,
  filters,
  modal,
  products,
  search,
  productDetail,
  notification,
  wishlist,
  location,
  livePrice,
  searchByURL,
  review,
  seo,
  error
});

export default rootReducer;
