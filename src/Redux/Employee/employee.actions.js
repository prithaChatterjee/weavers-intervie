import { HANDLE_EMPLOYEE_ADD, HANDLE_EMPLOYEE_REMOVE } from "./employee.types";

export const employeeAdd = (value) => {
    return {
        type: HANDLE_EMPLOYEE_ADD,
        payload: value
    }
}

export const employeeRemove = (value) => {
    return {
        type: HANDLE_EMPLOYEE_REMOVE,
        payload: value
    }
}