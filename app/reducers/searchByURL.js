import _ from "lodash";
import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";

export default (state = initialState.url, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_BY_URL:
      return action.payload;

    default:
      return state;
  }
};
