import React from 'react';
import Icon from '../Icon/Icon';


const CloseButton = (props) => {
    return (
        <a className="closebtn" onClick={props.handleEvent}>
            <Icon className="close">close</Icon>
        </a>
    )
}

export default CloseButton;