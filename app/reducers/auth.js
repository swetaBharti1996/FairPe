import JwtDecode from "jwt-decode";
import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case ActionTypes.LOGGED_IN:
      if (action.payload) {
        let data = JwtDecode(action.payload);
        return data;
      } else return {};
    case ActionTypes.LOGGED_OUT:
      return {};
    case ActionTypes.LOGIN_ERROR:
      return {
        ...state,
        login_error: action.payload
      }
    case ActionTypes.REGISTER_ERROR:
      return { 
        ...state,
        register_error: action.payload 
      };
    default:
      return state;
  }
};
