import { Types } from '../actionType';
import { loginInitialState } from '../initialState';

export default function (state = loginInitialState, action) {
  switch (action.type) {
    case Types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case Types.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
