import * as syncActions from "./syncAction";
import { makeRequest, makeAsyncRequest } from "../constants/request";
import AppConstants from "../constants/appConstant";

import { message } from "antd";

export const searchSuggestion = term => dispatch =>
  makeRequest("get", `/suggest?term=${term}`)
    .then(resp => {
      dispatch(syncActions.gotSearchResults(resp.data, term));
    })
    .catch(err => {});

export const filterResults = (query, page = 1) => dispatch => {
  makeAsyncRequest("post", `/_search?${query}`).then(resp => {
    dispatch(syncActions.gotProducts(resp.data, query, page));
  });
};

export const categoryResults = (query, page = 1) => dispatch => {
  makeAsyncRequest(
    "post",
    `${AppConstants.default.searchCategoryURL}/_search?${query}`
  ).then(resp => {
    dispatch(syncActions.gotProducts(resp.data, query, page));
  });
};
export const productDetail = id => dispatch =>
  makeRequest(
    "get",
    `${AppConstants.default.baseURL}/api/fairpe/product/${id}`
  ).then(resp => dispatch(syncActions.gotProductDetail(resp.data)));

export const getLivePrice = (id, CB) => dispatch =>
  makeRequest("get", `${AppConstants.default.livePriceURL}/_price?pid=${id}`)
    .then(resp => {
      dispatch(syncActions.gotLivePrice(resp.data));
      CB(true);
    })
    .catch(err => {
      CB(false);
    });

export const wishlist = data => dispatch => {
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/wishlist`,
    data,
    {
      Authorization: document.cookie.replace("authtoken=", "")
    }
  ).then(resp => dispatch(fetchWishlist()));
};

export const getCurrentLocation = (data, CB) => dispatch => {
  makeAsyncRequest(
    "post",
    `${AppConstants.default.baseURL}/api/google/location/geocoding`,
    data
  )
    .then(resp => {
      dispatch(syncActions.gotCurrentLocation(resp.data));
      CB();
    })
    .catch(err => {
      CB();
    });
};

export const fetchWishlist = () => dispatch =>
  makeRequest(
    "get",
    `${AppConstants.default.baseURL}/api/fairpe/wishlist`,
    null,
    {
      Authorization: document.cookie.replace("authtoken=", "")
    }
  ).then(resp => dispatch(syncActions.gotWishlist(resp.data)));

//

export const subscribe = data => dispatch =>
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/subscribe`,
    data,
    {}
  )
    .then(resp => {
      dispatch(syncActions.subscribe());
      dispatch(syncActions.error({}));
      message.success("subscribed");
    })
    .catch(err => {
      message.error("error occured");
      dispatch(syncActions.error(err.response.data));
    });

export const partner = data => dispatch =>
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/partner`,
    data,
    {}
  )
    .then(resp => {
      message.success("send");
      dispatch(syncActions.partner());
      dispatch(syncActions.error({}));
    })
    .catch(err => {
      message.error("error occured");
      dispatch(syncActions.error(err.response.data));
    });

export const contact = data => dispatch =>
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/contacted`,
    data,
    {}
  )
    .then(resp => {
      message.success("send");
      dispatch(syncActions.contact());
      dispatch(syncActions.error({}));
    })
    .catch(err => {
      message.error("error occured");
      dispatch(syncActions.error(err.response.data));
    });

export const question = data => dispatch =>
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/question`,
    data,
    {}
  )
    .then(resp => {
      message.success("send");
      dispatch(syncActions.question());
      dispatch(syncActions.error({}));
    })
    .catch(err => {
      message.error("error occured");
      dispatch(syncActions.error(err.response.data));
    });

export const login = data => dispatch =>
  makeAsyncRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/login`,
    data
  )
    .then(resp => {
      document.cookie = `authtoken=${resp.data.token}; path=/`;
      dispatch(syncActions.login(resp.data.token));
      dispatch(syncActions.error({}));
      dispatch(fetchWishlist());
    })
    .catch(err => {
      dispatch(syncActions.error(err.response.data));
    });

export const signup = data => dispatch =>
  makeAsyncRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/signup`,
    data
  )
    .then(resp => {
      document.cookie = `authtoken=${resp.data.token}; path=/`;
      dispatch(syncActions.signup(resp.data.token));
      dispatch(syncActions.error({}));
    })
    .catch(err => {
      dispatch(syncActions.error(err.response.data));
    });

export const logout = () => dispatch =>
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/logout`,
    null,
    { Authorization: document.cookie.replace("authtoken=", "") }
  ).then(resp => {
    document.cookie = "authtoken=; path=/";
    dispatch(syncActions.logout());
  });

export const changePassword = data => dispatch => {
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/password`,
    data,
    { Authorization: document.cookie.replace("authtoken=", "") }
  ).then(resp => dispatch(syncActions.changePassword()));
};

export const categoryData = query => dispatch =>
  makeRequest(
    "get",
    `${AppConstants.default.baseURL}/api/fairpe/category?category=${query}`
  ).then(resp => dispatch(syncActions.gotCategoryData(resp.data)));
