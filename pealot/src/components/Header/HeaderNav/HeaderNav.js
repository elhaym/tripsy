import React from 'react';
import { Link } from "react-router-dom";
import MenuButton from '../../Button/MenuButton';

const data = [
    {
        icon: '/',
        name: 'Home',
        path: '/'
    },
    {
        icon: '/',
        name: 'Create a parking space',
        path: '/joinus'
    },
    {
        icon: '/',
        name: 'Blog',
        path: '/stories'
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
        const links = data.map((link, i) => {
            if (i > 0) {
                return (
                    <li className="nav-item">
                        <Link to={link.path} className="nav-link">{link.name}</Link>
                    </li>
                );
            }
            else {
                return null;
            }
        });
        return (
            <nav className="row navbar">
                <div className="col-12 container-fluid">
                    <MenuButton handleEvent={this.props.handleOpenBurger} />
                    <div className="col-7">
                        <ul className="nav justify-content-end">
                            {links}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}