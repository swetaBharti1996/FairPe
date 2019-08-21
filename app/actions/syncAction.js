import ActionTypes from "../constants/actionType";

export const gotSearchResults = (data, term) => ({
    type: ActionTypes.GOT_SUGGESTIONS,
    payload: data,
    term
});
export const gotProducts = (data, query) => ({
    type: ActionTypes.FETCHED_PRODUCTS,
    payload: data,
    query
});
export const loading = () => ({
    type: ActionTypes.LOADING
});
