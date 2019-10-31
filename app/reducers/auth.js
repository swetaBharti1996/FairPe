import JwtDecode from "jwt-decode";
import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return JwtDecode(action.payload);

    case ActionTypes.SIGNUP:
      return JwtDecode(action.payload);

    case ActionTypes.LOGOUT:
      return {};

    // case ActionTypes.LOGGED_OUT:
    //   return {};
    // case ActionTypes.LOGIN_ERROR:
    //   return {
    //     ...state,
    //     login_error: action.payload
    //   };
    // case ActionTypes.REGISTER_ERROR:
    //   return {
    //     ...state,
    //     register_error: action.payload
    //   };
    default:
      return state;
  }
};
