import _ from "lodash";
import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";

export default (state = initialState.seo, action) => {
  switch (action.type) {
    case ActionTypes.PRODUCT_SEO:
      return action.payload;

    default:
      return state;
  }
};
