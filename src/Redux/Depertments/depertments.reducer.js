import { HANDLE_DEPERTMENTS_ADD, HANDLE_DEPERTMENTS_REMOVE } from "./depertments.types";

const initialState = {
    list: []
}

export const DepertmrntsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_DEPERTMENTS_ADD:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case HANDLE_DEPERTMENTS_REMOVE:
            return {
                ...state,
                list: [...state.list.filter(res => res.dept_name !== action.payload.dept_name)]
            }
        default:
            return state
    }
}