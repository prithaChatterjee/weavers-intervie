import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { StlyedSidebar } from "./sidebar.style";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link className={match && "active"}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
}

export const Sidebar = () => {
    return (
        <StlyedSidebar>
            <div className='tab'>
                <CustomLink to="/">Employee</CustomLink>
            </div>
            <div className='tab'>
                <CustomLink to="/depertment">Depertment</CustomLink>
            </div>
        </StlyedSidebar>
    )
}
