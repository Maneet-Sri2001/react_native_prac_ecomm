import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import {createLogger} from "redux-logger";
import AsyncStorage from "@react-native-async-storage/async-storage";

import thunk from "redux-thunk";
import rootReducer from "../reducer";

// Middleware: Redux Persist Config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userAuth', 'homeScreen'],
};

const middleware = [];
middleware.push(createLogger());
middleware.push(thunk);

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export { store, persistor };
