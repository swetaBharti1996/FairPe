import * as syncActions from "./syncAction";
import { makeRequest, makeAsyncRequest } from "../constants/request";
import AppConstants from "../constants/appConstant";

export const searchSuggestion = term => dispatch =>
  makeRequest("get", `/suggest?term=${term}`)
    .then(resp => {
      console.log(resp.data);
      dispatch(syncActions.gotSearchResults(resp.data, term));
    })
    .catch(err => {
      console.log(err);
    });
export const filterResults = (query, page = 1) => dispatch =>{
  
  makeAsyncRequest("post", `/_search?${query}`).then(resp =>{
    console.log("recieved",resp.data)
    dispatch(syncActions.gotProducts(resp.data, query, page))
  });
}
export const productDetail = id => dispatch =>
  makeRequest("get", `${AppConstants.default.baseURL}/api/product/${id}`).then(
    resp => dispatch(syncActions.gotProductDetail(resp.data))
  );
export const signup = data => dispatch =>
  makeAsyncRequest(
    "post",
    `${AppConstants.default.baseURL}/api/auth/register`,
    data
  )
    .then(resp => {
      dispatch(syncActions.gotUserDetails(resp.data.token));
      document.cookie = "authtoken=" + resp.data.token;
    })
    .catch(err => {
      dispatch(syncActions.registerError(err.response.data));
    });

export const login = data => dispatch => {
  makeAsyncRequest(
    "post",
    `${AppConstants.default.baseURL}/backend/api/fairpe/login`,
    data
  )
    .then(resp => {
      dispatch(syncActions.gotUserDetails(resp.data.token));
      dispatch(fetchWishlist());
    })
    .catch(err => console.error(err));
};

export const logout = () => dispatch =>
  makeAsyncRequest(
    "post",
    `${AppConstants.default.baseURL}/api/auth/logout`
  ).then(resp => {
    dispatch(syncActions.logoutUser());
    document.cookie = "authtoken=" + "";
  });

export const wishlist = data => dispatch =>
  makeRequest("post", `${AppConstants.default.baseURL}/api/wishlist`, data, {
    Authorization: document.cookie.replace("authtoken=", "")
  }).then(resp => dispatch(fetchWishlist()));

export const fetchWishlist = () => dispatch =>
  makeRequest("get", `${AppConstants.default.baseURL}/api/wishlist`, null, {
    Authorization: document.cookie.replace("authtoken=", "")
  }).then(resp => dispatch(syncActions.fetchWishlist(resp.data)));

//

export const subscribe = data => dispatch =>
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/backend/api/fairpe/subscribe`,
    data,
    {}
  ).then(resp => dispatch(syncActions.subscribe()));

export const partner = data => dispatch =>
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/backend/api/fairpe/partner`,
    data,
    {}
  ).then(resp => dispatch(syncActions.partner()));

export const contact = data => dispatch =>
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/backend/api/fairpe/contacted`,
    data,
    {}
  ).then(resp => dispatch(syncActions.contact()));

export const question = data => dispatch =>
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/backend/api/fairpe/question`,
    data,
    {}
  ).then(resp => dispatch(syncActions.question()));
