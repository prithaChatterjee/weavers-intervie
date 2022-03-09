import { HANDLE_DEPERTMENTS_ADD, HANDLE_DEPERTMENTS_REMOVE } from "./depertments.types";

export const depertmrntsAdd = (value) => {
    return {
        type: HANDLE_DEPERTMENTS_ADD,
        payload: value
    }
}

export const depertmrntsRemove = (value) => {
    return {
        type: HANDLE_DEPERTMENTS_REMOVE,
        payload: value
    }
}