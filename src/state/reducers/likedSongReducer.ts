import { LikedSongAction } from "../actions";
import { ActionType } from "../action-types";
import { LikedSong } from "../../shared/interfaces";

const likedSong: LikedSong = {
    name: '',
    songs: []
};

const likedSongReducer = (state = likedSong, action: LikedSongAction) => {
    switch (action.type) {
        case ActionType.SET_LIKED_SONG:
            return {
                ...state,
                name: 'Liked Songs',
                songs: [...state.songs, action.payload]
            };
        default:
            return state;
    }
}

export default likedSongReducer;