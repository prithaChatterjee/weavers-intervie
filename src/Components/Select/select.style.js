import styled from "styled-components";
export const StyledSelect = styled.select`
width: ${props => props.fullWidth ? "100%" : "350px"}; 
padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 18px;
    padding-right: 18px;
    border: 2px solid rgba(0,0,0,.12);
    background: transparent;
    font-size: 16px;
    border-radius: 0.5rem;
`
