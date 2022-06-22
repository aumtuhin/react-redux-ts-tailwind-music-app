import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from "redux-thunk";
import reducers from "./reducers";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['likedSongs']
}
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, {}, applyMiddleware(thunk, logger));
export const persistor = persistStore(store);