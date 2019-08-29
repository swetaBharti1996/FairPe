import ActionTypes from "../constants/actionType";

export const gotSearchResults = (data, term) => {
    console.log(data)
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
export const emptyProducts = () => ({
    type: ActionTypes.EMPTY_PRODUCTS
});
export const loading = () => ({
    type: ActionTypes.LOADING
});
