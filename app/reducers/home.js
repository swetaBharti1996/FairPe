import _ from "lodash";
import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";

export default (state = initialState.home, action) => {
  switch (action.type) {
    case ActionTypes.CATEGORY:
      return{
        ...state,
        category: action.payload
      }
      case ActionTypes.CLEAR_CAT:
        return {
          category: {}
        }
    default:
      return state;
  }
};
