import { Types } from "../actionType";
import { client } from "../../network";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUserAction = (user) => ({
  type: Types.USER_LOGIN_SUCCESS,
  payload: user,
});

export const logoutUserAction = () => ({
  type: Types.USER_LOGOUT_SUCCESS,
});

export const loginUser = (credential) => (dispatch) => {
  return new Promise((resolve, reject) => {
    client
      .post('auth/login', credential)
      .then(res => {
        try {
          AsyncStorage.setItem('userToken', res.token);
          AsyncStorage.setItem('userId', `${res.id}`);
          client
            .get('users/' + `${res.id}`)
            .then(userDetail => {
              dispatch(loginUserAction(JSON.stringify(userDetail)));
              resolve(res);
            }).catch(err => {
              reject(err);
            });
        } catch (err) {
          reject(err);
        }
      }).catch(err => {
        reject(err);
      });
  });
};

export const logoutUser = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    AsyncStorage
      .clear()
      .then(res => {
        dispatch(logoutUserAction());
        resolve({});
      }).catch(err => {
        reject(err);
      });
  });
};
