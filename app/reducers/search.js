import _ from "lodash";
import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";

export default (state = initialState.search, action) => {
  switch (action.type) {
    case ActionTypes.GOT_SUGGESTIONS:
      const payload = [action.term, ...action.payload];
      return _.assign({}, state, { [action.term]: payload, loading: false });

    case ActionTypes.LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
