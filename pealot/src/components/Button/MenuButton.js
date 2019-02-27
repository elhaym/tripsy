import React from 'react';
import Icon from '../Icon/Icon';


const MenuButton = (props) => {
    return (
        <div className="col-2 menu" onClick={props.handleEvent}>
            <Icon>menu</Icon>
        </div>
    )
}

export default MenuButton;