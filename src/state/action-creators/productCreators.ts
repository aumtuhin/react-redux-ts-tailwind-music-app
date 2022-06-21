import { ActionType } from "../action-types"
import { Dispatch } from "redux";
import { ProductAction, LikedSongAction } from "../actions";
import { Song, SongGroup } from "../../shared/interfaces";

export const setProducts = (products: SongGroup[]) => {
    return (dispatch: Dispatch<ProductAction>) => {
        dispatch({
            type: ActionType.SET_PRODUCT,
            payload: products
        });
    }
}

export const sortProducts = (products: SongGroup[]) => {
    return (dispatch: Dispatch<ProductAction>) => {
        dispatch({
            type: ActionType.SORT_PRODUCT,
            payload: products
        });
    }
}

export const setLikedSongs = (song: Song) => {
    return (dispatch: Dispatch<LikedSongAction>) => {
        dispatch({
            type: ActionType.SET_LIKED_SONG,
            payload: song
        });
    }
}
