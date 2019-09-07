import * as syncActions from "./syncAction";
import { makeRequest, makeAsyncRequest } from "../constants/request";
import AppConstants from "../constants/appConstant";

export const searchSuggestion = term => dispatch =>
    makeAsyncRequest("get", `/suggest?term=${term}`).then(resp => {
        console.log(resp.data)
        dispatch(syncActions.gotSearchResults(resp.data, term))
    })
        .catch((err) => {
            console.log(err);
        });
export const filterResults = (query, page=1) => dispatch =>
    makeAsyncRequest("post", `/_search?${query}`).then(resp =>
        dispatch(syncActions.gotProducts(resp.data, query, page))
    );
export const productDetail = id => dispatch =>
    makeRequest("get", `${AppConstants.default.baseURL}/api/product/${id}`).then(resp =>
        dispatch(syncActions.gotProductDetail(resp.data))
    );
export const signup = data => dispatch =>
    makeAsyncRequest(
        "post",
        `${AppConstants.default.baseURL}/api/auth/register`,
        data
    ).then(resp => {
        dispatch(syncActions.gotUserDetails(resp.data.token));
        document.cookie = "authtoken=" + resp.data.token;
    });

export const login = data => dispatch => {
    makeAsyncRequest("post", `${AppConstants.default.baseURL}/api/auth/login`, data).then(
        resp => {
            dispatch(syncActions.gotUserDetails(resp.data.token));
            document.cookie = "authtoken=" + resp.data.token;
        }
    );
}

export const logout = () => dispatch =>
    makeAsyncRequest("post", `${AppConstants.default.baseURL}/api/auth/logout`).then(
        resp => {
            dispatch(syncActions.logoutUser());
            document.cookie = "authtoken=" + "";
        }
    );

export const wishlist = data => dispatch =>
    makeRequest("post", `${AppConstants.default.baseURL}/api/wishlist`, data, {
        Authorization: document.cookie.replace("authtoken=", "")
    }).then(resp => dispatch(fetchWishlist()));

export const fetchWishlist = () => dispatch =>
    makeRequest("get", `${AppConstants.default.baseURL}/api/wishlist`, null, {
        Authorization: document.cookie.replace("authtoken=", "")
    }).then(resp => dispatch(syncActions.fetchWishlist(resp.data)));
