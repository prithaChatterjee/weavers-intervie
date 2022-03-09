import React, {useState} from 'react'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import { List } from '../../Components/List';
import { Select } from '../../Components/Select';
import { StyledEmployee } from "./employee.style";
import { useDispatch, useSelector } from "react-redux";
import { employeeAdd, employeeRemove } from '../../Redux';

export const Employee = () => {

    const {employee, depertments} = useSelector((state) => state)

    const dispatch = useDispatch()

    const [formValues, setformValues] = useState({dept_name: "", employee_name: ""})

    const handleChange = (e) => setformValues({...formValues, [e.target.name]: e.target.value})

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(employeeAdd(formValues))
        setformValues({dept_name: "", employee_name: ""})
    }

    const handleDeleteEmployee = (item) => dispatch(employeeRemove(item))

    return (
        <StyledEmployee>
            <form onSubmit={(e) => handleSubmit(e)}>
                {/* <Input value={formValues.dept_name} required variant="outline" label="Enter Dept Name" name="dept_name"
                onchange={handleChange} /> */}
                <Select value={formValues.dept_name} required variant="outline" label="Enter Dept Name" name="dept_name"
                onchange={handleChange} arrayofList={depertments.list} />
                <Input value={formValues.employee_name} required variant="outline" label="Employee Name" name="employee_name"
                onchange={handleChange} />
                <Button type="submit" color="success">Add</Button>
            </form>
            <List arrayofList={employee.list} remove={handleDeleteEmployee} />
        </StyledEmployee>
    )
}
