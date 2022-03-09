import { combineReducers } from 'redux'
import { DepertmrntsReducer } from './Depertments/depertments.reducer'
import { EmployeeReducer } from './Employee/employee.reducer'

export default combineReducers({
    employee: EmployeeReducer,
    depertments: DepertmrntsReducer
})