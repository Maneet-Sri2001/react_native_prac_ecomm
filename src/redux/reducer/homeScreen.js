import { Types } from "../actionType";
import { homeScreenInitialState } from "../initialState";

export default function (state = homeScreenInitialState, action) {
  switch (action.type) {
    case Types.LOAD_HOME_SCREEN:
      return {
        ...state,
        homeScreenData: action.payload,
      };
    default:
      return state;
  }
}
