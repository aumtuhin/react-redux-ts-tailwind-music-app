import { Song, SongGroup } from "../../shared/interfaces";
import { ActionType } from "../action-types";


interface SetPlayList {
    type: ActionType.SET_PlAYLIST
    payload: SongGroup
}

interface SetCurrentSong {
    type: ActionType.SET_CURRENT_SONG
    payload: Song
}

interface SetCurrentPlaylist {
    type: ActionType.SET_CURRENT_PlAYLIST
    payload: SongGroup
}

interface SetIsPlaying {
    type: ActionType.SET_IS_PLAYING,
    payload: boolean
}

export type MusicAction = SetPlayList | SetCurrentSong | SetCurrentPlaylist | SetIsPlaying;