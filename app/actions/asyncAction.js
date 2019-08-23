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
export const filterResults = (query,page) => dispatch =>
    makeAsyncRequest("post", `/_search?${query}`).then(resp =>
        dispatch(syncActions.gotProducts(resp.data, query, page))
    );
