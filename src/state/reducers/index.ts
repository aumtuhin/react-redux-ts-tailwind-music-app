import { combineReducers } from "redux";
import productReducer from "./productReducer";
import likedSongReducer from './likedSongReducer';
import musicReducer from './musicReducers';

const reducers = combineReducers({
    products: productReducer,
    likedSongs: likedSongReducer,
    music: musicReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>