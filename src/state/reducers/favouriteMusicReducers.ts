import { MusicAction } from "../actions";
import { ActionType } from "../action-types";
import { SongGroup } from '../../shared/interfaces';

const initialState = {
    favouriteMusic: {
        name: 'Your Favorites',
        songs: []
    } as SongGroup,
}

const favouritemMusicReducer = (state = initialState, action: MusicAction) => {
    switch (action.type) {
        case ActionType.ADD_FAVOURITE_SONG:
            console.log(state.favouriteMusic.songs.includes(action.payload));
            state.favouriteMusic.songs.push(action.payload);
            return {
                ...state,
                favouriteMusic: state.favouriteMusic
            };
        default:
            return state;
    }
}

export default favouritemMusicReducer;