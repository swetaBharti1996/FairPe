import ActionTypes from "../constants/actionType";

export const gotProductSeo = data => ({
  type: ActionTypes.PRODUCT_SEO,
  payload: data
});

export const loginError = data => {
  return {
    type: ActionTypes.LOGIN_ERROR,
    payload: data
  };
};

export const registerError = data => {
  return {
    type: ActionTypes.REGISTER_ERROR,
    payload: data
  };
};

export const emptyProducts = () => ({
  type: ActionTypes.EMPTY_PRODUCTS
});

export const gotWishlist = data => ({
  type: ActionTypes.FETCH_WISHLIST,
  payload: data
});

export const loading = () => ({
  type: ActionTypes.LOADING
});

export const logoutUser = () => {
  return { type: ActionTypes.LOGGED_OUT };
};

//  From Here

export const notification = data => ({
  type: ActionTypes.NOTIFICATION,
  payload: data
});

export const gotSearchResults = (data, term) => {
  return {
    type: ActionTypes.GOT_SUGGESTIONS,
    payload: data,
    term
  };
};

export const gotProducts = (data, query, page) => ({
  type: ActionTypes.FETCHED_PRODUCTS,
  payload: data,
  query,
  page
});

export const gotProductDetail = data => ({
  type: ActionTypes.PRODUCT_DETAIL,
  payload: data
});

export const authModal = flag => {
  return {
    type: ActionTypes.AUTH_MODAL,
    payload: flag
  };
};

export const partner = () => ({
  type: ActionTypes.PARTNER
});

export const subscribe = () => ({
  type: ActionTypes.SUBSCRIBE
});

export const contact = () => ({
  type: ActionTypes.CONTACT
});

export const question = () => ({
  type: ActionTypes.QUESTION
});

export const login = data => {
  return {
    type: ActionTypes.LOGIN,
    payload: data
  };
};

export const signup = data => {
  return {
    type: ActionTypes.SIGNUP,
    payload: data
  };
};

export const logout = () => {
  return {
    type: ActionTypes.LOGOUT
  };
};

export const changePassword = () => {
  return {
    type: ActionTypes.CHANGE_PASSWORD
  };
};

export const gotCategoryData = data => ({
  type: ActionTypes.CATEGORY,
  payload: data
});

export const clearCategoryData = () => ({
  type: ActionTypes.CLEAR_CAT
});

export const error = data => ({
  type: ActionTypes.ERROR,
  payload: data
});
