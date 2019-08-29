import _ from "lodash";
import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";

export default (state = initialState.productDetail, action) => {
  switch (action.type) {
    case ActionTypes.PRODUCT_DETAIL:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
