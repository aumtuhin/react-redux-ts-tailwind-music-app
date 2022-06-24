import { SongGroup } from "../../shared/interfaces";
import { ActionType } from "../action-types";

interface SetProducts {
    type: ActionType.SET_PRODUCT,
    payload: SongGroup[]
}

interface SortProducts {
    type: ActionType.SORT_PRODUCT,
    payload: SongGroup[]
}

export type ProductAction = SetProducts | SortProducts;