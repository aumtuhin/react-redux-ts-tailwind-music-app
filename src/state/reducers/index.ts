import { combineReducers } from "redux";
import productReducer from "./productReducer";
import musicReducer from './musicReducers';
import storage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';
import favouritemMusicReducer from './favouriteMusicReducers';


const reducers = combineReducers({
    products: productReducer,
    music: musicReducer,
    favouriteMusic: favouritemMusicReducer
});

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['products','favouriteMusic,']
};

export default persistReducer(rootPersistConfig, reducers);

export type State = ReturnType<typeof reducers>