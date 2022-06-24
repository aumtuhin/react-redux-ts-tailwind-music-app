import { ActionType } from "../action-types"
import { Dispatch } from "redux";
import { MusicAction } from "../actions";
import { Song, SongGroup } from "../../shared/interfaces";

export const setPlaylist = (songGroup: SongGroup) => {
    return (dispatch: Dispatch<MusicAction>) => {
        dispatch({
            type: ActionType.SET_PlAYLIST,
            payload: songGroup
        });
    }
}

export const setCurrentSong = (song: Song) => {
    return (dispatch: Dispatch<MusicAction>) => {
        dispatch({
            type: ActionType.SET_CURRENT_SONG,
            payload: song
        });
    }
}

export const setCurrentPlaylist = (songGroup: SongGroup) => {
    return (dispatch: Dispatch<MusicAction>) => {
        dispatch({
            type: ActionType.SET_CURRENT_PlAYLIST,
            payload: songGroup
        });
    }
}

export const setIsPlaying = (isPlaying: boolean) => {
    return (dispatch: Dispatch<MusicAction>) => {
        dispatch({
            type: ActionType.SET_IS_PLAYING,
            payload: isPlaying
        });
    }
}

export const nextSong = () => {
    return (dispatch: Dispatch<MusicAction>) => {
        dispatch({
            type: ActionType.NEXT_SONG
        });
    }
}

export const prevSong = () => {
    return (dispatch: Dispatch<MusicAction>) => {
        dispatch({
            type: ActionType.PEV_SONG
        });
    }
}

export const addFavouriteSong = (song: Song) => {
    return (dispatch: Dispatch<MusicAction>) => {
        dispatch({
            type: ActionType.ADD_FAVOURITE_SONG,
            payload: song
        });
    }
}

