import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist'
import logger from 'redux-logger';
import thunk from "redux-thunk";
import reducers from "./reducers";;

export const store = createStore(reducers, {}, applyMiddleware(thunk, logger));
export const persistor = persistStore(store);