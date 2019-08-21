import _ from "lodash";
import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";
import { parseProducts } from "../utils/products";

export default (state = initialState.products, action) => {
  switch (action.type) {
    case ActionTypes.FETCHED_PRODUCTS:
      const list = _.get(action, "payload.hits.hits", []);
      return parseProducts(list);

    case ActionTypes.EMPTY_PRODUCTS:
      return {};
    default:
      return state;
  }
};
