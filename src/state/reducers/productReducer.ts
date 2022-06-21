import { ProductAction } from "../actions";
import { ActionType } from "../action-types";
import { AppState } from "../../shared/interfaces";
import { data } from '../../shared/mockData';

const initialState: AppState = {
    products: data,
};

const productReducer = (state = initialState, action: ProductAction) => {
    switch (action.type) {
        case ActionType.SET_PRODUCT:
            state.products = action.payload;
            return state.products;
        case ActionType.SORT_PRODUCT:
            state.products = action.payload;
            return state.products;
        default:
            return state;
    }
}

export default productReducer;