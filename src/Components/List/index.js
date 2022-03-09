import React from 'react'
import Button from '../Button';
import { StyledEmployee } from "./list.style";

export const List = (props) => {
    const { arrayofList = [], remove} = props

    const handleDelete = (value) => remove(value)
    return (
        <StyledEmployee>
            {arrayofList.map(
                (res, i) =>
                (<li key={i}>
                    <span className='sl_no'>{i + 1}</span>
                    {
                        Object.keys(res).map(key => <div className='info' key={key}>{res[key]}</div>)
                    }
                    <Button color="error" onClick={() => handleDelete(res)}>remove</Button>
                </li>)
            )}
        </StyledEmployee>
    )
}
