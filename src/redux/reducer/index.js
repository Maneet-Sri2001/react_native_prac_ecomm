import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Types } from "../actionType";
import userAuth from "./userAuth";
import homeScreen from "./homeScreen";

const allReducer = combineReducers({
  userAuth: userAuth,
  homeScreen: homeScreen,
});

const rootReducer = (state, action) => {
  if (action.type === Types.USER_LOGOUT_SUCCESS) {
    Object.keys(state).forEach(key => {
      AsyncStorage.removeItem(`persist:${key}`);
    });
    AsyncStorage.removeItem('userToken');
    state.login = undefined;
  }
  return allReducer(state, action);
};

export default rootReducer;
