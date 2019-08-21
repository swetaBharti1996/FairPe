import * as syncActions from "./syncAction";
import { makeRequest, makeAsyncRequest } from "../constants/request";
import AppConstants from "../constants/appConstant";

export const searchSuggestion = term => dispatch =>
    makeRequest("get", `/suggest?term=${term}`).then(resp =>
        dispatch(syncActions.gotSearchResults(resp.data, term))
    );
export const filterResults = query => dispatch =>
    makeAsyncRequest("post", `/_search?${query}`).then(resp =>
        dispatch(syncActions.gotProducts(resp.data, query))
    );
