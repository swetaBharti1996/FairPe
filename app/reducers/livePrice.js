import _ from "lodash";
import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";

export default (state = initialState.livePrice, action) => {
  switch (action.type) {
    case ActionTypes.LIVE_PRICE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
