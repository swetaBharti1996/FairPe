import _ from "lodash";
import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";

export default (state = initialState.review, action) => {
  switch (action.type) {
    case ActionTypes.GET_STORE_REVIEW:
      return action.payload;

    default:
      return state;
  }
};
