import React from 'react';
import { Link } from "react-router-dom";
import MenuButton from '../../Button/MenuButton';

const pages = [
    {
        icon: '/',
        name: 'Home',
        path: '/'
    },
    {
        icon: '/',
        name: 'Become a guide',
        path: '/joinus'
    },
    {
        icon: '/',
        name: 'Blog',
        path: '/discover'
    },
    {
        icon: '/',
        name: 'Help',
        path: '/support'
    },
    {
        icon: '/',
        name: 'Register',
        path: '/signup'
    },
    {
        icon: '/',
        name: 'Sign in',
        path: '/signin'
    }
];

export class HeaderNav extends React.Component {
    render() {
        const navItems = pages.map((page, i) => {
            if (i > 0) {
                return (
                    <li className="nav-item">
                        <Link to={page.path} className="nav-link">{page.name}</Link>
                    </li>
                )
            }

        })
        return (
            <nav className="navbar">
                <div className="container-fluid">
                    <MenuButton handleEvent={this.props.handleOpenBurger} />
                    <ul className="nav justify-content-end">
                        {navItems}
                    </ul>
                </div>
            </nav>
        );
    }
}