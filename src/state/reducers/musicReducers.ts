import { MusicAction } from "../actions";
import { ActionType } from "../action-types";
import { Song, SongGroup } from '../../shared/interfaces';

const initialState = {
    currentSong: {} as Song,
    curretPlayList: {} as SongGroup,
    isPlaying: false,
}

const musicReducer = (state = initialState, action: MusicAction) => {
    switch (action.type) {
        case ActionType.SET_CURRENT_SONG:
            state.currentSong = action.payload;
            state.isPlaying = true;
            return {
                ...state,
                currentSong: state.currentSong,
                isPlaying: state.isPlaying,
            }
        case ActionType.SET_CURRENT_PlAYLIST:
            state.curretPlayList = action.payload;
            return {
                ...state,
                currentPlaylist: state.curretPlayList
            }
        case ActionType.SET_IS_PLAYING:
            state.isPlaying = action.payload;
            return {
                ...state,
                isPlaying: state.isPlaying
            }
        default:
            return state;
    }
}

export default musicReducer;