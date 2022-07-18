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
            state.favouriteMusic.songs.push(action.payload);
            return {
                ...state,
                favouriteMusic: state.favouriteMusic
            };
        case ActionType.REMOVE_FAVOURITE_SONG:
            const filteredSongs = state.favouriteMusic.songs.filter(song => song.id !== action.payload.id);
            state.favouriteMusic.songs = filteredSongs;
            return {
                ...state,
                favouriteMusic: state.favouriteMusic
            };
        default:
            return state;
    }
}

export default favouritemMusicReducer;