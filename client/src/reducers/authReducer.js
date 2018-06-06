import isEmpty from "../validation/is-empty";

import { SET_CURRENT_USER, GET_ERRORS } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        isAuthenticated: action.payload === "Unauthorized" ? false : true,
        user: action.payload === "Unauthorized" ? {} : state.user
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
