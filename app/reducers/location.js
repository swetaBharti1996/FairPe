import _ from "lodash";
import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";

export default (state = initialState.location, action) => {
  switch (action.type) {
    case ActionTypes.CURRENT_LOCATION:
      return {
        ...state,
        current: action.payload
      };

    default:
      return state;
  }
};
