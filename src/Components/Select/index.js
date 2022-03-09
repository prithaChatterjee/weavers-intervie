import React from 'react'
import {StyledSelect} from "./select.style";

export const Select = (props) => {
    const { value, label, onchange, required, name, arrayofList = []} = props
    return (
        <StyledSelect value={value} id={name} name={name} required={required} onChange={e => onchange(e)}>
            <option value={""}>{label}</option>
            {arrayofList.map((res, i) => <option value={res.dept_name} key={i}>{res.dept_name}</option>)}
        </StyledSelect>
    )
}
