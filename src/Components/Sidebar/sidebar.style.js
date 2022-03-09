import styled from "styled-components";

export const StlyedSidebar = styled.div`
width: 20%;
border: 1px solid black;
margin: 10px;
& > .tab{
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid;
    & > .active{
        color: red
    }
}
`
