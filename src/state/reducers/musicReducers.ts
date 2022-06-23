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
            }
        case ActionType.SET_CURRENT_PlAYLIST:
            const currentPlayListSongs = action.payload.songs.filter((song) => {
                return song.id !== state.currentSong.id;
            });
            state.curretPlayList = {
                name: action.payload.name,
                songs: [state.currentSong, ...currentPlayListSongs]
            };
            return {
                ...state,
                currentSong: state.curretPlayList.songs[0],
                isPlaying: true,
            }
        case ActionType.NEXT_SONG:
            state.currentSongIndex = state.currentSongIndex + 1;
            if (state.currentSongIndex > state.curretPlayList.songs.length - 1) {
                state.currentSongIndex = state.curretPlayList.songs.length - 1;
            }
            return {
                ...state,
                currentSong: state.curretPlayList.songs[state.currentSongIndex],
                isPlaying: true,
            }
        case ActionType.PEV_SONG:
            console.log(state.currentSongIndex);
            if (state.currentSongIndex === 0) {
                state.currentSongIndex = 0;
            } else {
                state.currentSongIndex = state.currentSongIndex - 1;
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