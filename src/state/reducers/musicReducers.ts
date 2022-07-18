import { MusicAction } from "../actions";
import { ActionType } from "../action-types";
import { Song, SongGroup } from '../../shared/interfaces';

const initialState = {
    currentSong: {} as Song,
    curretPlayList: {} as SongGroup,
    isPlaying: false,
    currentSongIndex: 0,
}

const musicReducer = (state = initialState, action: MusicAction) => {
    switch (action.type) {
        case ActionType.SET_CURRENT_SONG:
            state.currentSong = action.payload;
            return {
                ...state,
                currentSong: state.currentSong
            }
        case ActionType.SET_CURRENT_PlAYLIST:
            const index = action.payload.songs.indexOf(state.currentSong);
            if (index > -1) {
                state.currentSongIndex = index;
            }
            state.curretPlayList = action.payload;
            return {
                ...state,
                curretPlayList: state.curretPlayList
            }
        case ActionType.SET_CURRENT_SONG_INDEX:
            state.currentSongIndex = action.payload;
            return {
                ...state,
                currentSongIndex: state.currentSongIndex,
                isPlaying: true,
            }
        case ActionType.NEXT_SONG:
            state.currentSongIndex += 1;
            if (state.currentSongIndex > state.curretPlayList.songs.length - 1) {
                state.currentSongIndex = 0;
            }
            return {
                ...state,
                currentSong: state.curretPlayList.songs[state.currentSongIndex],
                isPlaying: true,
            }
        case ActionType.PEV_SONG:
            if (state.currentSongIndex === 0) {
                state.currentSongIndex = state.curretPlayList.songs.length - 1;
            } else {
                state.currentSongIndex -= 1;
            }
            return {
                ...state,
                currentSong: state.curretPlayList.songs[state.currentSongIndex],
                isPlaying: true,
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