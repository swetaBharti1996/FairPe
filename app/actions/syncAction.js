import ActionTypes from "../constants/actionType";

export const gotSearchResults = (data, term) => {
    return ({
        type: ActionTypes.GOT_SUGGESTIONS,
        payload: data,
        term
    })
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

export const gotProductSeo = data => ({
    type: ActionTypes.PRODUCT_SEO,
    payload: data
});

export const gotUserDetails = data => {
    return {
        type: ActionTypes.LOGGED_IN,
        payload: data
    };
};

export const loginError = data => {
    return {
        type: ActionTypes.LOGIN_ERROR,
        payload: data
    }
}

export const registerError = data => {
    return {
        type: ActionTypes.REGISTER_ERROR,
        payload: data
    }
}

export const authModal = (flag) => {
    return {
        type: ActionTypes.AUTH_MODAL,
        payload: flag
    }
}

export const emptyProducts = () => ({
    type: ActionTypes.EMPTY_PRODUCTS
});

export const fetchWishlist = data => ({
    type: ActionTypes.FETCH_WISHLIST,
    payload: data
});

export const loading = () => ({
    type: ActionTypes.LOADING
});

export const logoutUser = () => {
    return { type: ActionTypes.LOGGED_OUT };
};