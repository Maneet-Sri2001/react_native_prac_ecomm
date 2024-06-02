import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const apiRoot = 'https://dummyjson.com/';

export const client = axios.create({
  baseURL: apiRoot,
  timeout: 60000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(
  async function (config) {
    var basicAuth = await AsyncStorage.getItem('userToken');
    if (basicAuth && basicAuth != null) {
      config.headers.Authorization = `Bearer ${basicAuth}`;
    } else { }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  function (response) {
    if (response.data) { return response.data; }
    else {
      var message = 'Trouble connecting to the server';
      if (response.data.message) { message = response.data.message; }
      return Promise.reject(response);
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);