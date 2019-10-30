import _ from "lodash";
import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";

export default (state = initialState.notification, action) => {
  switch (action.type) {
    case ActionTypes.NOTIFICATION:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};
