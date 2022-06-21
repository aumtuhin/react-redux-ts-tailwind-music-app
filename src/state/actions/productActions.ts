import { Song, SongGroup } from "../../shared/interfaces";
import { ActionType } from "../action-types";

interface SetProducts {
    type: ActionType.SET_PRODUCT,
    payload: SongGroup[]
}

interface SortProducts {
    type: ActionType.SORT_PRODUCT,
    payload: SongGroup[]
}

interface SetLikedSongs {
    type: ActionType.SET_LIKED_SONG,
    payload: Song
}

export type ProductAction = SetProducts | SortProducts | SetLikedSongs;
export type LikedSongAction = SetLikedSongs;