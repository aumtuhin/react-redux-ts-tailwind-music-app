import { combineReducers } from "redux";
import productReducer from "./productReducer";
import likedSongReducer from './likedSongReducer';

const reducers = combineReducers({
    products: productReducer,
    likedSongs: likedSongReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>