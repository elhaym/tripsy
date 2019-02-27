import React from 'react';
import { Link } from 'react-router-dom';
import CloseButton from '../../Button/CloseButton';

const pages = [
    {
        icon: "/",
        name: "About us",
        path: "/"
    },
    {
        icon: "/",
        name: "How Pealot works",
        path: "/"
    },
    {
        icon: '/',
        name: 'Pealot offerings',
        path: '/'
    },
    {
        icon: '/',
        name: 'Community',
        path: '/'
    },
    {
        icon: '/',
        name: 'Safety',
        path: '/'
    },
    {
        icon: '/',
        name: 'Contact us',
        path: '/'
    }
]

const SideNav = (props) => {
    const menuStyle = {
        width: props.burgerWidth,
        transition: '1500ms width ease'
    }
    const listStyle = {
        opacity: props.burgerOpacity,
        transition: '800ms opacity ease'
    }
    const linkStyle = {
        opacity: props.burgerOpacity,
        transition: '2s opacity ease'
    }
    const navLinks = pages.map((page, i) => {
        return (
            <li className="list-group-item" style={linkStyle}>
                <Link to={page.path} key={"menu-link-" + i}>
                    {page.name}
                </Link>
            </li>
        )
    })
    return (
        <div id="side-menu" style={menuStyle} className="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="col-12 h-100 sidenav">
                <div className="sidenav-wrapper" style={listStyle}>
                    <CloseButton handleEvent={props.handleCloseBurger} />
                    <div>
                        <ul className="list-group list-group-flush">
                            {navLinks}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SideNav;