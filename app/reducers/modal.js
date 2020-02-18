import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";

export default (state = initialState.modal, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_MODAL:
      return { auth: action.payload };
    case ActionTypes.REVIEW_MODAL:
      return { review: action.payload };
    default:
      return state;
  }
};
