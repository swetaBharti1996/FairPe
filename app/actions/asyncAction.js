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
export const filterResults = (query, page = 1) => dispatch =>
  makeAsyncRequest("post", `/_search?${query}`).then(resp =>
    dispatch(syncActions.gotProducts(resp.data, query, page))
  );
export const productDetail = id => dispatch =>
  makeRequest("get", `${AppConstants.default.baseURL}/api/product/${id}`).then(
    resp => dispatch(syncActions.gotProductDetail(resp.data))
  );

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
    `${AppConstants.default.baseURL}/api/fairpe/subscribe`,
    data,
    {}
  ).then(resp => dispatch(syncActions.subscribe()));

export const partner = data => dispatch =>
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/partner`,
    data,
    {}
  ).then(resp => dispatch(syncActions.partner()));

export const contact = data => dispatch =>
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/contacted`,
    data,
    {}
  ).then(resp => dispatch(syncActions.contact()));

export const question = data => dispatch =>
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/question`,
    data,
    {}
  ).then(resp => dispatch(syncActions.question()));

export const login = data => dispatch => {
  makeAsyncRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/login`,
    data
  ).then(resp => {
    document.cookie = "authtoken=" + resp.data.token;
    dispatch(syncActions.login(resp.data.token));
    // dispatch(fetchWishlist());
  });
};

export const signup = data => dispatch =>
  makeAsyncRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/signup`,
    data
  ).then(resp => {
    document.cookie = "authtoken=" + resp.data.token;
    dispatch(syncActions.signup(resp.data.token));
  });

export const logout = () => dispatch => {
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/logout`,
    null,
    { Authorization: document.cookie.replace("authtoken=", "") }
  ).then(resp => {
    document.cookie = "authtoken=" + "";
    dispatch(syncActions.logout());
  });
};

export const changePassword = data => dispatch => {
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/password`,
    data,
    { Authorization: document.cookie.replace("authtoken=", "") }
  ).then(resp => {
    document.cookie = "authtoken=" + "";
    dispatch(syncActions.changePassword());
  });
};
