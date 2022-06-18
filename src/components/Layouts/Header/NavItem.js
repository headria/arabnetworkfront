import React from 'react'
import { Link } from 'react-router-dom'

export const NavItem = ({ url, text }) => {
    return (
        <li>
            <Link to={url}>{text}</Link>
        </li>
    )
}
