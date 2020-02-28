import * as syncActions from "./syncAction";
import { makeRequest, makeAsyncRequest } from "../constants/request";
import AppConstants from "../constants/appConstant";

import { message } from "antd";

export const searchSuggestion = (term, CB) => dispatch =>
  makeRequest("get", `/suggest?term=${term}`)
    .then(resp => {
      dispatch(syncActions.gotSearchResults(resp.data, term));
      CB(resp.data, term);
    })
    .catch(err => {
      CB([]);
    });

export const searchByURL = (URL, CB) => dispatch =>
  makeRequest("get", `${AppConstants.default.searchByURL}/?url=${URL}`)
    .then(resp => {
      dispatch(syncActions.getSearchByURL(resp.data));
      CB(resp.data);
    })
    .catch(err => {
      console.log(err);
      CB(false);
    });

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
export const productDetail = (id, CB) => dispatch =>
  makeRequest("get", `${AppConstants.default.baseURL}/api/fairpe/product/${id}`)
    .then(resp => {
      dispatch(syncActions.gotProductDetail(resp.data));
      CB(true);
    })
    .catch(err => {
      CB(false);
    });

export const getStoreReview = (data, CB) => dispatch =>
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/review/store`,
    data
  )
    .then(resp => {
      dispatch(syncActions.getStoreReview(resp.data));
      CB(true);
    })
    .catch(err => {
      CB(false);
    });

export const postStoreReview = (data, CB) => dispatch =>
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/review`,
    data,
    { Authorization: document.cookie.replace("authtoken=", "") }
  )
    .then(resp => {
      dispatch(syncActions.postStoreReview());
      CB(true);
    })
    .catch(err => {
      CB(false);
    });

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
      localStorage.setItem("loc", JSON.stringify({ ...resp.data, data }));
      dispatch(syncActions.gotCurrentLocation({ ...resp.data, data }));
      CB(true);
    })
    .catch(err => {
      CB(false);
    });
};

export const getProductSeo = (data, CB) => dispatch => {
  makeAsyncRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/seo`,
    data
  )
    .then(resp => {
      dispatch(syncActions.getProductSeo(resp.data));
      CB(true);
    })
    .catch(err => {
      console.log(err);
      CB(false);
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
      console.log();
      if (err.response.data) message.error(err.response.data.error);
      else message.error("error occured");

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

export const login = (data, CB) => dispatch =>
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
      CB(true);
    })
    .catch(err => {
      dispatch(syncActions.error(err.response.data));
      CB(false);
    });

export const signup = (data, CB) => dispatch =>
  makeAsyncRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/signup`,
    data
  )
    .then(resp => {
      document.cookie = `authtoken=${resp.data.token}; path=/`;
      dispatch(syncActions.signup(resp.data.token));
      dispatch(syncActions.error({}));
      CB(true);
    })
    .catch(err => {
      dispatch(syncActions.error(err.response));
      CB(false);
    });

export const logout = () => dispatch => {
  makeRequest(
    "post",
    `${AppConstants.default.baseURL}/api/fairpe/logout`,
    null,
    { Authorization: document.cookie.replace("authtoken=", "") }
  ).then(resp => {
    document.cookie = "authtoken=; path=/";
    dispatch(syncActions.logout());
  });
};

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
