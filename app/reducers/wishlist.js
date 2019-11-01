import _ from "lodash";
import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";

export default (state = initialState.wishlist, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_WISHLIST:
      return {
        ...state,
        ...action.payload
      };
    case ActionTypes.LOGOUT:
      return {};
    default:
      return state;
  }
};
