import React, {useState} from 'react'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import { List } from '../../Components/List';
import { StyledDepertment } from "./depertment.style";
import { useDispatch, useSelector } from "react-redux";
import { depertmrntsAdd, depertmrntsRemove } from '../../Redux';

export const Depertment = () => {

    const {depertments} = useSelector((state) => state)

    const dispatch = useDispatch()

    const [formValues, setformValues] = useState({dept_name: ""})

    const handleChange = (e) => setformValues({...formValues, [e.target.name]: e.target.value})

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(depertmrntsAdd(formValues))
        setformValues({dept_name: ""})
    }

    const handleDeleteEmployee = (item) => dispatch(depertmrntsRemove(item))

    return (
        <StyledDepertment>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Input value={formValues.dept_name} required variant="outline" label="Enter Depertmrnt Name" name="dept_name"
                onchange={handleChange} />
                <Button type="submit" color="success">Add</Button>
            </form>
            <List arrayofList={depertments.list} remove={handleDeleteEmployee} />
        </StyledDepertment>
    )
}
