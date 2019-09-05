import ActionTypes from "../constants/actionType";
import initialState from "../store/initialState";

export default (state = initialState.modal, action) => {
    switch (action.type) {
        case ActionTypes.AUTH_MODAL:
            let data = {
                auth: action.payload
            }
            return data;
        default:
            return state;
    }
};
