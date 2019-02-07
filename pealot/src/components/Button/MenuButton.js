import React from 'react';
import Icon from '../Icon/Icon';


const MenuButton = (props) => {
    return (
        <a className="menu" onClick={props.handleEvent}>
            <Icon icon="menu">menu</Icon>
        </a>
    )
}

export default MenuButton;