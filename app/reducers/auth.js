import JwtDecode from "jwt-decode";
import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case ActionTypes.LOGGED_IN:
      if (action.payload) {
        const data = JwtDecode(action.payload);
        return data;
      } else return {};

    case ActionTypes.LOGGED_OUT:
      return {};
    case ActionTypes.ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
