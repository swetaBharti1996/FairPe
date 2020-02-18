import _ from "lodash";
import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";

export default (state = initialState.error, action) => {
  switch (action.type) {
    case ActionTypes.ERROR:
      return action.payload;

    default:
      return state;
  }
};
