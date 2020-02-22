import _ from "lodash";
import queryString from "query-string";
import ActionTypes from "../constants/actionType";
import { parseAggregtions } from "../utils/products";
import initialState from "../store/initialState";

export default (state = initialState.filters, action) => {
  switch (action.type) {
    case ActionTypes.FETCHED_PRODUCTS:
      const { query } = action;
      const filters = _.get(action, "payload.aggregations", {});
      let parsed = {};
      parsed.filters = parseAggregtions(filters, query);
      parsed.query = queryString.parse(query);
      parsed.total = _.get(action, "payload.hits.total", 0);
      parsed.chunkSize = _.get(action, "payload.hits.hits.length", 0);
      return parsed;
    default:
      return state;
  }
};
