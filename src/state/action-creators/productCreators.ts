import { ActionType } from "../action-types"
import { Dispatch } from "redux";
import { ProductAction } from "../actions";
import { SongGroup } from "../../shared/interfaces";

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