import styled from 'styled-components'

export const StyledEmployee = styled.ul`
    list-style-type: none;
    margin: 15px 0;
    & > li{
        display: flex;
        margin-bottom: 15px;
        & > .sl_no{
            padding: 10px 10px 10px 0;
        };
        & > .info{
            border: 2px solid rgba(0,0,0,.12);
            padding: 10px 19px;
            border-radius: 8px;
            margin-right: 15px;
            width: 100%
        }
    };
`
