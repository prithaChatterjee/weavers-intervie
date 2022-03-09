import React from 'react'
import { StyledButton } from './button.style'

const Button = (props) => {

    const { children, onClick, value, type = "button" } = props
    
    return (
        <StyledButton {...props} type={type} data-testid="button" value={value} onClick={onClick}>{children}</StyledButton>
    )
}

export default Button