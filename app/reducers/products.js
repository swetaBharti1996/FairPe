import _ from "lodash";
import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";
import { parseProducts } from "../utils/products";

export default (state = initialState.products, action) => {
  switch (action.type) {
    case ActionTypes.FETCHED_PRODUCTS:
      const list = _.get(action, "payload.hits.hits", []);
      let parsed = {};
      parsed.products = parseProducts(list);
      parsed.count = list.length;
      parsed.total = _.get(action, "payload.hits.total");
      if (action.page == 1) {
        return parsed;
      } else {
        parsed.products = _.assign({}, state.products, parsed.products);
        return parsed;
      }
    case ActionTypes.EMPTY_PRODUCTS:
      return {};
    default:
      return state;
  }
};
