import { HANDLE_EMPLOYEE_ADD, HANDLE_EMPLOYEE_REMOVE } from "./employee.types";

const initialState = {
    list: []
}

export const EmployeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_EMPLOYEE_ADD:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case HANDLE_EMPLOYEE_REMOVE:
            return {
                ...state,
                list: [...state.list.filter(res => res.employee_name !== action.payload.employee_name)]
            }
        default:
            return state
    }
}